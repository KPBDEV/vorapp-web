// ==========================================
// DATABASE - Contenido del juego
// ==========================================

const TEXT_DATA = {
    1: {
        name: "INOFENSIVO",
        v: `¿Cuál es el objeto más inútil que guardas en tu cuarto solo por nostalgia?
¿Qué es lo más ridículo que has buscado en Google últimamente?
¿Qué es lo más tonto que has hecho para intentar impresionar a alguien?
¿Cuál es el sueño más extraño que recuerdas haber tenido?
¿Cuál es la comida que todos aman, pero tú odias?
¿Qué es lo más infantil que sigues haciendo a tu edad?
¿Cuál ha sido tu momento más vergonzoso más gracioso en la escuela/trabajo?
¿Cuál es tu serie animada favorita de cuando eras niño?
¿Qué es lo primero que harías si te despertaras siendo invisible?
¿Qué es lo primero que harías si fueras del sexo opuesto por un día?
¿Cuál es tu fondo de pantalla del celular y por qué lo elegiste?
¿Cuál es el miedo más absurdo que tienes?
¿Qué es lo más raro que has comido por educación?
¿Cuál es el peor apodo que has escuchado?
¿Cuál es tu talento inútil más impresionante?
¿Qué personaje de caricatura era tu "crush" de la infancia?
¿Prefieres vivir sin salir con amigos o sin redes sociales por un año?
¿Qué es lo más tonto que has hecho por un reto?
¿Preferirías viajar al futuro o al pasado?
¿Qué olor extraño te gusta secretamente?
¿Cuál es la última mentira pequeña que dijiste?
¿Qué celebridad te cae mal sin ninguna razón aparente?
¿Cuál es el objeto que más valoras de tu habitación y por qué?
¿Qué es lo que más te gusta de tu personalidad?
¿Qué harías si ganaras la lotería mañana?
¿Cuál es tu hábito más extraño al dormir?
¿Cuál es la fobia más extraña que tienes?
¿Cuál es la aplicación de tu celular en la que pasas más tiempo?
¿Cuál es tu red social favorita para perder el tiempo?
¿Qué tendencia de moda te parece la más fea?
¿Qué es lo más vergonzoso que te ha pasado en un transporte público?
¿Cuál es el lugar más bonito en el que has estado?
¿Cuál es la mentira más fuerte que has dicho a tus padres?
¿Si pudieras tener un animal exótico de mascota, cuál sería?
¿Qué es lo que más te emociona de esta semana?
¿Cuál es tu película favorita de Disney o Pixar?
¿Cuál ha sido el regalo más feo que has recibido?
¿Cuál es el emoji que más usas para coquetear?
¿Qué superpoder elegirías tener por un día?
¿Cuál es el lugar más extraño donde has estado?
¿Cuál es tu serie favorita que te da pena recomendar?
¿Cuál es el objeto que más veces has perdido?
¿Cuál es la compra más inútil que has hecho?
¿Prefieres ser un excelente cantante o un excelente bailarín?
¿Preferirías ser siempre el más inteligente o el más gracioso?
¿Cuál es tu mayor "red flag" que tú mismo admites?
¿Qué canción te pone de buen humor al instante?
¿Cuál es el lugar de tus sueños para ir de vacaciones?
¿Alguna vez has stalkeado a alguien y se te ha escapado un "like"?
¿Cuál es tu mayor sueño frustrado (algo que querías ser de niño)?`,
        r: `Bebe un vaso de agua sin usar las manos.
Haz un dibujo rápido de la persona a tu izquierda y dáselo como regalo.
Deja que alguien del grupo te peine como quiera.
Hazle un cumplido a la persona que menos conozcas del grupo.
Come una cucharada llena de sal. 
Deja que tus amigos coloquen una nota en Ig/Messenger que ellos elijan durante 10 minutos.
Solo podrás elegir reto durante las próximas 3 rondas.
Enséñanos cuál fue la última foto que guardaste de Pinterest o Instagram.
Envía un mensaje de "Te quiero mucho" a un familiar y muestra la respuesta.
Deja que tus amigos suban de historia la foto que ellos elijan de tu galería.
Deja que alguien del grupo te ponga un tatuaje temporal con un bolígrafo o marcador.
Actúa como si quisieras enamorar a alguien del grupo que tu decidas.
Lee el 3° mensaje de tu celular que enviaste o te enviaron al buscar "amor".
Muestra tu habilidad física más inútil (ej. doblar dedos, mover orejas).
Elige a alguien y dile qué tres cosas te llevarías con esa persona a una isla desierta.
Llama a un amigo y cántale "Cumpleaños Feliz" aunque no sea su cumple.
Haz la boca de pato como si fueras a dar un beso exagerado hasta que se acabe la próxima ronda.
Haz 10 flexiones o sentadillas.
Dibuja algo raro en tu cara y déjatelo durante 3 rondas.
Ponte la chaqueta de alguien del grupo durante las próximas dos rondas.
Haz un pequeño resumen de 30 segundos sobre lo que has hecho hoy.
Envía un emoji de una fruta a un contacto al azar sin decir nada más.
Deja que alguien escriba su nombre con un marcador en tu brazo y tomate una foto.
Recibe un golpe de la persona frente a ti, que el/ella elija la fuerza.
Quédate en posición de "plancha" (ejercicio) mientras respondes tu próxima pregunta.
Lee el último mensaje que recibiste en voz alta.
Deja que alguien te maquille un poco.
Susurra un secreto tonto al oído de la persona a tu derecha.
Prepara o compra algo para comer y repárteles a todos.
Habla como alguien del grupo durante una ronda.
Dale un mini beso a un pie de la persona a tu derecha (rápido).
Inventa un saludo secreto con la persona que tienes enfrente.
Sal y grita muy fuerte lo que tus amigos decidan.
Cuéntale un secreto a la persona de tu izquierda, haz que se sorprenda.
Cambia tu foto de perfil por la de otra persona del grupo durante 30 minutos.
Deja que alguien escriba algo pequeño en tu brazo con marcador.
Muestra los últimos 3 emojis que usaste.
Haz una cara de "modelo de revista" durante 15 segundos sin reírte.
Dile una canción que le dedicarías a cada persona del grupo.
Cierra los ojos y adivina qué objeto te están poniendo en la mano.
Quédate en silencio total durante dos rondas.
Comenta que quisieras tener de la persona de tu izquierda sea físico o sobre la personalidad.
Tómate una foto con la persona de tu derecha haciendo una cara loca.
Dile un cumplido sincero a cada persona en la habitación.
Inventa un nombre de superhéroe para cada persona del grupo.
Dale la mano a la persona que te parece más graciosa del grupo.
Deja que revisen tu celular durante 30 segundos.
Revísale el bolso o la billetera de la persona que tu decidas.
Describe a tu "crush" de la infancia usando solo tres palabras.
Regálale cualquier cosa tuya a la persona de tu izquierda.`
    },
    2: {
        name: "MODERADO",
        v: `¿Quién de este grupo te parece el más atractivo/a?
¿Qué es lo primero que le miras a alguien cuando te gusta?
¿Alguna vez has revisado el perfil de alguien aquí presente sin que se diera cuenta?
¿Cuál ha sido tu peor cita o salida romántica?
¿Alguna vez has besado a alguien solo por compromiso o aburrimiento?
¿Qué es lo más atrevido que has hecho por un mensaje de texto?
¿Cuál es tu técnica para coquetear que casi nunca falla?
¿Alguna vez has mentido sobre tu edad o tu situación sentimental?
¿Quién en esta habitación crees que besa mejor (basándote solo en su vibra)?
¿Has tenido un sueño romántico con alguien que está aquí?
¿Qué es lo más vergonzoso que te ha pasado mientras intentabas ligar?
¿Alguna vez has fingido que te gusta algo (un deporte, una banda) solo para caerle bien a alguien?
¿Cuál es el cumplido más raro que te han hecho?
¿Qué es lo más "tóxico" que has hecho por celos?
Si tuvieras que salir con alguien del grupo, ¿a quién elegirías?
¿Alguna vez te han pillado mirando donde no debías?
¿Qué es lo que más te atrae de una persona físicamente?
¿Has usado alguna vez una aplicación de citas (Tinder, Bumble, etc.)?
¿Cuál es tu mayor arrepentimiento amoroso?
¿Qué opinas realmente de la persona que tienes a tu izquierda?
¿Alguna vez has enviado un mensaje picante a la persona equivocada?
¿Has llorado alguna vez por alguien que no valía la pena?
¿Qué es lo más loco que has hecho por amor (o por despecho)?
¿Quién de aquí crees que sería la peor pareja y por qué?
¿Has besado a más de una persona en una misma noche?
¿Alguna vez has salido con el ex de un amigo/a?
¿Qué es lo más cursi que has hecho y que ahora te da pena?
¿Cuál es tu mayor inseguridad al momento de conocer a alguien nuevo?
¿Alguna vez has stalkeado al ex de la persona que te gusta?
¿Qué es lo que siempre te hace fijarte en alguien?
¿Cuál es el lugar más público donde has dado un beso intenso?
¿Qué canción te recuerda a una persona que preferirías olvidar?
¿Alguna vez has dejado a alguien en "visto" a propósito para llamar su atención?
¿Qué es lo que más te han criticado tus ex parejas?
¿Has fingido estar enfermo para evitar una cita?
¿A qué persona del grupo le confiarías tu secreto más oscuro?
¿Cuál es tu mayor fantasía (que se pueda contar en público)?
¿Alguna vez te han rechazado de forma muy cruel?
¿Cuál es el rumor más raro que has escuchado sobre ti?
¿Quién de aquí crees que tiene el mejor estilo vistiendo?
¿Alguna vez has sentido atracción por un profesor o jefe?
¿Qué es lo más extraño que te parece atractivo en alguien?
¿Has borrado fotos con alguien de tus redes para que nadie sepa que salieron?
¿Cuál es la mayor mentira que le has dicho a un "crush"?
¿Prefieres un beso lento o uno apasionado?
¿Alguna vez has hecho "ghosting" (desaparecer sin dar explicaciones)?
¿Qué es lo que más te gusta que te digan al oído?
¿Quién de aquí sería el primero en casarse según tú?
¿Cuál es tu "tipo" de persona ideal en 3 palabras?
¿Si pudieras borrar un beso de tu pasado, cuál sería?`,
        r: `Susúrrale algo al oído a la persona que elijas del grupo.
Mira fijamente a los ojos de la persona frente a ti por 30 segundos sin reírte.
Dale un beso en la mejilla a la persona que te parezca más simpática.
Envía un mensaje a tu "crush" actual diciendo: "Hola, me acordé de ti" (y muestra la pantalla).
Deja que alguien del grupo revise tus últimos 5 mensajes de WhatsApp (solo el nombre de los contactos).
Hazle un masaje de hombros a la persona a tu derecha durante un minuto.
Baila una canción lenta con la persona de tu izquierda (sin música, solo el ritmo).
Publica una selfie con alguien del grupo y pon un pie de foto que diga "Mi favorito/a".
Quítate una prenda de ropa (que no sea la principal, como un zapato, chaqueta o accesorio).
Deja que alguien del grupo escriba algo en tu cuello con un labial o bolígrafo.
Dale un abrazo de 10 segundos a la persona que menos conozcas del grupo.
Confiesa qué es lo que más te gusta físicamente de la persona que tienes enfrente.
Deja que alguien te dé de comer algo (un snack o bebida) con los ojos cerrados.
Llama a un contacto de tu celular y dile un piropo gracioso.
Haz un baile sexy de 15 segundos (sin quitarte ropa).
Intercambia la camisa con alguien del grupo por las próximas dos rondas.
Muestra la última foto "comprometedora" o graciosa que tengas en tu galería.
Deja que la persona de tu derecha te despeine como quiera.
Siéntate en las rodillas de alguien del grupo durante toda la siguiente ronda.
Dale un beso en la mano a la persona que más te imponga respeto.
Intenta adivinar el color de la ropa interior de tres personas del grupo.
Deja que alguien te huela el perfume directamente del cuello.
Haz una videollamada de 5 segundos a alguien y cuelga sin decir nada.
Deja que el grupo elija una foto de tu galería y la publique en tus historias de Instagram.
Di el nombre de la persona en la habitación con la que tendrías una cita.
Muerde suavemente el lóbulo de la oreja de alguien (solo si ambos están de acuerdo).
Deja que alguien te dibuje un corazón en cualquier parte de la cara.
Quítale un calcetín a la persona de tu izquierda usando solo los dientes.
Describe cómo sería tu cita ideal con alguien del grupo (sin decir el nombre al principio).
Hazle un cumplido "picante" a alguien de la habitación.
Bebe un trago de tu bebida de forma "seductora".
Deja que alguien revise tus mensajes archivados de Instagram.
Dale un abrazo por la espalda a la persona que elijas y quédate así durante 20 segundos.
Susurra en el oído de la persona a tu derecha qué es lo que más te llamó la atención de ella cuando la conociste.
Deja que alguien te ponga un apodo "cariñoso" que el grupo deba usar el resto del juego.
Mira a alguien del grupo fijamente y descríbelo usando solo adjetivos que resulten atractivos.
Dale un beso a la pantalla de tu celular y enséñalo.
Deja que alguien te muerda el brazo (suavemente).
Confiesa a quién de aquí le darías un beso en la boca.
Elige a alguien para que te "alimente" con una uva, un dulce o un sorbo de bebida como si estuvieran en una cena romántica.
Deja que la persona de tu izquierda use tu teléfono para enviar un mensaje de texto (que no sea ofensivo) a quien ella quiera de tus contactos.
Envía un audio a un amigo describiendo a alguien del grupo como si fuera tu pareja.
Deja que alguien use tu dedo para desbloquear tu celular y ver una app al azar.
Recita una frase de una película romántica mirando a alguien a los ojos.
Hazle "ojitos" a la persona de tu izquierda hasta que se sonroje.
Deja que alguien te haga cosquillas durante 15 segundos sin que puedas moverte.
Cuenta una fantasía corta que hayas tenido recientemente.
Ponte el perfume o loción de alguien del sexo opuesto.
Dale un "beso de esquimal" (frotar narices) a la persona que elijas.
Elige a una persona para que sea tu "esclavo/a" (hacerte un favor pequeño) por una ronda.`
    },
    3: {
        name: "CONFIDENCIAL",
        v: `
¿Quién de los presentes ha aparecido en tus fantasías más recientes?
¿Cuál es el secreto más grande que ocultas actualmente?
¿Alguna vez has sentido atracción por la pareja de un amigo/a?
¿Qué es lo más atrevido que has hecho en un lugar público?
¿A cuántas personas les has enviado tu nudes?
¿Cuál es la mentira más grande que has dicho para acostarte con alguien?
¿Has besado a alguien de este grupo en secreto o has querido hacerlo?
¿Qué es lo que más te da curiosidad probar en la intimidad?
¿Alguna vez has tenido un amigo con derechos?
¿Cuál es tu mayor arrepentimiento en el ámbito sexual o romántico?
¿Qué es lo primero que harías si estuvieras a solas en una habitación con la persona que te gusta de aquí?
¿Has fingido un orgasmo o interés en alguien para no herir sus sentimientos?
¿Cuál es la búsqueda más vergonzosa o extraña que tienes en tu historial de incógnito?
¿Qué es lo que más te atrae de la persona que tienes justo enfrente pero que nunca le has dicho?
¿Qué parte del cuerpo de la persona a tu derecha te parece más sexy?
¿Has tenido una aventura de una noche?
¿Qué es lo más extraño que te excita?
¿Alguna vez te han pillado teniendo relaciones sexuales o tocándote? 
¿Has tenido sentimientos por alguien de tu mismo sexo?
¿Quién de aquí crees que es el más "fiestero" en la cama?
¿Cuál es la razón real por la que terminaste con tu última pareja?
¿Alguna vez has sido el "otro"/"otra" en una relación?
Si has mirado pornografía ¿Cuál es tu categoría y pagina favorita?
¿Has besado a alguien solo para poner celoso a otra persona?
¿Qué prenda de ropa te parece más atractiva en el sexo opuesto?
¿Cuál es tu mayor miedo en una relación íntima?
¿Alguna vez has tenido una fantasía con un desconocido/a?
¿Qué es lo que más te gusta que te hagan cuando te besan?
¿Has tenido un "crush" con un familiar lejano o alguien prohibido?
¿Prefieres ser dominado o tener el control?
¿Cuál es la mayor cantidad de personas con las que has estado en una semana?
¿Qué es lo que nunca perdonarías en una relación?
¿Has usado juguetes o accesorios en la intimidad?
¿Qué es lo más loco que has hecho por una apuesta?
¿Cuál es el lugar más extraño donde has tenido intimidad (o lo has intentado)?
¿Alguna vez has hecho un trío o te gustaría hacerlo?
¿Qué opinas de las relaciones abiertas?
¿Quién fue tu mejor beso y por qué?
¿Has mentido en este juego hasta ahora?
¿Cuál es la parte de tu cuerpo que más te gusta mostrar?
¿Alguna vez has grabado un video íntimo?
¿Qué es lo que más te atrae de la personalidad de tu "crush" actual?
¿Has sentido tensión sexual con alguien del grupo hoy?
¿Qué harías si la persona que te gusta te propone algo atrevido ahora mismo?
¿Cuál es tu "placer culposo" más extraño?
¿Has besado a alguien por el que no sentías nada de atracción?
¿Cuál es la propuesta más indecente que te han hecho?
¿Qué es lo que más te desanima de una persona?
¿Alguna vez has tenido una experiencia paranormal o muy extraña en el acto?
Si pudieras pasar una noche con cualquier persona del mundo, ¿quién sería?`, 
r: `Dale un beso intenso en el cuello a la persona de tu elección.
Deja que alguien del grupo te quite una prenda de ropa.
Envía un mensaje de texto "picante" a la última persona con la que saliste.
Muerde suavemente el labio inferior de la persona que elijan los demas.
Quítale una prenda a la persona de tu derecha usando solo tus dientes.
Haz un "body shot" (beber algo del cuerpo de otra persona).
Deja que alguien te susurre una fantasía al oído mientras te toca el cuello.
Siéntate en las piernas de la persona que más te guste del grupo durante 3 rondas.
Quítate la camisa/blusa por el resto de este nivel.
Dale un beso de 10 segundos a la persona de tu izquierda (tú eliges dónde).
Deja que alguien del grupo revise tus fotos de la carpeta "ocultos".
Hazle un baile picante a alguien durante 30 segundos.
Describe detalladamente cómo fue tu beso más intenso mientras miras a alguien a los ojos.
Deja que la persona de tu derecha te dé un masaje en los muslos por un minuto.
Confiesa cuál es la parte del cuerpo de la persona a tu izquierda que te provoca más curiosidad tocar.
Pasa tu lengua por el cuello de alguien de forma lenta.
Quédate en ropa interior durante una ronda (o quítate dos prendas).
Deja que alguien del grupo te escriba una palabra atrevida en la clavícula con un bolígrafo.
Besa a dos personas del grupo al mismo tiempo.
Debes mantener contacto físico (mano con mano, o pierna con pierna) con la persona que más te atraiga durante 2 rondas.
Susúrrale a alguien lo que le harías si estuvieran solos.
Deja que alguien use tu celular para publicar un comentario atrevido en la foto de tu "crush".
Deja que la persona que los demás elijan te haga un chupón.
Dale un beso (con lengua) a la persona que el grupo elija.
Deja que alguien te venda los ojos y te toque cualquier parte del cuerpo (tú adivinas quién fue).
Muerde suavemente 3 partes del cuerpo de la persona de sexo opuesto más lejano del grupo.
Deja que alguien te lama un poco de chocolate o crema de alguna parte del cuerpo.
Haz 5 flexiones de pecho sobre alguien que esté acostado en el suelo.
Bebe un trago directamente de la boca de otra persona.
Deja que el grupo elija a una persona para que te dé una nalgada fuerte.
Pasa un objeto pequeño (como un chicle) de tu boca a la de otra persona.
Deja que alguien te muerda suavemente el cuello o la clavícula.
Quítate el sostén (si usas) por debajo de la camiseta sin quitártela.
Haz ruidos de placer durante 30 segundos mientras alguien te mira.
Deja que alguien te dibuje algo en el abdomen con la lengua o labios y adivina que es.
Lame la espalda baja a la persona de tu derecha.
Deja que alguien te meta una mano por debajo de la camiseta durante 15 segundos.
Tómate una foto atrevida con alguien con tu celular.
Dile a alguien del grupo qué posición te gustaría probar con él/ella.
Deja que alguien se acerque a tus labios, pero sin tocarlos durante 20 segundos (No se vale la misma persona que hayas elegido anteriormente).
Deja que alguien del grupo te desabroche los primeros 2 botones y quédate así una ronda.
Permite que la persona que elijas te dé un beso en cualquier parte del cuerpo.
Huele el cuello de todos los presentes y di cuál es el que más te excita.
Recorra con tu nariz el brazo de alguien desde la mano hasta el hombro.
Deja que alguien te quite el cinturón (si llevas) usando solo una mano.
Elige a alguien y dile exactamente qué ropa interior crees que lleva puesta hoy, si no adivinas debes mostrar tu ropa interior.
Deja que alguien del grupo te dé un beso en el lugar que esa persona elija.
Quítate la camiseta durante una ronda completa.
Deja que alguien te sople aire caliente en el oído de forma seductora.
Dale un "beso de 30 segundos" a la persona que consideres que tiene los mejores labios del grupo.` 
},
    4: {
        name: "ALTO RIESGO",
        v: `¿Quién de este grupo es la persona con la que más has fantaseado o quisieras tener una nueva experiencia?
¿Del 1 al 10 cuanto te calificarías en la cama?
¿Cuál es el lugar más arriesgado donde has tenido relaciones sexuales?
¿Prefieres tener una relación secreta con un familiar cercano o con la pareja de un amigo/a?
¿Qué es lo que más te gusta que te hagan en la cama que te dé pena admitir?
¿Cuál es esa fantasía que te mueres por cumplir pero que te da miedo que te juzguen por lo "sucia" que es?
¿Cuál es la parte del cuerpo de la persona que tienes enfrente que más te dan ganas de besar?
¿Has practicado sexting con alguien de este grupo?
¿Cuál es tu posición favorita y por qué?
¿Qué es lo más perverso o atrevido que has hecho mientras estabas a solas pensando en alguien de aquí?
¿Quién de aquí crees que tiene el mejor cuerpo?
¿Quién crees que es el/la mejor en la cama del grupo?
¿Alguna vez has tenido un sueño erótico con alguien que está en esta habitación hoy?
¿Has grabado un video íntimo y todavía lo conservas?
¿Cuál es tu récord de tiempo de seguido teniendo relaciones?
¿Qué prenda de ropa de la persona a tu izquierda le quitarías primero?
¿Alguna vez has tenido relaciones en el trabajo o estudio?
¿Has sentido celos de alguien aquí presente por algo que pasó en el juego?
¿Cuál es el fetiche más raro que tienes?
¿Qué es lo primero que harías si te quedaras a solas y a oscuras con la persona que más te gusta de aquí?
¿Con quién harías un trio de los que están en el grupo?
¿Has fingido que te gusta alguien solo para tener sexo?
¿Cuál es la parte de tu cuerpo que más te gusta que te muerdan o laman?
¿Has tenido alguna experiencia con alguien mucho mayor que tú?
¿Define con lo que tu pienses a cada persona del grupo si es “Salvaje” o “Tranquilo” al momento de tener relaciones?
¿Alguna vez has sido pillado por tus padres teniendo relaciones?
¿Qué es lo más atrevido que has buscado en una página de contenido para adultos?
¿Prefieres las luces encendidas o apagadas?
¿Has tenido una cita a ciegas que terminó en sexo esa misma noche?
¿Cuál es el mensaje más caliente que has recibido?
Si tuvieras que calificar del 1 al 10 el atractivo sexual de cada persona en este círculo, ¿quién sería el 10 y quién el número más bajo?
¿Has usado alguna vez esposas o juguetes de dominación?
¿A qué persona de aquí dejarías que te hiciera lo que quisiera, con los ojos cerrados, durante 5 minutos?
¿Alguna vez has tenido relaciones en un lugar con mucha gente alrededor (sin que se daban cuenta)?
¿Has sentido atracción por alguien aquí y has tratado de ocultarlo todo el juego?
¿Qué es lo más largo que has estado sin tener sexo?
¿Cuál es el lugar más "prohibido" donde has dejado que alguien te toque o te bese?
¿Qué es lo que más te gusta morder de otra persona?
¿Con quién de este grupo tendrías un encuentro de una sola noche sin que nadie más se enterara?
¿Quién de aquí te parece que tiene los mejores labios para besar?
¿Alguna vez te has sentido atraído por la madre o el padre de un amigo?
¿Qué es lo que más te excita que te digan mientras lo estás haciendo?
¿Has tenido relaciones en un auto?
¿Cuál es tu mayor fantasía incumplida?
¿Qué es lo más atrevido que has hecho por una apuesta?
¿Alguna vez te has masturbado pensando en alguien de este grupo?
¿Cuál es el lugar de tu cuerpo más sensible al tacto?
¿Te gusta que te jalen el cabello o que te traten con delicadeza?
¿Has tenido un encuentro íntimo en el baño de una fiesta?
Si tuvieras que elegir a alguien de aquí para pasar una semana encerrados en un Motel, ¿quién sería?`, r: `RETOS
Dale un beso de 30 segundos a la persona que más te atraiga, usando lengua y usando las manos.
Deja que alguien del grupo te quite una prenda de ropa de su elección.
Haz un "body shot" (beber un trago) del ombligo o pecho de la persona de tu derecha.
Quítale una prenda a la persona de enfrente usando tus dientes.
Dale un masaje con aceite o crema en los hombros y espalda a alguien durante 2 minutos.
Permanece en ropa interior el resto del nivel.
Dale un beso en el cuello a la persona de tu izquierda hasta que dejes una marca pequeña.
Deja que alguien te ponga un hielo pequeño en el pantalón hasta que se derrita.
Besa el abdomen de la persona que más te guste del grupo.
Deja que alguien te dé nalgadas (el/ella elige cuántas).
Quítate la camisa y deja que la persona de tu derecha recorra tu torso con su lengua lentamente.
Deja que alguien te quite el cinturón o desabroche tu pantalón usando solo los dientes.
Haz un baile sexy sobre las piernas de alguien durante un minuto.
Besa a la persona de tu derecha en la parte intima por encima de la ropa.
Quítate dos prendas de ropa ahora mismo.
Pasa tu lengua por la clavícula de alguien de forma muy lenta.
Elige a alguien y deja que te dé un "chupetón" o una mordida intensa en la parte interna del muslo.
Intercambia tu ropa interior con alguien del sexo opuesto (en otra habitación y regresan).
Pasa un hielo por el cuerpo de alguien usando solo tu boca.
Deja que alguien te venda los ojos y use su boca para besarte donde quiera; tienes que aguantar sin moverte 1 minuto.
Deja que alguien te haga un chupetón en el cuello.
Deja que alguien te meta la mano por debajo del pantalón/falda durante 20 segundos.
Dale un beso apasionado a la persona que consideres el "crush" del grupo.
Quítale el sostén o la camiseta a alguien usando solo una mano.
Deja que alguien del grupo te lama cualquier parte del cuerpo que el grupo elija.
Recuéstate y deja que alguien se siente sobre ti mientras ambos se miran fijamente.
Haz ruidos de placer intensos durante 30 segundos mientras miras a alguien a los ojos.
Besa el muslo de la persona que tienes a tu izquierda, lo más arriba que puedas.
Deja que alguien te dibuje algo en la espalda usando solo sus labios, si no lo adivinas deberás tomar un chorro de trago.
Simula una posición sexual con alguien durante 15 segundos.
Pasa un dulce de boca a boca con la persona que menos te lleves.
Deja que alguien te huela la zona del cuello y el pecho muy de cerca.
Deja que la persona de enfrente te toque los pechos o pectorales con su boca durante 20 segundos.
Dale un beso en la boca a las personas de tu sexo opuesto que tengas a tu derecha y luego a la de tu izquierda.
Deja que alguien del grupo te toque los pectorales o pechos por encima de la ropa.
Hazle una marca de beso con labial a alguien del grupo.
Dale un beso a las 2 personas con las que harías un trio.
Pasa tu lengua por los labios de la persona que tienes a la izquierda y termina con un beso de lengua profundo.
Deja que alguien te desabroche la camisa/blusa totalmente y quédate así.
Tómate una foto muy sugestiva con alguien y envíala a un grupo o a otra persona.
Muerde el labio de alguien de forma que le dé un escalofrío.
Deja que alguien te sople aire frío en una zona sensible de tu cuerpo.
Recorre con tu lengua el borde de la oreja de alguien.
Quédate sentado encima de la persona de tu elección hasta que termine el nivel.
Deja que alguien te meta un hielo por la espalda y que baje hasta donde llegue.
Dale un beso en la mano a todos, pero a la persona que más te guste, dáselo en la boca.
Deja que alguien del grupo elija qué prenda debes quitarte ahora.
Hazle un "striptease" de 30 segundos a alguien del grupo distinta a las 2 personas que hayas mencionado o elegido anteriormente.
Deja que alguien derrame un poco de bebida en tu pecho o abdomen y lo limpie usando solo su boca.
Dale un beso de película (largo y apasionado) a la persona que elegiste en la primera pregunta de este nivel.`
    },
    5: {
        name:"PELIGRO",
        v: `Si tuvieras que elegir a una persona de este grupo para que te vea teniendo relaciones con alguien más, ¿quién sería y por qué crees que le gustaría mirar?
¿Si hoy fuera el fin del mundo y solo pudieras tener sexo una última vez con alguien de este círculo, ¿quién sería y qué posición usarían?
¿Cuál es el fetiche o práctica que has buscado en internet pero que jamás te atreverías a proponerle a una pareja por miedo a que piense que estás loco/a?
Califica el atractivo sexual de todos los presentes de menor a mayor. El que quede de último te da un shot.
¿Qué es lo que más te genera morbo de la persona que tienes a tu derecha, pero que te da pánico que los demás se enteren?
¿Por cuánto dinero estarías dispuesto a tener relaciones con un/una Sugar?
¿Has sentido una atracción sexual incontrolable por alguien de este grupo que esté actualmente en una relación con otra persona presente?
¿A quién de aquí enviarías una foto explícita en este preciso momento si no hubiera consecuencias?
¿Cuál es la mayor mentira que has dicho en este juego para no quedar mal?
¿Has sentido tensión sexual con alguien de aquí que sea mucho mayor o mucho menor que tú?
¿Qué parte de tu cuerpo es la que más te gusta que sea lamida, pero te da vergüenza pedirlo?
¿Cuál es el fetiche que descubriste viendo pornografía y que ahora te mueres por probar con alguien de aquí?
¿Quién de aquí crees que tiene la mente más perversa?
¿Alguna vez has tenido un encuentro íntimo con dos personas de este mismo grupo (en momentos diferentes)?
¿Cuál es la propuesta más indecente que te han hecho por mensaje directo y por qué no la aceptaste (o sí)?
¿Qué es lo que más te atrae de alguien que te cae mal?
¿Alguna vez has fingido un sentimiento profundo solo para conseguir un encuentro de una noche?
¿Cuál es el video o foto más comprometedor que tienes en tu "Carpeta Oculta" ahora mismo?
¿Dónde te gusta echar o que te echen el S3MEN?
¿A quién de aquí elegirías para ser tu "esclavo/a" sexual por una noche completa?
Nombra a la persona con la que MENOS tendrías algo. Esa persona te sirve un shot doble.
¿Qué es lo más atrevido que has hecho en una videollamada mientras alguien más estaba en la casa?
¿Has sentido celos reales hoy al ver a alguien de aquí cumplir un reto con otra persona?
¿Quién de este grupo crees que tiene el olor corporal más excitante y qué te gustaría hacerle mientras lo hueles de cerca?
¿Qué prenda de la persona que tienes enfrente crees que esconde su mejor atributo?
¿Cuál ha sido tu experiencia más cercana a un trío o una orgía?
¿Qué es lo que más te gusta que te hagan cuando tienes los ojos vendados?
¿Alguna vez ha tenido un "crush" como un profesor o jefe y llegaste a tener algo con esa persona?
¿Quién de aquí sería tu primera opción para un "amigo con derechos" permanente?
¿Qué es lo más vergonzoso que has buscado en Google sobre sexualidad en el último mes?
¿Cuál es la mayor locura que has hecho por puro despecho sexual?
¿Has usado alguna vez juguetes frente a una cámara para alguien que no conocías?
¿Qué parte del cuerpo de la persona a tu derecha te produce más morbo?
¿Cuál es el insulto más "sucio" que te gusta que te digan en la intimidad?
¿Alguna vez has tenido relaciones en una piscina o jacuzzi público?
El que lleve la ropa interior más pequeña o no lleve, elige quién toma 2 shots.
¿Cuál es tu opinión real sobre el poliamor después de ver a los que están aquí?
¿Has sentido atracción por alguien que está comprometido/a hoy en esta mesa?
¿Cuál es el objeto de esta habitación que usarías para un juego erótico?
Si tuvieras que describir cómo sería el encuentro sexual perfecto con la persona que tienes enfrente, usando solo tres palabras, ¿cuáles serían?
¿Cuál es el recuerdo sexual que más te excita cuando estás aburrido/a?
¿Quién de aquí crees que es el más "sumiso" en la cama?
¿Has tenido un encuentro con alguien solo porque su perfume te volvió loco/a?
¿Cuál es la zona prohibida de tu cuerpo que nadie ha tocado aún, pero quieres que alguien de aquí lo haga?
¿Alguna vez te has sentido atraído por la voz de alguien de este grupo?
¿A quién de este grupo le permitirías que te grabara en una situación comprometedora y por qué confías en esa persona?
¿Prefieres que te traten con mucha fuerza o con una delicadeza extrema?
¿Quién de este grupo crees que tiene el mejor "aguante" en una noche de pasión?
¿Cuál es la mayor cantidad de personas con las que has compartido cama (aunque no pasara nada)?
¿Qué es lo que más te asusta de tus propios deseos sexuales y cuál de los presentes crees que sería capaz de cumplirlos?`, r: `Elige a alguien para que tome un shot servido en tu ombligo, pero debe recoger el exceso con la lengua.
Quítate la camisa/blusa y deja que la persona de tu derecha trace figuras en tu espalda con su lengua mientras tú mantienes los ojos cerrados.
Con los ojos vendados, debes adivinar quién es la persona que te está dando un beso solo por su olor y tacto.
Recuéstate en el suelo y deja que alguien de este grupo se coloque encima de ti (sin tocar el suelo) y mantengan contacto visual por 30 segundos.
Elige a alguien y simulen su posición favorita durante 30 segundos, con ruidos y movimientos reales.
Deja que la persona de tu derecha te haga un "chupetón" en una zona que NO sea el cuello.
Envía un mensaje de audio a tu ex gimiendo el nombre de alguien de este grupo.
Deja que alguien meta su mano por debajo de tu camisa y te dé un masaje en el pecho/pectorales por 1 minuto.
Tú y otras dos personas deben darse un beso al mismo tiempo (beso de tres) durante 15 segundos.
El grupo elige una prenda tuya para ser subastada, si no la entregas tomas 4 shots.
Toma un shot, mantenlo en tu boca y pásalo a la boca de la persona de enfrente sin derramar nada.
Deja que todos en el grupo te den una nalgada; tú debes elegir quién lo hizo con más "intención".
Haz un baile erótico usando una silla y a una persona del grupo como público directo.
Alguien debe escribir su nombre en tu abdomen o pecho usando labial y solo sus labios para sostenerlo.
Pon un hielo en tu boca y pásalo a la boca de otra persona mediante un beso francés hasta que se consuma.
Muerde suavemente el labio inferior de tres personas diferentes y elige el mejor.
Toma un trago de alcohol fuerte y sopla el aliento caliente en el oído de alguien mientras le acaricias la entrepierna.
Debes desabrochar el pantalón de la persona de tu izquierda usando solo los dientes y bajarlo hasta donde ella te permita.
Juega la Semana Inglesa con la 3° persona a tu izquierda. 
Deja que alguien meta su mano en tu ropa interior y toque piel por 10 segundos.
Haz un perreo intenso contra alguien, pero ambos deben tener un shot en la mano sin derramarlo.
Reta a otra pareja para perrear, los demás son el jurado y deciden el ganador, la pareja que pierda deberá tomar 10 shots.
Recrea la escena del beso de Spider-Man con alguien.
Con los ojos vendados, toca la ropa interior de alguien (por fuera del pantalón) y adivina el color o material.
Si alguien tiene pies bonitos, debes tomar un shot de su pie.
Deja que alguien te desabroche el pantalón o falda y te lo baje un poco usando solo los dientes.
Lame una línea de sal del cuello de alguien y termina con un shot.
Siéntate en las piernas de la persona que elegiste en la primera pregunta de este nivel y deja que te susurre qué te haría en una habitación a oscuras.
Abraza a alguien por la espalda y mantén tus manos en su cintura/cadera por 3 rondas.
Quítate el cinturón y deja que alguien te dé un pequeño azote con él.
Deja que alguien te eche un poco de agua en la camisa (en el área del pecho) y quédate así.
Muestra tu historial de chats y deja que el grupo elija a quién debes decirle "Te deseo".
Dale un masaje en el cuello a alguien usando solo tus labios y lengua por 1 minuto.
Deja que la persona de enfrente sople aire caliente en tu entrepierna durante 20 segundos.
Ve a un cuarto a solas y pasa 5 minutos en el paraíso con la persona del sexo opuesto que tenga el primer nombre en orden alfabético.
Deja que alguien te derrame un poco de licor en el cuello o pecho y lo limpie lentamente con su lengua.
Tómate una foto donde se vea tu ropa interior y envíala a la persona que más te guste de la mesa sin que nadie se de cuenta.
Debes realizar un baile sexy sobre las piernas de alguien mientras le quitas la camisa.
Dale un beso a alguien en el lugar más cercano a sus partes íntimas que te permita.
Pega tu cuerpo al de alguien y manténganse así, sintiendo el calor del otro, por 2 rondas.
Dile a cada persona del grupo una cosa diferente que te gustaría hacerles en la cama.
Todos los del grupo se deben quitar una prenda.
Llena tu boca de alcohol y dale un beso a alguien, compartiendo el líquido poco a poco.
Elige a dos personas para que se den un beso apasionado mientras tu besas a otra persona que ellos elijan.
Los demás del grupo deben elegir 2 personas para pasar contigo en una pieza a solas durante 5 minutos, mínimo tendrá que haber un beso.
Debes recibir un pequeño shot servido de cada integrante del grupo.
Alguien debe beber su shot mientras tú lo sostienes con tus labios.
Debes dejar que la persona que consideres más dominante del grupo te ponga en la posición que ella quiera durante un minuto.
Dale un beso de 10 segundos en la boca a cada persona del sexo opuesto.
Elije a una persona para quitarse una prenda cada uno y tomarse 2 shots juntos.`
    },
    6: {
        name: "INFIERNO",
        v: `Si tuvieras que hacer una orgía aquí mismo, ¿en qué orden elegirías a los participantes y quién sería el líder?
¿Cuál es el pensamiento más perverso que has tenido sobre un familiar de la persona que tienes a tu izquierda?
¿Qué famoso quisieras ser durante un día entero y con que 3 famosos/as tuvieras una escena de relaciones sexuales?
¿Quién de este grupo crees que tiene el cuerpo más "funcional" para tus fantasías específicas?
¿Alguna vez has deseado que la pareja de tu mejor amigo/a te buscara para una noche de traición?
¿Qué es lo más "humillante" que has hecho por necesidad sexual y que te daría asco que los demás supieran?
Si pudieras grabar a dos personas de este grupo teniendo sexo, ¿a quiénes elegirías y por qué?
¿Quiénes serían los/las 10 famosos/as con las que tendrías relaciones, nómbralas de la peor a la mejor?
¿Juega casar, coger o matar con las personas que están aquí, solo puedes elegir 2 muertes?
¿Cuál es la parte de tu cuerpo que consideras tu "zona prohibida" y quién de aquí es el único que tiene permiso de tocarla hoy?
¿Qué es lo más cerca que has estado de cometer una infidelidad con alguien que todos en este círculo conocen?
¿Cuál es el fetiche con fluidos corporales que más te genera curiosidad pero que nunca has admitido?
¿Quién de aquí crees que tiene el peor desempeño en la cama y qué le recomendarías cambiar?
¿Alguna vez has tenido relaciones con alguien de aquí en un lugar donde otras personas estaban presentes?
¿Cuál es la propuesta sexual más oscura que has recibido de un desconocido y qué tan cerca estuviste de aceptarla?
¿Alguna vez has espiado a alguien sin que lo sepa, cuenta como fue?
¿A quién de este grupo le confiarías tu "juguete" favorito para que lo usara contigo?
¿Cuál es la mayor locura que has hecho por una obsesión sexual hacia alguien que no te correspondía?
¿Has tenido un encuentro sexual donde te sentiste tan arrepentido/a que te pusiste a llorar o te bañaste inmediatamente después?
Si tuvieras que subir un video teniendo relaciones con alguien del grupo ¿Quién sería?
Nombra a la persona de la mesa con la que tendrías un hijo solo por la genética.
¿Prefieres ser reconocido por tener el mejor cuerpo sexi o por ser el mejor en la cama?
¿Describe con una palabra cada persona y el momento que pasaste con el/ella?
¿Cuál es la mínima cantidad de dinero que estarías dispuesto a pagar por una noche con la persona que tienes enfrente?
¿Qué prenda de la persona de tu derecha te genera más morbo imaginar que se la quitas con los labios?
¿Has tenido sexo en un lugar sagrado o con alguien que representaba una figura de autoridad?
¿Qué es lo que más te excita de que alguien te trate como si fueras de su propiedad?
¿Cuál es la fantasía que involucra a tres personas de este grupo que has guardado en secreto toda la noche?
¿Quién de aquí es la persona que más te ha hecho "sudar" de nervios sexuales hoy?
¿Qué es lo más vergonzoso que has dejado en una cama ajena?
¿Cuál es el tamaño o la forma perfecta para ti que tenga la otra persona con la que estarias?
¿Cuál es la práctica sexual que consideras más "asquerosa"?
Si tuvieras que calificar el tamaño o la forma de las partes íntimas de tus ex, ¿quién ganaría el primer lugar y quién el último?
¿Has sentido ganas de interrumpir un momento íntimo de otra persona solo para mirar?
¿Cuál es el fetiche con ropa (uniformes, látex, lencería específica) que te vuelve loco/a?
¿Si pudieras ser el juguete sexual de alguien de aquí por una hora, de quién serías?
¿Alguna vez has tenido un pensamiento sexual con un miembro de tu familia y cómo lo manejaste?
¿Has sentido atracción por la voz de alguien aquí mientras te susurraba algo?
¿A cuántas personas haz hecho que terminen con sus fluidos?
¿Quién de aquí crees que tiene la vida sexual más aburrida y a quién elegirías para que le "enseñe" un par de trucos?
¿Cuál es el secreto sexual de tu familia que descubriste por error?
¿Quién de aquí crees que sería capaz de tener una relación poliamorosa contigo?
¿En qué serie o película animada te hubiese gustado estar para tener relaciones?
¿Cuál es la mayor cantidad de alcohol que has necesitado para atreverte a hacer algo muy picante?
¿Alguna vez has sentido atracción por alguien que es tu "enemigo"?
¿Prefieres una persona muy obesa o demasiada delgada?
¿Qué es lo que más te gusta de sentir el dolor mezclado con el placer?
¿Quién de este grupo tiene la boca más tentadora para que te bese por todo el cuerpo?
¿Cuál es la mayor cantidad de tiempo que has pasado teniendo sexo sin detenerte?
Confiesa cuál es el deseo que te da más miedo que se haga realidad esta noche.`, r: `Elige a dos personas para que te den un beso de 3 durante 30 segundos.
Quítate toda la ropa de la cintura para arriba y deja que alguien te dé un masaje.
Debes dejar que alguien del grupo te vende los ojos y use su lengua para recorrer todo tu rostro y labios.
Recuéstate y deja que la persona que más te atrae se siente sobre tu pecho y te dé un beso apasionado de un minuto.
Quítate una prenda de ropa interior y déjala en el centro de la mesa hasta que el juego termine.
Deja que alguien use un hielo para recorrer tu zona íntima por dentro de la ropa interior hasta que se derrita.
Llama a alguien que te guste y declara tu amor hacia el/ella (altavoz activado).
Deja que alguien te desabroche el pantalón y use su lengua para lamer la línea de tu ropa interior.
Deja que la persona de tu derecha elija una zona de tu cuerpo para darte un lengüetazo largo y lento
Dale un beso apasionado con lengua a la persona que consideras que este más “aburrido”.
Debes beber un shot servido directamente de la entrepierna de la persona que más te atraiga.
Deja que la persona de tu izquierda te muerda el glúteo desnudo (o en ropa interior) lo más fuerte que pueda aguantar.
Llama a un amigo/a para decirte que lo/la amas y que tienes muchas ganas de tener algo con esa persona.
Envíale una foto tuya con ropa interior o picante a la persona de tu chat que elijan los demás.
Tomate una foto atrevida con el celular de la 2 persona hacia tu derecha.
Muerde el labio de la persona de tu derecha y mantén la mordida mientras ambos se miran por 20 segundos.
Toma un shot y pásalo a la boca de la persona de enfrente y ella debe pasarlo a la siguiente.
Mándale una foto tuya atrevida a tu ex y no le digas nada más.
Quítate la ropa interior por debajo de tu ropa actual y entrégasela a la persona que más te guste.
Deja que alguien te explore con los dedos por dentro de tu camisa/blusa durante un minuto completo.
Quédate a solas con la 3 persona hacia tu derecha en un cuarto y uno de los dos debe salir lleno de besos con labial en la mayoría del rostro.
Elige a una persona para que entre a la zona intima que desees durante 1 minuto.
Deja que alguien te vende los ojos y te toque con tres partes de su cuerpo; adivina cuáles fueron.
Intercambia tu camiseta con la de la persona que tengas enfrente ahora mismo.
Quítate una prenda y deja que la persona de tu elección te pase sus labios por la zona donde estaba esa prenda.
Debes succionar el cuello de la persona que tienes a la izquierda hasta dejar un moretón visible.
Haz ruidos de orgasmo tan fuertes que los vecinos puedan escucharte, durante 30 segundos.
Siéntate en el regazo de la persona que más tímida este y dale un beso en el cuello que dure 15 segundos.
Abraza a alguien piel con piel (sin camisa) durante dos rondas completas.
Deja que el grupo te ponga en una posición sexual sugerente con otra persona y quédense así durante 2 minutos mientras les toman fotos.
Usa tu lengua para limpiar cualquier resto de bebida que haya quedado en los labios de la anterior persona que tomo.
Elige a alguien para que te meta la mano en el pantalón/falda y te haga "sentir" algo durante 30 segundos.
Dale un beso francés a la persona que elegiste como "la más perversa".
Deja que alguien te dé un masaje en los muslos internos, llegando lo más cerca posible de la zona íntima.
Pasa tu lengua por el pezón de la persona de tu derecha (sobre la ropa o directo si ambos aceptan).
Todas las personas del grupo le tendrán que dar un beso a la persona de la derecha.
Tomate una foto dándole un beso la persona que desees y sube un estado con mensaje “Te amo”.
Debes realizar un baile sensual alrededor de la persona más seria, quitándole una prenda con los dientes.
Dale un beso a alguien en el lugar más atrevido que te atrevas, sin pedir permiso.
Deja que alguien te eche alcohol en el pecho y lo limpie usando solo sus labios y lengua.
Susurra una instrucción sexual al oído de alguien que deba cumplir en la próxima ronda.
Deja que alguien use su boca para recorrer tu abdomen y que se detenga dónde empieza tu vello púbico.
Llena tu boca de hielo y alcohol y dale un beso a la persona que más te ha hecho sufrir.
Los demás elegirán el reto más sucio que se les ocurra.
Quédate totalmente desnudo/a frente al grupo durante 30 segundos (o toma 5 shots).
Deja que alguien use un objeto vibratorio o sus dedos para masajearte el cuello intensamente.
Lame la entrepierna (por fuera de la ropa) de cada persona de tu sexo opuesto de la habitación.
Deja que la persona que elijas use su boca para "saborear" cualquier parte de tu cuerpo durante 1 minuto.
Elige 5 personas diferentes para que te den un shot.
Elige a una persona de la mesa e irse a un lugar privado por 5 minutos. Lo que pase ahí, se queda ahí.`
    }
};

