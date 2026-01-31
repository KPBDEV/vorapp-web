// ==========================================
// VARIABLES GLOBALES
// ==========================================

let selectedLvl = null;
let players = [];
let cursor = 0;
let roundCount = 0;
let totalRounds = 0;
let gameHistory = [];
let settings = {
    sound: true,
    avoidRepeats: true,
    gamesPlayed: 0
};

// Variables para control de frases usadas
let usedVerdades = {};
let usedRetos = {};

// Audio Context para sonidos
let audioContext;
let soundBuffers = {};

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sistema de audio
    initAudioSystem();
    
    // Cargar configuración guardada
    loadSettings();
    loadHistory();
    
    // Cargar jugadores guardados
    const savedPlayers = JSON.parse(localStorage.getItem('voR_lastPlayers')) || [];
    if (savedPlayers.length > 0) {
        players = savedPlayers;
        updatePlayerCount();
    }
    
    // Inicializar menú de niveles
    initLevelMenu();
    
    // Configurar eventos
    setupEventListeners();
    
    // Actualizar estadísticas
    updateStats();
    
    // Verificar que DATABASE esté cargada
    console.log("✅ Juego inicializado");
    console.log("📊 DATABASE cargada:", DATABASE !== undefined);
    console.log("🎮 Niveles disponibles:", DATABASE ? Object.keys(DATABASE).length : 0);
});

// ==========================================
// SISTEMA DE AUDIO
// ==========================================

function initAudioSystem() {
    try {
        // Crear contexto de audio
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Crear sonidos simples (beeps)
        createSimpleSounds();
        
        console.log('✅ Sistema de audio inicializado');
    } catch (error) {
        console.warn('⚠️ Audio no disponible:', error);
        settings.sound = false;
    }
}

function createSimpleSounds() {
    // Crear un oscilador para cada tipo de sonido
    soundBuffers = {
        click: createBeepSound(800, 0.1, 0.3),
        add: createBeepSound(1200, 0.2, 0.3),
        remove: createBeepSound(400, 0.2, 0.3),
        start: createBeepSound(1000, 0.3, 0.5),
        next: createBeepSound(600, 0.2, 0.4),
        truth: createBeepSound(900, 0.4, 0.4),
        dare: createBeepSound(500, 0.4, 0.4),
        warning: createBeepSound(300, 0.5, 0.5),
        clear: createBeepSound(200, 0.3, 0.3),
        reset: createBeepSound(150, 0.5, 0.3)
    };
}

function createBeepSound(frequency, duration, volume) {
    return {
        frequency: frequency,
        duration: duration,
        volume: volume
    };
}

function playSound(type) {
    if (!settings.sound || !audioContext) return;
    
    try {
        const sound = soundBuffers[type];
        if (!sound) return;
        
        // Crear oscilador
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Configurar oscilador
        oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        // Configurar volumen (fade in/out)
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(sound.volume, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);
        
        // Conectar nodos
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Iniciar y detener sonido
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + sound.duration);
        
    } catch (error) {
        console.warn('Error reproduciendo sonido:', error);
    }
}

// ==========================================
// FUNCIONES DE INICIALIZACIÓN
// ==========================================

function initLevelMenu() {
    const menu = document.getElementById('menu-niveles');
    menu.innerHTML = '';
    
    LVLS.forEach((l, i) => {
        const card = document.createElement('div');
        card.className = 'nivel-card';
        card.onclick = () => procesarClickNivel(l);
        card.style.borderLeft = `5px solid ${l.color}`;
        
        card.innerHTML = `
            <div class="nivel-img" style="background: ${l.bgColor}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">
                ${l.n}
            </div>
            <div>
                <span class="nivel-txt-peq">Nivel ${l.n}</span>
                <span class="nivel-txt-gran"><b>${l.name}</b></span>
                <div class="nivel-desc" style="font-size:0.8rem; opacity:0.7; margin-top:5px;">
                    ${getLevelDescription(l.n)}
                </div>
            </div>
        `;
        
        menu.appendChild(card);
    });
}

function getLevelDescription(level) {
    const descriptions = {
        1: "Preguntas y retos sencillos",
        2: "Un poco más atrevido",
        3: "Se pone interesante",
        4: "Solo para valientes",
        5: "Extremo (+18)",
        6: "Límites al máximo"
    };
    return descriptions[level] || "";
}

