'use strict';

const LUPI_LANG = (function () {

  const SUPPORTED = ['en', 'pt', 'es', 'fr', 'de', 'it', 'el', 'ru'];
  const DEFAULT   = 'en';

  const COUNTRY_LANG = {
    PT:'pt', BR:'pt', AO:'pt', MZ:'pt', CV:'pt', GW:'pt', ST:'pt',
    ES:'es', MX:'es', AR:'es', CO:'es', CL:'es', PE:'es', VE:'es',
    EC:'es', GT:'es', CU:'es', BO:'es', DO:'es', HN:'es', PY:'es',
    SV:'es', NI:'es', CR:'es', PA:'es', UY:'es', GQ:'es',
    FR:'fr', BE:'fr', CH:'fr', MC:'fr', LU:'fr', SN:'fr', CI:'fr',
    CM:'fr', ML:'fr', BF:'fr', GN:'fr', TG:'fr', BJ:'fr', NE:'fr',
    DE:'de', AT:'de', LI:'de',
    IT:'it', SM:'it', VA:'it',
    GR:'el', CY:'el',
    RU:'ru', BY:'ru', KZ:'ru',
  };

  const TRANSLATIONS = {

    /* ── ENGLISH ──────────────────────────────────────────── */
    en: {
      nav: {
        home:'Home', about:'About', collection:'Collection',
        contact:'Contact', newReleases:'New Releases',
        cart:'Cart', account:'Account', login:'Login'
      },
      hero: {
        explore:'Explore Collection', exploreCollection:'Explore the Collection',
        story:'Discover Our Story',
        title1:'The Art of', title2:'Invisible Elegance',
        description:'Rare ingredients. Timeless compositions.<br>Fragrances crafted for those who understand<br>that true luxury is felt before it is seen.',
        scrollHint:'Scroll to explore'
      },
      about: {
        label:'Our Story',
        title:'Where Scent<br><em>Becomes Identity</em>',
        quote:'"Perfume is the art that makes memory speak."',
        text1:'Born from a passion for olfactory excellence, <strong>LUPI</strong> was founded as a tribute to the ancient craft of perfumery — elevated by modern vision and an unwavering commitment to quality.',
        text2:'Each fragrance in our collection begins with a journey: sourcing the rarest ingredients from the gardens of Grasse, the spice routes of the East, and the ancient forests of the North. Every note is chosen with intention. Every accord composed with precision.',
        text3:'We believe a fragrance is not merely worn — it is inhabited. It tells the story of who you are before you speak a word.',
        pillar1:'Rare Ingredients', pillar2:'Master Perfumers', pillar3:'Timeless Craft'
      },
      products: {
        filterAll:'All', filterWomen:'Women', filterMen:'Men',
        filterUnisex:'Unisex', filterLimited:'Limited Edition',
        viewDetails:'View Details', addToCart:'Add to Cart', addedToCart:'added to cart',
        sectionLabel:'The Collection',
        sectionTitle:'Curated <em>Fragrances</em>',
        sectionSubtitle:'Each scent is a chapter. Find yours.',
        topNotes:'Top Notes', heartNotes:'Heart Notes', baseNotes:'Base Notes'
      },
      newsletter: {
        label:'Stay Close',
        title:'The Art of<br><em>Anticipation</em>',
        text:'Be the first to discover new collections, exclusive launches, and the stories behind each fragrance. Join our circle of discerning connoisseurs.',
        emailPlaceholder:'Your email address',
        subscribe:'Subscribe',
        note:'We respect your privacy. Unsubscribe at any time.',
        success:'✦ &nbsp;Welcome to the world of LUPI. We\'ll be in touch.'
      },
      contact: {
        label:'Get in Touch', heading:'Questions &amp; Inquiries',
        namePlaceholder:'Your name', emailPlaceholder:'Your email',
        messagePlaceholder:'Your message', send:'Send Message'
      },
      cart: {
        title:'Your Cart', empty:'Your cart is empty.',
        emptyHint:'Explore our collection and discover your signature scent.',
        subtotal:'Subtotal', total:'Total', checkout:'Proceed to Checkout',
        continueShopping:'Continue Shopping', remove:'Remove', qty:'Qty'
      },
      auth: {
        login:'Login', register:'Register', account:'Account',
        email:'Email address', password:'Password',
        confirmPassword:'Confirm password', fullName:'Full name',
        loginBtn:'Sign In', registerBtn:'Create Account', logout:'Log Out',
        noAccount:"Don't have an account?", hasAccount:'Already have an account?',
        registerLink:'Register', loginLink:'Sign in',
        welcome:'Welcome back', orderHistory:'Order History',
        noOrders:'No orders yet. Your order history will appear here.',
        logoutSuccess:'You have been logged out.',
        loginError:'Invalid email or password.',
        registerError:'An account with this email already exists.',
        passwordMismatch:'Passwords do not match.',
        passwordShort:'Password must be at least 6 characters.'
      },
      checkout: {
        title:'Checkout', orderSummary:'Order Summary',
        customerInfo:'Customer Information',
        fullName:'Full Name', email:'Email Address',
        phone:'Phone Number', address:'Street Address',
        city:'City', postalCode:'Postal Code', country:'Country',
        notes:'Notes / Special Instructions',
        notesPlaceholder:'Any special requests or delivery notes…',
        payment:'Payment', paymentNote:'Your payment is processed securely.',
        cardNumber:'Card Number', expiryDate:'Expiry Date', cvv:'CVV',
        placeOrder:'Place Order', processing:'Processing…',
        subtotal:'Subtotal', shipping:'Shipping',
        shippingNote:'Calculated at delivery', total:'Total',
        guestCheckout:'Checking out as guest.',
        loginPrompt:'Have an account?',
        loginLink:'Sign in for faster checkout', backToCart:'← Back'
      },
      confirmation: {
        title:'Order Confirmed',
        subtitle:'Thank you for your order. A confirmation will be sent to your email.',
        orderNumber:'Order Reference', returnHome:'Return Home'
      },
      newReleases: {
        pageTitle:'New Releases — LUPI', label:'Recently Launched',
        title:'New', titleItalic:'Arrivals',
        subtitle:'The newest expressions from the house of LUPI.',
        newRelease:'New Release', addToCart:'Add to Cart',
        viewDetails:'View Details', noProducts:'New releases coming soon.'
      },
      categories: {
        perfumes:'Perfumes', handSoap:'Hand Soap',
        roomSprays:'Room Sprays', candles:'Candles'
      },
      footer: {
        navigate:'Navigate', collection:'Collection', legal:'Legal',
        crafted:'Crafted with intention.',
        tagline:'Crafted for those who inhabit their fragrance.',
        privacy:'Privacy Policy', terms:'Terms of Service',
        shipping:'Shipping Policy', returns:'Returns',
        women:'Women', men:'Men', unisex:'Unisex', limited:'Limited Edition'
      }
    },

    /* ── PORTUGUESE ───────────────────────────────────────── */
    pt: {
      nav: {
        home:'Início', about:'Sobre', collection:'Coleção',
        contact:'Contacto', newReleases:'Novidades',
        cart:'Carrinho', account:'Conta', login:'Entrar'
      },
      hero: {
        explore:'Explorar Coleção', exploreCollection:'Explorar a Coleção',
        story:'Descobrir a Nossa História',
        title1:'A Arte da', title2:'Elegância Invisível',
        description:'Ingredientes raros. Composições atemporais.<br>Fragrâncias criadas para quem entende<br>que o verdadeiro luxo se sente antes de se ver.',
        scrollHint:'Deslize para explorar'
      },
      about: {
        label:'A Nossa História',
        title:'Onde o Aroma<br><em>Se Torna Identidade</em>',
        quote:'"O perfume é a arte que faz a memória falar."',
        text1:'Nascida de uma paixão pela excelência olfativa, a <strong>LUPI</strong> foi fundada como homenagem à arte ancestral da perfumaria — elevada por uma visão moderna e um compromisso inabalável com a qualidade.',
        text2:'Cada fragrância da nossa coleção começa com uma viagem: à procura dos ingredientes mais raros dos jardins de Grasse, das rotas das especiarias do Oriente e das florestas ancestrais do Norte. Cada nota é escolhida com intenção. Cada acorde composto com precisão.',
        text3:'Acreditamos que uma fragrância não é apenas usada — é habitada. Ela conta a história de quem você é antes de dizer uma palavra.',
        pillar1:'Ingredientes Raros', pillar2:'Mestres Perfumistas', pillar3:'Arte Atemporal'
      },
      products: {
        filterAll:'Todos', filterWomen:'Mulher', filterMen:'Homem',
        filterUnisex:'Unissexo', filterLimited:'Edição Limitada',
        viewDetails:'Ver Detalhes', addToCart:'Adicionar ao Carrinho', addedToCart:'adicionado ao carrinho',
        sectionLabel:'A Coleção',
        sectionTitle:'Fragrâncias <em>Selecionadas</em>',
        sectionSubtitle:'Cada aroma é um capítulo. Encontre o seu.',
        topNotes:'Notas de Topo', heartNotes:'Notas de Coração', baseNotes:'Notas de Base'
      },
      newsletter: {
        label:'Fique Próximo',
        title:'A Arte da<br><em>Antecipação</em>',
        text:'Seja o primeiro a descobrir novas coleções, lançamentos exclusivos e as histórias por detrás de cada fragrância. Junte-se ao nosso círculo de conhecedores.',
        emailPlaceholder:'O seu endereço de email',
        subscribe:'Subscrever',
        note:'Respeitamos a sua privacidade. Cancele a qualquer momento.',
        success:'✦ &nbsp;Bem-vindo ao mundo da LUPI. Entraremos em contacto.'
      },
      contact: {
        label:'Entre em Contacto', heading:'Questões e Informações',
        namePlaceholder:'O seu nome', emailPlaceholder:'O seu email',
        messagePlaceholder:'A sua mensagem', send:'Enviar Mensagem'
      },
      cart: {
        title:'O Seu Carrinho', empty:'O seu carrinho está vazio.',
        emptyHint:'Explore a nossa coleção e descubra a sua fragrância.',
        subtotal:'Subtotal', total:'Total', checkout:'Finalizar Compra',
        continueShopping:'Continuar a Comprar', remove:'Remover', qty:'Qtd'
      },
      auth: {
        login:'Entrar', register:'Registar', account:'Conta',
        email:'Endereço de email', password:'Palavra-passe',
        confirmPassword:'Confirmar palavra-passe', fullName:'Nome completo',
        loginBtn:'Iniciar Sessão', registerBtn:'Criar Conta', logout:'Terminar Sessão',
        noAccount:'Não tem conta?', hasAccount:'Já tem conta?',
        registerLink:'Registar', loginLink:'Iniciar sessão',
        welcome:'Bem-vindo de volta', orderHistory:'Histórico de Encomendas',
        noOrders:'Sem encomendas. O seu histórico aparecerá aqui.',
        logoutSuccess:'A sua sessão foi terminada.',
        loginError:'Email ou palavra-passe inválidos.',
        registerError:'Já existe uma conta com este email.',
        passwordMismatch:'As palavras-passe não coincidem.',
        passwordShort:'A palavra-passe deve ter pelo menos 6 caracteres.'
      },
      checkout: {
        title:'Finalizar Compra', orderSummary:'Resumo da Encomenda',
        customerInfo:'Informação do Cliente',
        fullName:'Nome Completo', email:'Endereço de Email',
        phone:'Número de Telefone', address:'Morada',
        city:'Cidade', postalCode:'Código Postal', country:'País',
        notes:'Notas / Instruções Especiais',
        notesPlaceholder:'Pedidos especiais ou notas de entrega…',
        payment:'Pagamento', paymentNote:'O seu pagamento é processado de forma segura.',
        cardNumber:'Número do Cartão', expiryDate:'Data de Validade', cvv:'CVV',
        placeOrder:'Fazer Encomenda', processing:'A processar…',
        subtotal:'Subtotal', shipping:'Envio',
        shippingNote:'Calculado na entrega', total:'Total',
        guestCheckout:'A encomendar como convidado.',
        loginPrompt:'Tem conta?',
        loginLink:'Inicie sessão para uma compra mais rápida', backToCart:'← Voltar'
      },
      confirmation: {
        title:'Encomenda Confirmada',
        subtitle:'Obrigado pela sua encomenda. Uma confirmação será enviada para o seu email.',
        orderNumber:'Referência da Encomenda', returnHome:'Voltar ao Início'
      },
      newReleases: {
        pageTitle:'Novidades — LUPI', label:'Recentemente Lançados',
        title:'Novas', titleItalic:'Chegadas',
        subtitle:'As mais recentes expressões da casa LUPI.',
        newRelease:'Novo Lançamento', addToCart:'Adicionar ao Carrinho',
        viewDetails:'Ver Detalhes', noProducts:'Novidades em breve.'
      },
      categories: {
        perfumes:'Perfumes', handSoap:'Sabonetes',
        roomSprays:'Aromatizadores', candles:'Velas'
      },
      footer: {
        navigate:'Navegar', collection:'Coleção', legal:'Legal',
        crafted:'Feito com intenção.',
        tagline:'Criado para quem habita a sua fragrância.',
        privacy:'Política de Privacidade', terms:'Termos de Serviço',
        shipping:'Política de Envio', returns:'Devoluções',
        women:'Mulher', men:'Homem', unisex:'Unissexo', limited:'Edição Limitada'
      }
    },

    /* ── SPANISH ──────────────────────────────────────────── */
    es: {
      nav: {
        home:'Inicio', about:'Sobre', collection:'Colección',
        contact:'Contacto', newReleases:'Novedades',
        cart:'Carrito', account:'Cuenta', login:'Entrar'
      },
      hero: {
        explore:'Explorar Colección', exploreCollection:'Explorar la Colección',
        story:'Descubrir Nuestra Historia',
        title1:'El Arte de la', title2:'Elegancia Invisible',
        description:'Ingredientes raros. Composiciones atemporales.<br>Fragancias creadas para quienes entienden<br>que el verdadero lujo se siente antes de verse.',
        scrollHint:'Desliza para explorar'
      },
      about: {
        label:'Nuestra Historia',
        title:'Donde el Aroma<br><em>Se Convierte en Identidad</em>',
        quote:'"El perfume es el arte que hace hablar a la memoria."',
        text1:'Nacida de una pasión por la excelencia olfativa, <strong>LUPI</strong> fue fundada como un tributo al arte ancestral de la perfumería — elevado por una visión moderna y un compromiso inquebrantable con la calidad.',
        text2:'Cada fragancia de nuestra colección comienza con un viaje: en busca de los ingredientes más raros de los jardines de Grasse, las rutas de las especias de Oriente y los bosques ancestrales del Norte. Cada nota se elige con intención.',
        text3:'Creemos que una fragancia no solo se lleva — se habita. Cuenta la historia de quién eres antes de que pronuncies una palabra.',
        pillar1:'Ingredientes Raros', pillar2:'Maestros Perfumistas', pillar3:'Arte Atemporal'
      },
      products: {
        filterAll:'Todos', filterWomen:'Mujer', filterMen:'Hombre',
        filterUnisex:'Unisex', filterLimited:'Edición Limitada',
        viewDetails:'Ver Detalles', addToCart:'Añadir al Carrito', addedToCart:'añadido al carrito',
        sectionLabel:'La Colección',
        sectionTitle:'Fragancias <em>Seleccionadas</em>',
        sectionSubtitle:'Cada aroma es un capítulo. Encuentra el tuyo.',
        topNotes:'Notas de Salida', heartNotes:'Notas de Corazón', baseNotes:'Notas de Fondo'
      },
      newsletter: {
        label:'Mantente Cerca',
        title:'El Arte de la<br><em>Anticipación</em>',
        text:'Sé el primero en descubrir nuevas colecciones, lanzamientos exclusivos y las historias detrás de cada fragancia. Únete a nuestro círculo de conocedores.',
        emailPlaceholder:'Tu correo electrónico',
        subscribe:'Suscribirse',
        note:'Respetamos tu privacidad. Cancela en cualquier momento.',
        success:'✦ &nbsp;Bienvenido al mundo de LUPI. Estaremos en contacto.'
      },
      contact: {
        label:'Contáctanos', heading:'Preguntas e Información',
        namePlaceholder:'Tu nombre', emailPlaceholder:'Tu correo',
        messagePlaceholder:'Tu mensaje', send:'Enviar Mensaje'
      },
      cart: {
        title:'Tu Carrito', empty:'Tu carrito está vacío.',
        emptyHint:'Explora nuestra colección y descubre tu fragancia.',
        subtotal:'Subtotal', total:'Total', checkout:'Proceder al Pago',
        continueShopping:'Seguir Comprando', remove:'Eliminar', qty:'Cant'
      },
      auth: {
        login:'Entrar', register:'Registrarse', account:'Cuenta',
        email:'Correo electrónico', password:'Contraseña',
        confirmPassword:'Confirmar contraseña', fullName:'Nombre completo',
        loginBtn:'Iniciar Sesión', registerBtn:'Crear Cuenta', logout:'Cerrar Sesión',
        noAccount:'¿No tienes cuenta?', hasAccount:'¿Ya tienes cuenta?',
        registerLink:'Regístrate', loginLink:'Inicia sesión',
        welcome:'Bienvenido de nuevo', orderHistory:'Historial de Pedidos',
        noOrders:'Sin pedidos. Tu historial aparecerá aquí.',
        logoutSuccess:'Has cerrado sesión.',
        loginError:'Email o contraseña incorrectos.',
        registerError:'Ya existe una cuenta con este email.',
        passwordMismatch:'Las contraseñas no coinciden.',
        passwordShort:'La contraseña debe tener al menos 6 caracteres.'
      },
      checkout: {
        title:'Finalizar Compra', orderSummary:'Resumen del Pedido',
        customerInfo:'Información del Cliente',
        fullName:'Nombre Completo', email:'Correo Electrónico',
        phone:'Número de Teléfono', address:'Dirección',
        city:'Ciudad', postalCode:'Código Postal', country:'País',
        notes:'Notas / Instrucciones Especiales',
        notesPlaceholder:'Solicitudes especiales o notas de entrega…',
        payment:'Pago', paymentNote:'Tu pago se procesa de forma segura.',
        cardNumber:'Número de Tarjeta', expiryDate:'Fecha de Caducidad', cvv:'CVV',
        placeOrder:'Realizar Pedido', processing:'Procesando…',
        subtotal:'Subtotal', shipping:'Envío',
        shippingNote:'Calculado en entrega', total:'Total',
        guestCheckout:'Comprando como invitado.',
        loginPrompt:'¿Tienes cuenta?',
        loginLink:'Inicia sesión para una compra más rápida', backToCart:'← Volver'
      },
      confirmation: {
        title:'Pedido Confirmado',
        subtitle:'Gracias por tu pedido. Se enviará una confirmación a tu email.',
        orderNumber:'Referencia del Pedido', returnHome:'Volver al Inicio'
      },
      newReleases: {
        pageTitle:'Novedades — LUPI', label:'Lanzamientos Recientes',
        title:'Nuevas', titleItalic:'Llegadas',
        subtitle:'Las últimas expresiones de la casa LUPI.',
        newRelease:'Nuevo Lanzamiento', addToCart:'Añadir al Carrito',
        viewDetails:'Ver Detalles', noProducts:'Novedades próximamente.'
      },
      categories: {
        perfumes:'Perfumes', handSoap:'Jabones de Manos',
        roomSprays:'Ambientadores', candles:'Velas'
      },
      footer: {
        navigate:'Navegar', collection:'Colección', legal:'Legal',
        crafted:'Hecho con intención.',
        tagline:'Creado para quienes habitan su fragancia.',
        privacy:'Política de Privacidad', terms:'Términos de Servicio',
        shipping:'Política de Envío', returns:'Devoluciones',
        women:'Mujer', men:'Hombre', unisex:'Unisex', limited:'Edición Limitada'
      }
    },

    /* ── FRENCH ───────────────────────────────────────────── */
    fr: {
      nav: {
        home:'Accueil', about:'À propos', collection:'Collection',
        contact:'Contact', newReleases:'Nouveautés',
        cart:'Panier', account:'Compte', login:'Connexion'
      },
      hero: {
        explore:'Explorer la Collection', exploreCollection:'Explorer la Collection',
        story:'Découvrir Notre Histoire',
        title1:"L'Art de", title2:"l'Élégance Invisible",
        description:'Ingrédients rares. Compositions intemporelles.<br>Des fragrances créées pour ceux qui comprennent<br>que le vrai luxe se ressent avant de se voir.',
        scrollHint:'Faites défiler pour explorer'
      },
      about: {
        label:'Notre Histoire',
        title:'Là où le Parfum<br><em>Devient Identité</em>',
        quote:'« Le parfum est l\'art qui fait parler la mémoire. »',
        text1:'Née d\'une passion pour l\'excellence olfactive, <strong>LUPI</strong> a été fondée comme un hommage à l\'art ancestral de la parfumerie — élevé par une vision moderne et un engagement indéfectible envers la qualité.',
        text2:'Chaque fragrance de notre collection commence par un voyage : à la recherche des ingrédients les plus rares des jardins de Grasse, des routes des épices de l\'Orient et des forêts ancestrales du Nord. Chaque note est choisie avec intention.',
        text3:'Nous croyons qu\'une fragrance ne se porte pas seulement — elle s\'habite. Elle raconte qui vous êtes avant même que vous ne parliez.',
        pillar1:'Ingrédients Rares', pillar2:'Maîtres Parfumeurs', pillar3:'Art Intemporel'
      },
      products: {
        filterAll:'Tous', filterWomen:'Femme', filterMen:'Homme',
        filterUnisex:'Mixte', filterLimited:'Édition Limitée',
        viewDetails:'Voir Détails', addToCart:'Ajouter au Panier', addedToCart:'ajouté au panier',
        sectionLabel:'La Collection',
        sectionTitle:'Fragrances <em>Sélectionnées</em>',
        sectionSubtitle:'Chaque parfum est un chapitre. Trouvez le vôtre.',
        topNotes:'Notes de Tête', heartNotes:'Notes de Cœur', baseNotes:'Notes de Fond'
      },
      newsletter: {
        label:'Restez Proches',
        title:"L'Art de<br><em>l'Anticipation</em>",
        text:'Soyez le premier à découvrir les nouvelles collections, les lancements exclusifs et les histoires derrière chaque fragrance. Rejoignez notre cercle de connaisseurs.',
        emailPlaceholder:'Votre adresse email',
        subscribe:"S'abonner",
        note:'Nous respectons votre vie privée. Désabonnez-vous à tout moment.',
        success:'✦ &nbsp;Bienvenue dans le monde de LUPI. Nous vous recontacterons.'
      },
      contact: {
        label:'Contactez-nous', heading:'Questions &amp; Renseignements',
        namePlaceholder:'Votre nom', emailPlaceholder:'Votre email',
        messagePlaceholder:'Votre message', send:'Envoyer le Message'
      },
      cart: {
        title:'Votre Panier', empty:'Votre panier est vide.',
        emptyHint:'Explorez notre collection et découvrez votre fragrance.',
        subtotal:'Sous-total', total:'Total', checkout:'Passer à la Caisse',
        continueShopping:'Continuer les Achats', remove:'Supprimer', qty:'Qté'
      },
      auth: {
        login:'Connexion', register:"S'inscrire", account:'Compte',
        email:'Adresse email', password:'Mot de passe',
        confirmPassword:'Confirmer le mot de passe', fullName:'Nom complet',
        loginBtn:'Se Connecter', registerBtn:'Créer un Compte', logout:'Se Déconnecter',
        noAccount:'Pas encore de compte ?', hasAccount:'Déjà un compte ?',
        registerLink:"S'inscrire", loginLink:'Se connecter',
        welcome:'Bon retour', orderHistory:'Historique des Commandes',
        noOrders:'Aucune commande. Votre historique apparaîtra ici.',
        logoutSuccess:'Vous avez été déconnecté.',
        loginError:'Email ou mot de passe incorrect.',
        registerError:'Un compte avec cet email existe déjà.',
        passwordMismatch:'Les mots de passe ne correspondent pas.',
        passwordShort:'Le mot de passe doit comporter au moins 6 caractères.'
      },
      checkout: {
        title:'Paiement', orderSummary:'Récapitulatif',
        customerInfo:'Informations Client',
        fullName:'Nom Complet', email:'Adresse Email',
        phone:'Numéro de Téléphone', address:'Adresse',
        city:'Ville', postalCode:'Code Postal', country:'Pays',
        notes:'Notes / Instructions Spéciales',
        notesPlaceholder:'Demandes spéciales ou notes de livraison…',
        payment:'Paiement', paymentNote:'Votre paiement est traité en toute sécurité.',
        cardNumber:'Numéro de Carte', expiryDate:"Date d'Expiration", cvv:'CVV',
        placeOrder:'Passer la Commande', processing:'Traitement…',
        subtotal:'Sous-total', shipping:'Livraison',
        shippingNote:'Calculé à la livraison', total:'Total',
        guestCheckout:"Commander en tant qu'invité.",
        loginPrompt:'Vous avez un compte ?',
        loginLink:'Connectez-vous pour un achat plus rapide', backToCart:'← Retour'
      },
      confirmation: {
        title:'Commande Confirmée',
        subtitle:'Merci pour votre commande. Une confirmation sera envoyée à votre email.',
        orderNumber:'Référence de la Commande', returnHome:"Retour à l'Accueil"
      },
      newReleases: {
        pageTitle:'Nouveautés — LUPI', label:'Récemment Lancés',
        title:'Nouvelles', titleItalic:'Créations',
        subtitle:'Les dernières expressions de la maison LUPI.',
        newRelease:'Nouveau Lancement', addToCart:'Ajouter au Panier',
        viewDetails:'Voir Détails', noProducts:'Nouveautés à venir.'
      },
      categories: {
        perfumes:'Parfums', handSoap:'Savons pour les Mains',
        roomSprays:"Parfums d'Intérieur", candles:'Bougies'
      },
      footer: {
        navigate:'Navigation', collection:'Collection', legal:'Mentions Légales',
        crafted:'Conçu avec intention.',
        tagline:'Conçu pour ceux qui habitent leur fragrance.',
        privacy:'Politique de Confidentialité', terms:"Conditions d'Utilisation",
        shipping:"Politique d'Expédition", returns:'Retours',
        women:'Femme', men:'Homme', unisex:'Mixte', limited:'Édition Limitée'
      }
    },

    /* ── GERMAN ───────────────────────────────────────────── */
    de: {
      nav: {
        home:'Startseite', about:'Über uns', collection:'Kollektion',
        contact:'Kontakt', newReleases:'Neuheiten',
        cart:'Warenkorb', account:'Konto', login:'Anmelden'
      },
      hero: {
        explore:'Kollektion Entdecken', exploreCollection:'Die Kollektion Entdecken',
        story:'Unsere Geschichte Entdecken',
        title1:'Die Kunst der', title2:'Unsichtbaren Eleganz',
        description:'Seltene Zutaten. Zeitlose Kompositionen.<br>Düfte für jene, die verstehen,<br>dass wahre Eleganz gefühlt wird, bevor sie gesehen wird.',
        scrollHint:'Scrollen zum Entdecken'
      },
      about: {
        label:'Unsere Geschichte',
        title:'Wo Duft<br><em>zur Identität wird</em>',
        quote:'„Parfüm ist die Kunst, die Erinnerungen zum Sprechen bringt."',
        text1:'Aus einer Leidenschaft für olfaktorische Exzellenz geboren, wurde <strong>LUPI</strong> als Hommage an die uralte Kunst der Parfümerie gegründet — erhoben durch moderne Vision und unerschütterliches Qualitätsbewusstsein.',
        text2:'Jede Duftkomposition unserer Kollektion beginnt mit einer Reise: auf der Suche nach den seltensten Zutaten aus den Gärten von Grasse, den Gewürzrouten des Ostens und den alten Wäldern des Nordens. Jede Note wird mit Bedacht gewählt.',
        text3:'Wir glauben, dass ein Duft nicht nur getragen wird — er wird bewohnt. Er erzählt die Geschichte von dem, was Sie sind, bevor Sie ein Wort sagen.',
        pillar1:'Seltene Zutaten', pillar2:'Meisterparfümeure', pillar3:'Zeitlose Kunst'
      },
      products: {
        filterAll:'Alle', filterWomen:'Damen', filterMen:'Herren',
        filterUnisex:'Unisex', filterLimited:'Limitierte Edition',
        viewDetails:'Details anzeigen', addToCart:'In den Warenkorb', addedToCart:'zum Warenkorb hinzugefügt',
        sectionLabel:'Die Kollektion',
        sectionTitle:'Kuratierte <em>Düfte</em>',
        sectionSubtitle:'Jeder Duft ist ein Kapitel. Finden Sie Ihren.',
        topNotes:'Kopfnoten', heartNotes:'Herznoten', baseNotes:'Basisnoten'
      },
      newsletter: {
        label:'Bleiben Sie Nah',
        title:'Die Kunst der<br><em>Vorfreude</em>',
        text:'Seien Sie der Erste, der neue Kollektionen, exklusive Einführungen und die Geschichten hinter jedem Duft entdeckt. Treten Sie unserem Kreis feiner Kenner bei.',
        emailPlaceholder:'Ihre E-Mail-Adresse',
        subscribe:'Abonnieren',
        note:'Wir respektieren Ihre Privatsphäre. Jederzeit abmeldbar.',
        success:'✦ &nbsp;Willkommen in der Welt von LUPI. Wir melden uns.'
      },
      contact: {
        label:'Kontaktieren Sie Uns', heading:'Fragen &amp; Anfragen',
        namePlaceholder:'Ihr Name', emailPlaceholder:'Ihre E-Mail',
        messagePlaceholder:'Ihre Nachricht', send:'Nachricht Senden'
      },
      cart: {
        title:'Ihr Warenkorb', empty:'Ihr Warenkorb ist leer.',
        emptyHint:'Entdecken Sie unsere Kollektion.',
        subtotal:'Zwischensumme', total:'Gesamt', checkout:'Zur Kasse',
        continueShopping:'Weiter Einkaufen', remove:'Entfernen', qty:'Menge'
      },
      auth: {
        login:'Anmelden', register:'Registrieren', account:'Konto',
        email:'E-Mail-Adresse', password:'Passwort',
        confirmPassword:'Passwort bestätigen', fullName:'Vollständiger Name',
        loginBtn:'Anmelden', registerBtn:'Konto erstellen', logout:'Abmelden',
        noAccount:'Noch kein Konto?', hasAccount:'Bereits ein Konto?',
        registerLink:'Registrieren', loginLink:'Anmelden',
        welcome:'Willkommen zurück', orderHistory:'Bestellverlauf',
        noOrders:'Keine Bestellungen. Ihr Verlauf wird hier angezeigt.',
        logoutSuccess:'Sie wurden abgemeldet.',
        loginError:'Ungültige E-Mail oder Passwort.',
        registerError:'Ein Konto mit dieser E-Mail existiert bereits.',
        passwordMismatch:'Passwörter stimmen nicht überein.',
        passwordShort:'Das Passwort muss mindestens 6 Zeichen haben.'
      },
      checkout: {
        title:'Kasse', orderSummary:'Bestellübersicht',
        customerInfo:'Kundeninformation',
        fullName:'Vollständiger Name', email:'E-Mail-Adresse',
        phone:'Telefonnummer', address:'Straßenadresse',
        city:'Stadt', postalCode:'Postleitzahl', country:'Land',
        notes:'Notizen / Sonderanweisungen',
        notesPlaceholder:'Sonderwünsche oder Liefernotizen…',
        payment:'Zahlung', paymentNote:'Ihre Zahlung wird sicher verarbeitet.',
        cardNumber:'Kartennummer', expiryDate:'Ablaufdatum', cvv:'CVV',
        placeOrder:'Bestellen', processing:'Verarbeitung…',
        subtotal:'Zwischensumme', shipping:'Versand',
        shippingNote:'Bei Lieferung berechnet', total:'Gesamt',
        guestCheckout:'Als Gast bestellen.',
        loginPrompt:'Haben Sie ein Konto?',
        loginLink:'Anmelden für schnelleren Checkout', backToCart:'← Zurück'
      },
      confirmation: {
        title:'Bestellung Bestätigt',
        subtitle:'Vielen Dank für Ihre Bestellung. Eine Bestätigung wird an Ihre E-Mail gesendet.',
        orderNumber:'Bestellreferenz', returnHome:'Zur Startseite'
      },
      newReleases: {
        pageTitle:'Neuheiten — LUPI', label:'Kürzlich Eingeführt',
        title:'Neue', titleItalic:'Kreationen',
        subtitle:'Die neuesten Ausdrücke des Hauses LUPI.',
        newRelease:'Neuheit', addToCart:'In den Warenkorb',
        viewDetails:'Details anzeigen', noProducts:'Neuheiten kommen bald.'
      },
      categories: {
        perfumes:'Parfüms', handSoap:'Handseife',
        roomSprays:'Raumsprays', candles:'Kerzen'
      },
      footer: {
        navigate:'Navigation', collection:'Kollektion', legal:'Rechtliches',
        crafted:'Mit Sorgfalt gestaltet.',
        tagline:'Geschaffen für jene, die ihren Duft bewohnen.',
        privacy:'Datenschutzrichtlinie', terms:'Nutzungsbedingungen',
        shipping:'Versandrichtlinie', returns:'Rückgaben',
        women:'Damen', men:'Herren', unisex:'Unisex', limited:'Limitierte Edition'
      }
    },

    /* ── ITALIAN ──────────────────────────────────────────── */
    it: {
      nav: {
        home:'Home', about:'Chi Siamo', collection:'Collezione',
        contact:'Contatti', newReleases:'Novità',
        cart:'Carrello', account:'Account', login:'Accedi'
      },
      hero: {
        explore:'Esplora la Collezione', exploreCollection:'Esplora la Collezione',
        story:'Scopri la Nostra Storia',
        title1:"L'Arte della", title2:'Eleganza Invisibile',
        description:'Ingredienti rari. Composizioni senza tempo.<br>Fragranze create per chi capisce<br>che il vero lusso si sente prima di vedersi.',
        scrollHint:'Scorri per esplorare'
      },
      about: {
        label:'La Nostra Storia',
        title:'Dove il Profumo<br><em>Diventa Identità</em>',
        quote:'"Il profumo è l\'arte che fa parlare la memoria."',
        text1:'Nata da una passione per l\'eccellenza olfattiva, <strong>LUPI</strong> è stata fondata come tributo all\'antica arte della profumeria — elevata da una visione moderna e un impegno incrollabile per la qualità.',
        text2:'Ogni fragranza della nostra collezione inizia con un viaggio: alla ricerca degli ingredienti più rari dai giardini di Grasse, dalle rotte delle spezie d\'Oriente e dalle foreste ancestrali del Nord. Ogni nota viene scelta con intenzione.',
        text3:'Crediamo che una fragranza non si indossi soltanto — si abiti. Racconta la storia di chi sei prima che tu possa parlare.',
        pillar1:'Ingredienti Rari', pillar2:'Maestri Profumieri', pillar3:'Arte Senza Tempo'
      },
      products: {
        filterAll:'Tutti', filterWomen:'Donna', filterMen:'Uomo',
        filterUnisex:'Unisex', filterLimited:'Edizione Limitata',
        viewDetails:'Vedi Dettagli', addToCart:'Aggiungi al Carrello', addedToCart:'aggiunto al carrello',
        sectionLabel:'La Collezione',
        sectionTitle:'Fragranze <em>Curate</em>',
        sectionSubtitle:'Ogni profumo è un capitolo. Trova il tuo.',
        topNotes:'Note di Testa', heartNotes:'Note di Cuore', baseNotes:'Note di Fondo'
      },
      newsletter: {
        label:'Resta Vicino',
        title:"L'Arte della<br><em>Anticipazione</em>",
        text:'Sii il primo a scoprire nuove collezioni, lanci esclusivi e le storie dietro ogni fragranza. Unisciti al nostro circolo di intenditori.',
        emailPlaceholder:'Il tuo indirizzo email',
        subscribe:'Iscriviti',
        note:'Rispettiamo la tua privacy. Annulla in qualsiasi momento.',
        success:'✦ &nbsp;Benvenuto nel mondo di LUPI. Ti contatteremo presto.'
      },
      contact: {
        label:'Contattaci', heading:'Domande e Informazioni',
        namePlaceholder:'Il tuo nome', emailPlaceholder:'La tua email',
        messagePlaceholder:'Il tuo messaggio', send:'Invia Messaggio'
      },
      cart: {
        title:'Il Tuo Carrello', empty:'Il tuo carrello è vuoto.',
        emptyHint:'Esplora la nostra collezione.',
        subtotal:'Subtotale', total:'Totale', checkout:'Procedi al Checkout',
        continueShopping:'Continua gli Acquisti', remove:'Rimuovi', qty:'Qtà'
      },
      auth: {
        login:'Accedi', register:'Registrati', account:'Account',
        email:'Indirizzo email', password:'Password',
        confirmPassword:'Conferma password', fullName:'Nome completo',
        loginBtn:'Accedi', registerBtn:'Crea Account', logout:'Esci',
        noAccount:'Non hai un account?', hasAccount:'Hai già un account?',
        registerLink:'Registrati', loginLink:'Accedi',
        welcome:'Bentornato', orderHistory:'Cronologia Ordini',
        noOrders:'Nessun ordine. La cronologia apparirà qui.',
        logoutSuccess:'Hai effettuato il logout.',
        loginError:'Email o password non validi.',
        registerError:'Esiste già un account con questa email.',
        passwordMismatch:'Le password non coincidono.',
        passwordShort:'La password deve avere almeno 6 caratteri.'
      },
      checkout: {
        title:'Checkout', orderSummary:'Riepilogo Ordine',
        customerInfo:'Informazioni Cliente',
        fullName:'Nome Completo', email:'Indirizzo Email',
        phone:'Numero di Telefono', address:'Indirizzo',
        city:'Città', postalCode:'Codice Postale', country:'Paese',
        notes:'Note / Istruzioni Speciali',
        notesPlaceholder:'Richieste speciali o note di consegna…',
        payment:'Pagamento', paymentNote:'Il tuo pagamento viene elaborato in modo sicuro.',
        cardNumber:'Numero di Carta', expiryDate:'Data di Scadenza', cvv:'CVV',
        placeOrder:'Effettua Ordine', processing:'Elaborazione…',
        subtotal:'Subtotale', shipping:'Spedizione',
        shippingNote:'Calcolato alla consegna', total:'Totale',
        guestCheckout:'Acquisto come ospite.',
        loginPrompt:'Hai un account?',
        loginLink:'Accedi per un checkout più veloce', backToCart:'← Indietro'
      },
      confirmation: {
        title:'Ordine Confermato',
        subtitle:'Grazie per il tuo ordine. Una conferma sarà inviata alla tua email.',
        orderNumber:'Riferimento Ordine', returnHome:'Torna alla Home'
      },
      newReleases: {
        pageTitle:'Novità — LUPI', label:'Recentemente Lanciati',
        title:'Nuove', titleItalic:'Creazioni',
        subtitle:'Le ultime espressioni della maison LUPI.',
        newRelease:'Nuova Uscita', addToCart:'Aggiungi al Carrello',
        viewDetails:'Vedi Dettagli', noProducts:'Novità in arrivo.'
      },
      categories: {
        perfumes:'Profumi', handSoap:'Sapone per le Mani',
        roomSprays:'Spray per Ambienti', candles:'Candele'
      },
      footer: {
        navigate:'Naviga', collection:'Collezione', legal:'Legale',
        crafted:'Creato con intenzione.',
        tagline:'Creato per chi abita la propria fragranza.',
        privacy:'Informativa sulla Privacy', terms:'Termini di Servizio',
        shipping:'Politica di Spedizione', returns:'Resi',
        women:'Donna', men:'Uomo', unisex:'Unisex', limited:'Edizione Limitata'
      }
    },

    /* ── GREEK ────────────────────────────────────────────── */
    el: {
      nav: {
        home:'Αρχική', about:'Σχετικά', collection:'Συλλογή',
        contact:'Επικοινωνία', newReleases:'Νέες Κυκλοφορίες',
        cart:'Καλάθι', account:'Λογαριασμός', login:'Σύνδεση'
      },
      hero: {
        explore:'Εξερευνήστε τη Συλλογή', exploreCollection:'Εξερευνήστε τη Συλλογή',
        story:'Ανακαλύψτε την Ιστορία μας',
        title1:'Η Τέχνη της', title2:'Αόρατης Κομψότητας',
        description:'Σπάνια συστατικά. Διαχρονικές συνθέσεις.<br>Αρώματα για όσους κατανοούν<br>ότι η αληθινή πολυτέλεια νιώθεται πριν φανεί.',
        scrollHint:'Κύλισε για να εξερευνήσεις'
      },
      about: {
        label:'Η Ιστορία μας',
        title:'Όπου το Άρωμα<br><em>Γίνεται Ταυτότητα</em>',
        quote:'«Το άρωμα είναι η τέχνη που κάνει τη μνήμη να μιλά.»',
        text1:'Γεννημένη από πάθος για αρωματική αριστεία, η <strong>LUPI</strong> ιδρύθηκε ως φόρος τιμής στην αρχαία τέχνη της αρωματοποιίας — ανυψωμένη από σύγχρονο όραμα και αδιαπραγμάτευτη ποιότητα.',
        text2:'Κάθε άρωμα της συλλογής μας ξεκινά με ένα ταξίδι: αναζητώντας τα σπανιότερα συστατικά από τους κήπους της Γκρας, τους δρόμους των μπαχαρικών της Ανατολής και τα αρχαία δάση του Βορρά. Κάθε νότα επιλέγεται με πρόθεση.',
        text3:'Πιστεύουμε ότι ένα άρωμα δεν φοριέται μόνο — κατοικείται. Αφηγείται την ιστορία του ποιος είσαι πριν πεις μια λέξη.',
        pillar1:'Σπάνια Συστατικά', pillar2:'Μάστορες Αρωματοποιοί', pillar3:'Διαχρονική Τέχνη'
      },
      products: {
        filterAll:'Όλα', filterWomen:'Γυναικεία', filterMen:'Ανδρικά',
        filterUnisex:'Unisex', filterLimited:'Περιορισμένη Έκδοση',
        viewDetails:'Λεπτομέρειες', addToCart:'Προσθήκη στο Καλάθι', addedToCart:'προστέθηκε στο καλάθι',
        sectionLabel:'Η Συλλογή',
        sectionTitle:'Επιλεγμένα <em>Αρώματα</em>',
        sectionSubtitle:'Κάθε άρωμα είναι ένα κεφάλαιο. Βρείτε το δικό σας.',
        topNotes:'Κορυφαίες Νότες', heartNotes:'Νότες Καρδιάς', baseNotes:'Βασικές Νότες'
      },
      newsletter: {
        label:'Μείνετε Κοντά',
        title:'Η Τέχνη της<br><em>Προσμονής</em>',
        text:'Γίνετε οι πρώτοι που ανακαλύπτουν νέες συλλογές, αποκλειστικές κυκλοφορίες και τις ιστορίες πίσω από κάθε άρωμα. Ενταχθείτε στον κύκλο μας.',
        emailPlaceholder:'Η διεύθυνση email σας',
        subscribe:'Εγγραφή',
        note:'Σεβόμαστε την ιδιωτικότητά σας. Ακύρωση ανά πάσα στιγμή.',
        success:'✦ &nbsp;Καλωσήρθατε στον κόσμο της LUPI. Θα επικοινωνήσουμε.'
      },
      contact: {
        label:'Επικοινωνήστε μαζί μας', heading:'Ερωτήσεις &amp; Πληροφορίες',
        namePlaceholder:'Το όνομά σας', emailPlaceholder:'Το email σας',
        messagePlaceholder:'Το μήνυμά σας', send:'Αποστολή Μηνύματος'
      },
      cart: {
        title:'Το Καλάθι σας', empty:'Το καλάθι σας είναι άδειο.',
        emptyHint:'Εξερευνήστε τη συλλογή μας.',
        subtotal:'Υποσύνολο', total:'Σύνολο', checkout:'Ολοκλήρωση Αγοράς',
        continueShopping:'Συνέχεια Αγορών', remove:'Αφαίρεση', qty:'Ποσ'
      },
      auth: {
        login:'Σύνδεση', register:'Εγγραφή', account:'Λογαριασμός',
        email:'Διεύθυνση email', password:'Κωδικός',
        confirmPassword:'Επιβεβαίωση κωδικού', fullName:'Πλήρες όνομα',
        loginBtn:'Σύνδεση', registerBtn:'Δημιουργία Λογαριασμού', logout:'Αποσύνδεση',
        noAccount:'Δεν έχετε λογαριασμό;', hasAccount:'Έχετε ήδη λογαριασμό;',
        registerLink:'Εγγραφή', loginLink:'Σύνδεση',
        welcome:'Καλώς ήρθατε ξανά', orderHistory:'Ιστορικό Παραγγελιών',
        noOrders:'Δεν υπάρχουν παραγγελίες. Το ιστορικό σας θα εμφανιστεί εδώ.',
        logoutSuccess:'Αποσυνδεθήκατε.',
        loginError:'Λάθος email ή κωδικός.',
        registerError:'Υπάρχει ήδη λογαριασμός με αυτό το email.',
        passwordMismatch:'Οι κωδικοί δεν ταιριάζουν.',
        passwordShort:'Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες.'
      },
      checkout: {
        title:'Ολοκλήρωση Αγοράς', orderSummary:'Σύνοψη Παραγγελίας',
        customerInfo:'Στοιχεία Πελάτη',
        fullName:'Πλήρες Όνομα', email:'Διεύθυνση Email',
        phone:'Αριθμός Τηλεφώνου', address:'Διεύθυνση',
        city:'Πόλη', postalCode:'Ταχυδρομικός Κωδικός', country:'Χώρα',
        notes:'Σημειώσεις / Ειδικές Οδηγίες',
        notesPlaceholder:'Ειδικά αιτήματα ή σημειώσεις παράδοσης…',
        payment:'Πληρωμή', paymentNote:'Η πληρωμή σας επεξεργάζεται με ασφάλεια.',
        cardNumber:'Αριθμός Κάρτας', expiryDate:'Ημερομηνία Λήξης', cvv:'CVV',
        placeOrder:'Υποβολή Παραγγελίας', processing:'Επεξεργασία…',
        subtotal:'Υποσύνολο', shipping:'Αποστολή',
        shippingNote:'Υπολογίζεται κατά την παράδοση', total:'Σύνολο',
        guestCheckout:'Αγορά ως επισκέπτης.',
        loginPrompt:'Έχετε λογαριασμό;',
        loginLink:'Συνδεθείτε για ταχύτερη αγορά', backToCart:'← Πίσω'
      },
      confirmation: {
        title:'Παραγγελία Επιβεβαιώθηκε',
        subtitle:'Ευχαριστούμε για την παραγγελία σας. Επιβεβαίωση θα σταλεί στο email σας.',
        orderNumber:'Αριθμός Παραγγελίας', returnHome:'Επιστροφή στην Αρχική'
      },
      newReleases: {
        pageTitle:'Νέες Κυκλοφορίες — LUPI', label:'Πρόσφατα Κυκλοφόρησαν',
        title:'Νέες', titleItalic:'Δημιουργίες',
        subtitle:'Οι νέες εκφράσεις του οίκου LUPI.',
        newRelease:'Νέα Κυκλοφορία', addToCart:'Προσθήκη στο Καλάθι',
        viewDetails:'Λεπτομέρειες', noProducts:'Νέες κυκλοφορίες σύντομα.'
      },
      categories: {
        perfumes:'Αρώματα', handSoap:'Κρεμοσάπουνο',
        roomSprays:'Αρωματιστές', candles:'Κεριά'
      },
      footer: {
        navigate:'Πλοήγηση', collection:'Συλλογή', legal:'Νομικά',
        crafted:'Δημιουργημένο με πρόθεση.',
        tagline:'Δημιουργημένο για όσους κατοικούν στο άρωμά τους.',
        privacy:'Πολιτική Απορρήτου', terms:'Όροι Χρήσης',
        shipping:'Πολιτική Αποστολής', returns:'Επιστροφές',
        women:'Γυναικεία', men:'Ανδρικά', unisex:'Unisex', limited:'Περιορισμένη Έκδοση'
      }
    },

    /* ── RUSSIAN ──────────────────────────────────────────── */
    ru: {
      nav: {
        home:'Главная', about:'О нас', collection:'Коллекция',
        contact:'Контакты', newReleases:'Новинки',
        cart:'Корзина', account:'Аккаунт', login:'Войти'
      },
      hero: {
        explore:'Изучить Коллекцию', exploreCollection:'Изучить Коллекцию',
        story:'Узнать Нашу Историю',
        title1:'Искусство', title2:'Невидимой Элегантности',
        description:'Редкие ингредиенты. Вечные композиции.<br>Ароматы для тех, кто понимает,<br>что истинная роскошь ощущается раньше, чем видится.',
        scrollHint:'Прокрутите для изучения'
      },
      about: {
        label:'Наша История',
        title:'Где Аромат<br><em>Становится Личностью</em>',
        quote:'«Парфюм — это искусство, заставляющее память говорить.»',
        text1:'Рождённая из страсти к обонятельному совершенству, <strong>LUPI</strong> была основана как дань уважения древнему искусству парфюмерии — возвышенному современным видением и непоколебимой приверженностью качеству.',
        text2:'Каждый аромат нашей коллекции начинается с путешествия: в поисках редчайших ингредиентов из садов Грасса, пряных путей Востока и древних лесов Севера. Каждая нота выбирается с умыслом. Каждый аккорд составляется с точностью.',
        text3:'Мы верим, что аромат не просто носят — им живут. Он рассказывает историю о том, кто вы есть, прежде чем вы произнесёте слово.',
        pillar1:'Редкие Ингредиенты', pillar2:'Мастера Парфюмеры', pillar3:'Вечное Мастерство'
      },
      products: {
        filterAll:'Все', filterWomen:'Женские', filterMen:'Мужские',
        filterUnisex:'Унисекс', filterLimited:'Лимитированная Серия',
        viewDetails:'Подробнее', addToCart:'В Корзину', addedToCart:'добавлено в корзину',
        sectionLabel:'Коллекция',
        sectionTitle:'Избранные <em>Ароматы</em>',
        sectionSubtitle:'Каждый аромат — это глава. Найдите свою.',
        topNotes:'Верхние Ноты', heartNotes:'Ноты Сердца', baseNotes:'Базовые Ноты'
      },
      newsletter: {
        label:'Оставайтесь Близко',
        title:'Искусство<br><em>Предвкушения</em>',
        text:'Будьте первыми, кто узнаёт о новых коллекциях, эксклюзивных запусках и историях за каждым ароматом. Присоединяйтесь к нашему кругу ценителей.',
        emailPlaceholder:'Ваш адрес электронной почты',
        subscribe:'Подписаться',
        note:'Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.',
        success:'✦ &nbsp;Добро пожаловать в мир LUPI. Мы свяжемся с вами.'
      },
      contact: {
        label:'Свяжитесь с нами', heading:'Вопросы &amp; Запросы',
        namePlaceholder:'Ваше имя', emailPlaceholder:'Ваш email',
        messagePlaceholder:'Ваше сообщение', send:'Отправить Сообщение'
      },
      cart: {
        title:'Ваша Корзина', empty:'Ваша корзина пуста.',
        emptyHint:'Изучите нашу коллекцию.',
        subtotal:'Промежуточный итог', total:'Итого', checkout:'Оформить Заказ',
        continueShopping:'Продолжить покупки', remove:'Удалить', qty:'Кол-во'
      },
      auth: {
        login:'Войти', register:'Регистрация', account:'Аккаунт',
        email:'Адрес электронной почты', password:'Пароль',
        confirmPassword:'Подтвердить пароль', fullName:'Полное имя',
        loginBtn:'Войти', registerBtn:'Создать Аккаунт', logout:'Выйти',
        noAccount:'Нет аккаунта?', hasAccount:'Уже есть аккаунт?',
        registerLink:'Зарегистрироваться', loginLink:'Войти',
        welcome:'С возвращением', orderHistory:'История Заказов',
        noOrders:'Заказов нет. История появится здесь.',
        logoutSuccess:'Вы вышли из системы.',
        loginError:'Неверный email или пароль.',
        registerError:'Аккаунт с этим email уже существует.',
        passwordMismatch:'Пароли не совпадают.',
        passwordShort:'Пароль должен содержать не менее 6 символов.'
      },
      checkout: {
        title:'Оформление заказа', orderSummary:'Сводка заказа',
        customerInfo:'Информация о покупателе',
        fullName:'Полное имя', email:'Адрес электронной почты',
        phone:'Номер телефона', address:'Адрес',
        city:'Город', postalCode:'Почтовый индекс', country:'Страна',
        notes:'Примечания / Особые инструкции',
        notesPlaceholder:'Особые пожелания или инструкции по доставке…',
        payment:'Оплата', paymentNote:'Ваш платёж обрабатывается безопасно.',
        cardNumber:'Номер карты', expiryDate:'Дата истечения', cvv:'CVV',
        placeOrder:'Оформить Заказ', processing:'Обработка…',
        subtotal:'Промежуточный итог', shipping:'Доставка',
        shippingNote:'Рассчитывается при доставке', total:'Итого',
        guestCheckout:'Оформление как гость.',
        loginPrompt:'Есть аккаунт?',
        loginLink:'Войдите для быстрого оформления', backToCart:'← Назад'
      },
      confirmation: {
        title:'Заказ Подтверждён',
        subtitle:'Спасибо за ваш заказ. Подтверждение будет отправлено на ваш email.',
        orderNumber:'Номер заказа', returnHome:'На главную'
      },
      newReleases: {
        pageTitle:'Новинки — LUPI', label:'Недавно Выпущены',
        title:'Новые', titleItalic:'Творения',
        subtitle:'Новейшие выражения дома LUPI.',
        newRelease:'Новинка', addToCart:'В Корзину',
        viewDetails:'Подробнее', noProducts:'Новинки скоро.'
      },
      categories: {
        perfumes:'Парфюмы', handSoap:'Жидкое Мыло',
        roomSprays:'Ароматизаторы', candles:'Свечи'
      },
      footer: {
        navigate:'Навигация', collection:'Коллекция', legal:'Правовая информация',
        crafted:'Создано с намерением.',
        tagline:'Создано для тех, кто живёт своим ароматом.',
        privacy:'Политика конфиденциальности', terms:'Условия использования',
        shipping:'Политика доставки', returns:'Возврат',
        women:'Женские', men:'Мужские', unisex:'Унисекс', limited:'Лимитированная Серия'
      }
    }
  };

  /* ── Geo detection ──────────────────────────────────────── */

  async function detectLang() {
    const cached = sessionStorage.getItem('lupi_geo_lang');
    if (cached && SUPPORTED.includes(cached)) return cached;
    try {
      const ctrl = new AbortController();
      const tid  = setTimeout(() => ctrl.abort(), 3000);
      const res  = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
      clearTimeout(tid);
      const data = await res.json();
      const lang = COUNTRY_LANG[data.country_code] || DEFAULT;
      const result = SUPPORTED.includes(lang) ? lang : DEFAULT;
      sessionStorage.setItem('lupi_geo_lang', result);
      return result;
    } catch {
      const nav    = (navigator.language || '').slice(0, 2).toLowerCase();
      const result = SUPPORTED.includes(nav) ? nav : DEFAULT;
      sessionStorage.setItem('lupi_geo_lang', result);
      return result;
    }
  }

  /* ── helpers ────────────────────────────────────────────── */

  function getLang() {
    const s = localStorage.getItem('lupi_lang');
    if (SUPPORTED.includes(s)) return s;
    const g = sessionStorage.getItem('lupi_geo_lang');
    if (SUPPORTED.includes(g)) return g;
    return DEFAULT;
  }

  function t(key, lang) {
    const l   = lang || getLang();
    const src = TRANSLATIONS[l] || TRANSLATIONS[DEFAULT];
    const parts = key.split('.');
    let val = src;
    for (const p of parts) val = val && val[p];
    if (val === undefined) {
      let en = TRANSLATIONS[DEFAULT];
      for (const p of parts) en = en && en[p];
      return en !== undefined ? String(en) : key;
    }
    return String(val);
  }

  function apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n, lang);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml, lang);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder, lang);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.dataset.i18nTitle, lang);
    });
    document.documentElement.lang = lang;
  }

  function updateSelector(lang) {
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    const cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = lang.toUpperCase();
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem('lupi_lang', lang);
    apply(lang);
    updateSelector(lang);
  }

  async function init() {
    let lang = localStorage.getItem('lupi_lang');
    if (!lang || !SUPPORTED.includes(lang)) {
      lang = await detectLang();
    }
    apply(lang);
    updateSelector(lang);

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    const trigger  = document.getElementById('langTrigger');
    const dropdown = document.getElementById('langDropdown');
    if (trigger && dropdown) {
      trigger.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });
      document.addEventListener('click', () => dropdown.classList.remove('open'));
    }
  }

  return { init, t, getLang, setLang, apply };
})();