// Procesar el texto para convertirlo en listas reales
const DATABASE = {};
for (let level in TEXT_DATA) {
    DATABASE[level] = {
        verdades: TEXT_DATA[level].v.trim().split('\n').map(line => line.trim()).filter(line => line !== ""),
        retos: TEXT_DATA[level].r.trim().split('\n').map(line => line.trim()).filter(line => line !== "")
    };
}

// Niveles con colores sólidos
const LVLS = [
    { 
        n: 1, 
        name: "INOFENSIVO", 
        color: "#3498db",
        bgColor: "linear-gradient(135deg, #3498db, #2980b9)"
    },
    { 
        n: 2, 
        name: "MODERADO", 
        color: "#9b59b6",
        bgColor: "linear-gradient(135deg, #9b59b6, #8e44ad)"
    },
    { 
        n: 3, 
        name: "CONFIDENCIAL", 
        color: "#e74c3c",
        bgColor: "linear-gradient(135deg, #e74c3c, #c0392b)"
    },
    { 
        n: 4, 
        name: "ALTO RIESGO", 
        color: "#e67e22",
        bgColor: "linear-gradient(135deg, #e67e22, #d35400)"
    },
    { 
        n: 5, 
        name: "PELIGRO", 
        color: "#c0392b",
        bgColor: "linear-gradient(135deg, #c0392b, #a93226)"
    },
    { 
        n: 6, 
        name: "INFIERNO", 
        color: "#2c3e50",
        bgColor: "linear-gradient(135deg, #2c3e50, #1a252f)"
    }
];