function setupEventListeners() {
    // Toggle de sonido
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.checked = settings.sound;
        soundToggle.addEventListener('change', function() {
            settings.sound = this.checked;
            saveSettings();
            showMessage(`Sonido ${settings.sound ? 'activado' : 'desactivado'}`, 
                       settings.sound ? 'success' : 'warning');
        });
    }
    
    // Toggle de repetición
    const repeatToggle = document.getElementById('repeat-toggle');
    if (repeatToggle) {
        repeatToggle.checked = settings.avoidRepeats;
        repeatToggle.addEventListener('change', function() {
            settings.avoidRepeats = this.checked;
            saveSettings();
            showMessage(`Frases repetidas ${settings.avoidRepeats ? 'bloqueadas' : 'permitidas'}`,
                       'info');
        });
    }
    
    // Cargar jugadores si existen
    if (players.length > 0) {
        setTimeout(() => {
            players.forEach((player, index) => {
                if (index < 2) return;
                addInputWithData(player.n, player.g);
            });
        }, 100);
    }
}

// ==========================================
// FUNCIONES DE NAVEGACIÓN
// ==========================================

function irA(p) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.opacity = '0';
        s.style.transform = 'translateY(20px)';
    });
    
    // Mostrar la pantalla seleccionada
    const screen = document.getElementById('p' + p);
    screen.classList.add('active');
    
    // Animación de entrada
    setTimeout(() => {
        screen.style.opacity = '1';
        screen.style.transform = 'translateY(0)';
    }, 50);
    
    // Acciones específicas por pantalla
    if (p === 2) {
        updatePlayerInputs();
        document.getElementById('current-round').textContent = 1;
    } else if (p === 3) {
        updateGameUI();
    }
    
    playSound('click');
}

// ==========================================
// FUNCIONES DE NIVELES
// ==========================================

function procesarClickNivel(l) {
    selectedLvl = l;
    playSound('click');
    
    // Debug
    console.log("🎯 Nivel seleccionado:", l.n, l.name);
    
    if (l.n === 5) {
        mostrarAdvertencia(5, "Dinámicas de Alcohol (Reglas del Nivel)", [
            "La Cobardía se Paga: Si alguien se niega a responder una verdad o cumplir un reto en este nivel, debe tomar 3 shots seguidos.",
            "Shot de Solidaridad: Si un reto implica a dos personas, ambos deben tomar un shot antes de empezar para 'calentar motores'.",
            "El Verdugo: Quien cumpla el reto más atrevido de la ronda tiene el poder de elegir a una persona para que se tome 2 shots por 'falta de entusiasmo'."
        ]);
    } else if (l.n === 6) {
        mostrarAdvertencia(6, "Dinámicas del Infierno (Reglas de Oro)", [
            "El Pacto de Sangre (Alcohol): En este nivel, quien se niegue a un reto o verdad no toma un shot, se toma el 'Vaso del Infierno' (una mezcla de todas las bebidas de la mesa). Si no puede, debe abandonar el juego.",
            "La Sentencia: Después de cada 10 retos, el grupo elige a la persona que ha estado más 'tímida'. Esa persona debe quitarse una prenda de ropa o tomar un shot doble de castigo.",
            "El Confesionario: Las verdades en este nivel deben ser detalladas. Si el grupo siente que alguien está omitiendo detalles, pueden obligarlo a repetir la respuesta bajo presión de un shot."
        ]);
    } else {
        confirmarNivel();
    }
}

function mostrarAdvertencia(n, titulo, reglas) {
    const cont = document.getElementById('adv-contenido');
    cont.innerHTML = `
        <div class="adv-titulo">
            ⚠️ ${titulo}
        </div>
    `;
    
    reglas.forEach(r => {
        cont.innerHTML += `<div class="adv-item">${r}</div>`;
    });
    
    document.getElementById('advertencia').classList.add('active');
    playSound('warning');
}

function cerrarAdv() {
    document.getElementById('advertencia').classList.remove('active');
    playSound('click');
}

function confirmarNivel() {
    cerrarAdv();
    document.getElementById('lvl-sel-title').innerText = selectedLvl.name;
    document.getElementById('current-level').textContent = selectedLvl.n;
    
    // Resetear frases usadas para este nivel
    const levelKey = selectedLvl.n.toString();
    usedVerdades[levelKey] = [];
    usedRetos[levelKey] = [];
    
    // Ir a pantalla de jugadores
    irA(2);
}

// ==========================================
// FUNCIONES DE JUGADORES
// ==========================================

function addInput() {
    addInputWithData('', 'M');
}

function addInputWithData(name, gender) {
    const d = document.createElement('div');
    d.className = 'jugador-row';
    d.innerHTML = `
        <input type="text" class="in-nom" placeholder="Nombre..." value="${name}">
        <div class="gen-toggle">
            <div class="gen-opt m ${gender === 'M' ? 'active' : ''}" onclick="setGen(this,'M')">
                ♂
            </div>
            <div class="gen-opt f ${gender === 'F' ? 'active' : ''}" onclick="setGen(this,'F')">
                ♀
            </div>
        </div>
        <button class="btn-remove" onclick="removePlayer(this)">
            ✗
        </button>
    `;
    
    document.getElementById('lista-nombres').appendChild(d);
    playSound('add');
}

function setGen(btn, g) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.gen-opt').forEach(o => o.classList.remove('active'));
    btn.classList.add('active');
    playSound('click');
}

function removePlayer(btn) {
    const row = btn.closest('.jugador-row');
    row.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
        row.remove();
        playSound('remove');
    }, 300);
}

function updatePlayerInputs() {
    const container = document.getElementById('lista-nombres');
    container.innerHTML = '';
    
    // Agregar inputs para cada jugador guardado
    players.forEach(player => {
        addInputWithData(player.n, player.g);
    });
    
    // Si no hay jugadores, agregar 2 por defecto
    if (players.length === 0) {
        addInput();
        addInput();
    }
}

function checkStart() {
    players = [];
    let hasEmptyName = false;
    
    document.querySelectorAll('.jugador-row').forEach(r => {
        const input = r.querySelector('input');
        const name = input.value.trim();
        const gender = r.querySelector('.gen-opt.active').classList.contains('m') ? 'M' : 'F';
        
        if (name === '') {
            hasEmptyName = true;
            input.style.borderBottomColor = 'var(--danger)';
            input.classList.add('shake');
            
            setTimeout(() => {
                input.classList.remove('shake');
            }, 500);
        } else {
            players.push({ n: name, g: gender });
            input.style.borderBottomColor = 'var(--accent)';
        }
    });
    
    if (hasEmptyName) {
        showMessage("¡Todos los jugadores deben tener un nombre!", "error");
        return;
    }
    
    if (players.length < 2) {
        showMessage("¡Necesitas al menos 2 jugadores!", "error");
        return;
    }
    
    // Guardar jugadores
    localStorage.setItem('voR_lastPlayers', JSON.stringify(players));
    updatePlayerCount();
    
    // Iniciar juego
    cursor = 0;
    roundCount = 0;
    totalRounds = 0;
    
    // Resetear historial para nuevo juego
    gameHistory = [];
    
    // Actualizar UI
    updateGameUI();
    playSound('start');
    
    // Mostrar mensaje de éxito
    showMessage(`¡Juego iniciado con ${players.length} jugadores!`, "success");
    
    // Ir a pantalla de juego
    setTimeout(() => {
        irA(3);
    }, 1000);
}

// ==========================================
// FUNCIONES DE JUEGO PRINCIPAL
// ==========================================

function updateGameUI() {
    if (players.length === 0) return;
    
    const currentPlayer = players[cursor];
    document.getElementById('player-turn').innerText = currentPlayer.n;
    document.getElementById('player-position').textContent = cursor + 1;
    document.getElementById('total-players').textContent = players.length;
    document.getElementById('current-round-game').textContent = Math.floor(totalRounds / players.length) + 1;
    document.getElementById('current-level').textContent = selectedLvl ? selectedLvl.n : 1;
    
    // Limpiar frase anterior
    clearCurrentFrase();
    
    // Mostrar/ocultar UI
    document.getElementById('game-ui').classList.add('active');
    document.getElementById('frase-ui').classList.remove('active');
    
    // Animación para nuevo turno
    const playerTurn = document.getElementById('player-turn');
    playerTurn.style.animation = 'none';
    setTimeout(() => {
        playerTurn.style.animation = 'pulse 0.5s ease';
    }, 10);
}

function getFrase(tipo) {
    console.log("🎲 getFrase llamado - Tipo:", tipo);
    
    if (!selectedLvl) {
        console.error("❌ ERROR: No hay nivel seleccionado");
        showMessage("Selecciona un nivel primero", "error");
        return;
    }
    
    const nivelKey = selectedLvl.n.toString();
    console.log("🔑 Nivel:", nivelKey, "-", selectedLvl.name);
    
    // Verificar si DATABASE está cargada
    if (!DATABASE) {
        console.error("❌ ERROR CRÍTICO: DATABASE no está definida");
        showMessage("Error: Base de datos no cargada", "error");
        return;
    }
    
    // Verificar si el nivel existe en DATABASE
    if (!DATABASE[nivelKey]) {
        console.error(`❌ ERROR: Nivel ${nivelKey} no existe en DATABASE`);
        console.log("📋 Niveles disponibles:", Object.keys(DATABASE));
        showMessage(`Error: No hay contenido para nivel ${nivelKey}`, "error");
        return;
    }
    
    // Obtener la lista correcta (verdades o retos)
    const lista = tipo === 'VERDAD' 
        ? DATABASE[nivelKey].verdades 
        : DATABASE[nivelKey].retos;
    
    console.log(`📊 Lista de ${tipo}:`, lista ? lista.length : 0, "frases");
    
    // Verificar si la lista existe y tiene contenido
    if (!lista || !Array.isArray(lista) || lista.length === 0) {
        console.error(`❌ ERROR: Lista de ${tipo} vacía para nivel ${nivelKey}`);
        showMessage(`No hay ${tipo === 'VERDAD' ? 'verdades' : 'retos'} en este nivel`, "warning");
        return;
    }
    
    // Seleccionar frase aleatoria
    let aleatorio;
    
    if (settings.avoidRepeats) {
        // Inicializar arrays de usados si no existen
        if (!usedVerdades[nivelKey]) usedVerdades[nivelKey] = [];
        if (!usedRetos[nivelKey]) usedRetos[nivelKey] = [];
        
        const used = tipo === 'VERDAD' ? usedVerdades[nivelKey] : usedRetos[nivelKey];
        
        // Si ya se usaron todas, reiniciar
        if (used.length >= lista.length) {
            used.length = 0;
            showMessage("¡Todas las frases usadas! Reiniciando...", "info");
        }
        
        // Buscar frase no usada
        let attempts = 0;
        const maxAttempts = Math.min(lista.length * 2, 100);
        
        do {
            const randomIndex = Math.floor(Math.random() * lista.length);
            aleatorio = lista[randomIndex];
            attempts++;
            
            if (attempts > maxAttempts) {
                console.warn("⚠️ Demasiados intentos, usando cualquier frase");
                break;
            }
        } while (used.includes(aleatorio) && used.length < lista.length);
        
        used.push(aleatorio);
    } else {
        // Selección aleatoria simple
        const randomIndex = Math.floor(Math.random() * lista.length);
        aleatorio = lista[randomIndex];
    }
    
    console.log("✨ Frase seleccionada:", aleatorio.substring(0, 80) + "...");
    
    // Mostrar frase con animación
    const fraseBox = document.getElementById('txt-frase');
    fraseBox.style.opacity = '0';
    fraseBox.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        fraseBox.innerText = aleatorio;
        fraseBox.style.opacity = '1';
        fraseBox.style.transform = 'scale(1)';
        fraseBox.style.fontStyle = 'normal';
        fraseBox.style.fontSize = '1.8rem';
        fraseBox.style.fontWeight = '800';
        fraseBox.style.color = '#111';
    }, 200);
    
    // Actualizar tipo de frase
    const fraseTypeElement = document.getElementById('frase-type');
    fraseTypeElement.innerText = tipo;
    fraseTypeElement.className = `frase-type ${tipo.toLowerCase()}`;
    
    // Guardar en historial
    saveToHistory(players[cursor].n, tipo, aleatorio);
    
    // Cambiar UI
    document.getElementById('game-ui').classList.remove('active');
    document.getElementById('frase-ui').classList.add('active');
    
    // Efecto de transición
    const fraseUI = document.getElementById('frase-ui');
    fraseUI.style.opacity = '0';
    fraseUI.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        fraseUI.style.opacity = '1';
        fraseUI.style.transform = 'translateY(0)';
    }, 50);
    
    playSound(tipo === 'VERDAD' ? 'truth' : 'dare');
}

function clearCurrentFrase() {
    // Limpiar el contenido de la frase
    const fraseBox = document.getElementById('txt-frase');
    fraseBox.innerText = "Elige VERDAD o RETO...";
    fraseBox.style.opacity = '0.7';
    fraseBox.style.fontStyle = 'italic';
    fraseBox.style.fontSize = '1.5rem';
    fraseBox.style.fontWeight = 'normal';
    fraseBox.style.color = '#666';
    
    // Resetear tipo de frase
    document.getElementById('frase-type').innerText = '';
    document.getElementById('frase-type').className = 'frase-type';
}

function nextTurn() {
    // Primero limpiar la frase actual
    clearCurrentFrase();
    
    // Ocultar frase-ui y mostrar game-ui
    document.getElementById('frase-ui').classList.remove('active');
    document.getElementById('game-ui').classList.add('active');
    
    // Pequeña pausa para la transición
    setTimeout(() => {
        // Incrementar contadores
        cursor = (cursor + 1) % players.length;
        totalRounds++;
        
        if (cursor === 0) {
            roundCount++;
            document.getElementById('current-round').textContent = roundCount + 1;
            document.getElementById('current-round-game').textContent = roundCount + 1;
            
            // Mostrar mensaje de nueva ronda
            if (roundCount > 1) {
                showMessage(`¡Comienza la ronda ${roundCount + 1}!`, "info");
            }
        }
        
        // Actualizar UI
        updateGameUI();
        playSound('next');
        
    }, 300);
}

// ==========================================
// FUNCIONES DE HISTORIAL
// ==========================================

function saveToHistory(player, type, phrase) {
    const entry = {
        player: player,
        type: type,
        phrase: phrase,
        level: selectedLvl ? selectedLvl.n : 1,
        timestamp: new Date().toLocaleString(),
        round: roundCount + 1
    };
    
    gameHistory.push(entry);
    
    // Guardar en localStorage
    const allHistory = JSON.parse(localStorage.getItem('voR_history')) || [];
    allHistory.push(entry);
    localStorage.setItem('voR_history', JSON.stringify(allHistory.slice(-50)));
    
    // Actualizar estadísticas
    settings.gamesPlayed++;
    saveSettings();
    updateStats();
}

function showHistory() {
    const historyContent = document.getElementById('history-content');
    const allHistory = JSON.parse(localStorage.getItem('voR_history')) || [];
    
    if (allHistory.length === 0) {
        historyContent.innerHTML = '<p style="text-align: center; opacity: 0.7;">No hay historial aún</p>';
    } else {
        let html = '<div class="history-list">';
        
        // Agrupar por ronda
        const groupedByRound = {};
        allHistory.forEach(entry => {
            if (!groupedByRound[entry.round]) {
                groupedByRound[entry.round] = [];
            }
            groupedByRound[entry.round].push(entry);
        });
        
        // Mostrar por rondas (más reciente primero)
        const rounds = Object.keys(groupedByRound).sort((a, b) => b - a);
        
        rounds.forEach(round => {
            html += `
                <div class="history-round">
                    <div class="round-header">
                        🏁 Ronda ${round}
                    </div>
            `;
            
            groupedByRound[round].forEach((entry, index) => {
                const typeClass = entry.type === 'VERDAD' ? 'truth' : 'dare';
                html += `
                    <div class="history-item">
                        <div class="history-header">
                            <span class="history-player">${entry.player}</span>
                            <span class="history-type ${typeClass}">${entry.type}</span>
                            <span class="history-level">N${entry.level}</span>
                        </div>
                        <div class="history-phrase">${entry.phrase}</div>
                        <div class="history-time">${entry.timestamp}</div>
                    </div>
                `;
            });
            
            html += '</div>';
        });
        
        html += '</div>';
        historyContent.innerHTML = html;
    }
    
    document.getElementById('history-modal').classList.add('active');
    playSound('click');
}

function clearHistory() {
    if (confirm("¿Estás seguro de que quieres borrar todo el historial?")) {
        localStorage.removeItem('voR_history');
        showHistory();
        playSound('clear');
        showMessage("Historial borrado", "success");
    }
}

// ==========================================
// FUNCIONES DE CONFIGURACIÓN
// ==========================================

function showSettings() {
    // Actualizar toggles con valores actuales
    document.getElementById('sound-toggle').checked = settings.sound;
    document.getElementById('repeat-toggle').checked = settings.avoidRepeats;
    
    document.getElementById('settings-modal').classList.add('active');
    playSound('click');
}

function resetGame() {
    if (confirm("¿Estás seguro de que quieres reiniciar todas las estadísticas y configuraciones?")) {
        // Resetear configuración
        settings = {
            sound: true,
            avoidRepeats: true,
            gamesPlayed: 0
        };
        
        // Resetear datos
        players = [];
        gameHistory = [];
        usedVerdades = {};
        usedRetos = {};
        
        // Limpiar localStorage
        localStorage.removeItem('voR_lastPlayers');
        localStorage.removeItem('voR_settings');
        localStorage.removeItem('voR_history');
        
        // Actualizar UI
        updatePlayerInputs();
        updateStats();
        
        playSound('reset');
        showMessage("Juego reiniciado completamente", "success");
        
        // Cerrar modal
        closeModal('settings-modal');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    playSound('click');
}

// ==========================================
// FUNCIONES DE PERSISTENCIA
// ==========================================

function loadSettings() {
    const saved = JSON.parse(localStorage.getItem('voR_settings'));
    if (saved) {
        settings = { ...settings, ...saved };
    }
}

function saveSettings() {
    localStorage.setItem('voR_settings', JSON.stringify(settings));
}

function loadHistory() {
    const saved = JSON.parse(localStorage.getItem('voR_history')) || [];
    gameHistory = saved.slice(-20);
}

// ==========================================
// FUNCIONES DE UTILIDAD
// ==========================================

function updateStats() {
    const savedPlayers = JSON.parse(localStorage.getItem('voR_lastPlayers')) || [];
    document.getElementById('saved-count').textContent = savedPlayers.length;
    document.getElementById('games-count').textContent = settings.gamesPlayed;
}

function updatePlayerCount() {
    const count = players.length;
    const countElement = document.getElementById('saved-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

function showMessage(text, type = "info") {
    // Crear o reutilizar contenedor de mensajes
    let messageContainer = document.querySelector('.message-container');
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        document.body.appendChild(messageContainer);
    }
    
    // Crear mensaje
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    
    const icon = type === 'error' ? '❕' : 
                 type === 'success' ? '✅' : 
                 type === 'warning' ? '⚠' : 'ℹ';
    
    message.innerHTML = `
        <span style="font-size:1.2rem; margin-right:10px;">${icon}</span>
        <span>${text}</span>
    `;
    
    // Agregar a contenedor
    messageContainer.appendChild(message);
    
    // Animación de entrada
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            if (message.parentNode === messageContainer) {
                messageContainer.removeChild(message);
            }
        }, 300);
    }, 3000);
}

// ==========================================
// ESTILOS DINÁMICOS PARA MENSAJES
// ==========================================

document.head.insertAdjacentHTML('beforeend', `
<style>
    /* Sistema de mensajes */
    .message-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 300px;
    }
    
    .message {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border-left: 4px solid var(--accent);
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .message.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .message-error {
        border-left-color: var(--danger);
    }
    
    .message-success {
        border-left-color: var(--success);
    }
    
    .message-warning {
        border-left-color: var(--warning);
    }
    
    .message-info {
        border-left-color: var(--verdad);
    }
    
    /* Historial mejorado */
    .history-round {
        margin-bottom: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        overflow: hidden;
    }
    
    .round-header {
        background: rgba(241, 196, 15, 0.1);
        padding: 10px 15px;
        font-weight: bold;
        color: var(--accent);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .history-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .history-item {
        background: rgba(255, 255, 255, 0.05);
        padding: 15px;
        border-radius: 8px;
        margin: 0 10px 10px 10px;
        border-left: 3px solid var(--accent);
    }
    
    .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        flex-wrap: wrap;
        gap: 5px;
    }
    
    .history-player {
        font-weight: bold;
        color: var(--accent);
    }
    
    .history-type {
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .history-type.truth {
        background: var(--verdad);
        color: white;
    }
    
    .history-type.dare {
        background: var(--reto);
        color: white;
    }
    
    .history-level {
        background: rgba(255, 255, 255, 0.1);
        padding: 3px 8px;
        border-radius: 10px;
        font-size: 0.8rem;
        font-family: monospace;
    }
    
    .history-phrase {
        margin: 10px 0;
        line-height: 1.4;
        font-size: 0.95rem;
    }
    
    .history-time {
        font-size: 0.75rem;
        opacity: 0.7;
        text-align: right;
        font-family: monospace;
    }
    
    .btn-remove {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        border-radius: 5px;
    }
    
    .btn-remove:hover {
        background: rgba(231, 76, 60, 0.2);
        color: var(--danger);
    }
    
    .frase-type.verdad {
        background: var(--verdad);
        color: white;
    }
    
    .frase-type.reto {
        background: var(--reto);
        color: white;
    }
    
    /* Animaciones */
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    
    /* Responsive para mensajes */
    @media (max-width: 480px) {
        .message-container {
            left: 10px;
            right: 10px;
            max-width: none;
        }
    }
</style>
`);