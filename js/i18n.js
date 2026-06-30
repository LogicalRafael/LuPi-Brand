/* ============================================================
   LUPI — i18n (Internationalisation)
   Supports: English, Portuguese, Spanish, French
   ============================================================
   To add a language:
     1. Add a new key to TRANSLATIONS below (e.g. 'de' for German)
     2. Add a <button class="lang-option" data-lang="de"> in each page's nav
     3. Add 'de' to the SUPPORTED array

   To edit a translation:
     Find the language key (en/pt/es/fr) and update the value.
     Keys match elements via data-i18n="section.key" in HTML.
   ============================================================ */

'use strict';

const LUPI_LANG = (function () {

  const SUPPORTED = ['en', 'pt', 'es', 'fr'];
  const DEFAULT   = 'en';

  const TRANSLATIONS = {

    /* ── ENGLISH ──────────────────────────────────────────── */
    en: {
      nav: {
        home: 'Home', about: 'About', collection: 'Collection',
        contact: 'Contact', newReleases: 'New Releases',
        cart: 'Cart', account: 'Account', login: 'Login'
      },
      hero: {
        explore: 'Explore Collection',
        exploreCollection: 'Explore the Collection',
        story: 'Discover Our Story'
      },
      products: {
        filterAll: 'All', filterWomen: 'Women', filterMen: 'Men',
        filterUnisex: 'Unisex', filterLimited: 'Limited Edition',
        viewDetails: 'View Details', addToCart: 'Add to Cart',
        addedToCart: 'added to cart',
        sectionLabel: 'The Collection', sectionSubtitle: 'Each scent is a chapter. Find yours.'
      },
      cart: {
        title: 'Your Cart', empty: 'Your cart is empty.',
        emptyHint: 'Explore our collection and discover your signature scent.',
        subtotal: 'Subtotal', total: 'Total',
        checkout: 'Proceed to Checkout',
        continueShopping: 'Continue Shopping',
        remove: 'Remove', qty: 'Qty'
      },
      auth: {
        login: 'Login', register: 'Register', account: 'Account',
        email: 'Email address', password: 'Password',
        confirmPassword: 'Confirm password', fullName: 'Full name',
        loginBtn: 'Sign In', registerBtn: 'Create Account', logout: 'Log Out',
        noAccount: "Don't have an account?", hasAccount: 'Already have an account?',
        registerLink: 'Register', loginLink: 'Sign in',
        welcome: 'Welcome back', orderHistory: 'Order History',
        noOrders: 'No orders yet. Your order history will appear here.',
        logoutSuccess: 'You have been logged out.',
        loginError: 'Invalid email or password.',
        registerError: 'An account with this email already exists.',
        passwordMismatch: 'Passwords do not match.',
        passwordShort: 'Password must be at least 6 characters.'
      },
      checkout: {
        title: 'Checkout', orderSummary: 'Order Summary',
        customerInfo: 'Customer Information',
        fullName: 'Full Name', email: 'Email Address',
        phone: 'Phone Number', address: 'Street Address',
        city: 'City', postalCode: 'Postal Code', country: 'Country',
        notes: 'Notes / Special Instructions',
        notesPlaceholder: 'Any special requests or delivery notes…',
        payment: 'Payment', paymentNote: 'Your payment is processed securely.',
        cardNumber: 'Card Number', expiryDate: 'Expiry Date', cvv: 'CVV',
        placeOrder: 'Place Order', processing: 'Processing…',
        subtotal: 'Subtotal', shipping: 'Shipping',
        shippingNote: 'Calculated at delivery', total: 'Total',
        guestCheckout: 'Checking out as guest.',
        loginPrompt: 'Have an account?',
        loginLink: 'Sign in for faster checkout',
        backToCart: '← Back'
      },
      confirmation: {
        title: 'Order Confirmed',
        subtitle: 'Thank you for your order. A confirmation will be sent to your email.',
        orderNumber: 'Order Reference',
        returnHome: 'Return Home'
      },
      newReleases: {
        pageTitle: 'New Releases — LUPI', label: 'Recently Launched',
        title: 'New', titleItalic: 'Arrivals',
        subtitle: 'The newest expressions from the house of LUPI.',
        newRelease: 'New Release', addToCart: 'Add to Cart',
        viewDetails: 'View Details', noProducts: 'New releases coming soon.'
      },
      categories: {
        perfumes: 'Perfumes', handSoap: 'Hand Soap',
        roomSprays: 'Room Sprays', candles: 'Candles'
      },
      footer: {
        navigate: 'Navigate', collection: 'Collection', legal: 'Legal',
        crafted: 'Crafted with intention.',
        privacy: 'Privacy Policy', terms: 'Terms of Service',
        shipping: 'Shipping Policy', returns: 'Returns',
        women: 'Women', men: 'Men', unisex: 'Unisex', limited: 'Limited Edition'
      }
    },

    /* ── PORTUGUESE ───────────────────────────────────────── */
    pt: {
      nav: {
        home: 'Início', about: 'Sobre', collection: 'Coleção',
        contact: 'Contacto', newReleases: 'Novidades',
        cart: 'Carrinho', account: 'Conta', login: 'Entrar'
      },
      hero: {
        explore: 'Explorar Coleção',
        exploreCollection: 'Explorar a Coleção',
        story: 'Descobrir a Nossa História'
      },
      products: {
        filterAll: 'Todos', filterWomen: 'Mulher', filterMen: 'Homem',
        filterUnisex: 'Unissexo', filterLimited: 'Edição Limitada',
        viewDetails: 'Ver Detalhes', addToCart: 'Adicionar ao Carrinho',
        addedToCart: 'adicionado ao carrinho',
        sectionLabel: 'A Coleção', sectionSubtitle: 'Cada aroma é um capítulo. Encontre o seu.'
      },
      cart: {
        title: 'O Seu Carrinho', empty: 'O seu carrinho está vazio.',
        emptyHint: 'Explore a nossa coleção e descubra a sua fragrância.',
        subtotal: 'Subtotal', total: 'Total',
        checkout: 'Finalizar Compra',
        continueShopping: 'Continuar a Comprar',
        remove: 'Remover', qty: 'Qtd'
      },
      auth: {
        login: 'Entrar', register: 'Registar', account: 'Conta',
        email: 'Endereço de email', password: 'Palavra-passe',
        confirmPassword: 'Confirmar palavra-passe', fullName: 'Nome completo',
        loginBtn: 'Iniciar Sessão', registerBtn: 'Criar Conta', logout: 'Terminar Sessão',
        noAccount: 'Não tem conta?', hasAccount: 'Já tem conta?',
        registerLink: 'Registar', loginLink: 'Iniciar sessão',
        welcome: 'Bem-vindo de volta', orderHistory: 'Histórico de Encomendas',
        noOrders: 'Sem encomendas. O seu histórico aparecerá aqui.',
        logoutSuccess: 'A sua sessão foi terminada.',
        loginError: 'Email ou palavra-passe inválidos.',
        registerError: 'Já existe uma conta com este email.',
        passwordMismatch: 'As palavras-passe não coincidem.',
        passwordShort: 'A palavra-passe deve ter pelo menos 6 caracteres.'
      },
      checkout: {
        title: 'Finalizar Compra', orderSummary: 'Resumo da Encomenda',
        customerInfo: 'Informação do Cliente',
        fullName: 'Nome Completo', email: 'Endereço de Email',
        phone: 'Número de Telefone', address: 'Morada',
        city: 'Cidade', postalCode: 'Código Postal', country: 'País',
        notes: 'Notas / Instruções Especiais',
        notesPlaceholder: 'Pedidos especiais ou notas de entrega…',
        payment: 'Pagamento', paymentNote: 'O seu pagamento é processado de forma segura.',
        cardNumber: 'Número do Cartão', expiryDate: 'Data de Validade', cvv: 'CVV',
        placeOrder: 'Fazer Encomenda', processing: 'A processar…',
        subtotal: 'Subtotal', shipping: 'Envio',
        shippingNote: 'Calculado na entrega', total: 'Total',
        guestCheckout: 'A encomendar como convidado.',
        loginPrompt: 'Tem conta?',
        loginLink: 'Inicie sessão para uma compra mais rápida',
        backToCart: '← Voltar'
      },
      confirmation: {
        title: 'Encomenda Confirmada',
        subtitle: 'Obrigado pela sua encomenda. Uma confirmação será enviada para o seu email.',
        orderNumber: 'Referência da Encomenda',
        returnHome: 'Voltar ao Início'
      },
      newReleases: {
        pageTitle: 'Novidades — LUPI', label: 'Recentemente Lançados',
        title: 'Novas', titleItalic: 'Chegadas',
        subtitle: 'As mais recentes expressões da casa LUPI.',
        newRelease: 'Novo Lançamento', addToCart: 'Adicionar ao Carrinho',
        viewDetails: 'Ver Detalhes', noProducts: 'Novidades em breve.'
      },
      categories: {
        perfumes: 'Perfumes', handSoap: 'Sabonetes Líquidos',
        roomSprays: 'Aromatizadores de Ambiente', candles: 'Velas'
      },
      footer: {
        navigate: 'Navegar', collection: 'Coleção', legal: 'Legal',
        crafted: 'Feito com intenção.',
        privacy: 'Política de Privacidade', terms: 'Termos de Serviço',
        shipping: 'Política de Envio', returns: 'Devoluções',
        women: 'Mulher', men: 'Homem', unisex: 'Unissexo', limited: 'Edição Limitada'
      }
    },

    /* ── SPANISH ──────────────────────────────────────────── */
    es: {
      nav: {
        home: 'Inicio', about: 'Sobre', collection: 'Colección',
        contact: 'Contacto', newReleases: 'Novedades',
        cart: 'Carrito', account: 'Cuenta', login: 'Entrar'
      },
      hero: {
        explore: 'Explorar Colección',
        exploreCollection: 'Explorar la Colección',
        story: 'Descubrir Nuestra Historia'
      },
      products: {
        filterAll: 'Todos', filterWomen: 'Mujer', filterMen: 'Hombre',
        filterUnisex: 'Unisex', filterLimited: 'Edición Limitada',
        viewDetails: 'Ver Detalles', addToCart: 'Añadir al Carrito',
        addedToCart: 'añadido al carrito',
        sectionLabel: 'La Colección', sectionSubtitle: 'Cada aroma es un capítulo. Encuentra el tuyo.'
      },
      cart: {
        title: 'Tu Carrito', empty: 'Tu carrito está vacío.',
        emptyHint: 'Explora nuestra colección y descubre tu fragancia.',
        subtotal: 'Subtotal', total: 'Total',
        checkout: 'Proceder al Pago',
        continueShopping: 'Seguir Comprando',
        remove: 'Eliminar', qty: 'Cant'
      },
      auth: {
        login: 'Entrar', register: 'Registrarse', account: 'Cuenta',
        email: 'Correo electrónico', password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña', fullName: 'Nombre completo',
        loginBtn: 'Iniciar Sesión', registerBtn: 'Crear Cuenta', logout: 'Cerrar Sesión',
        noAccount: '¿No tienes cuenta?', hasAccount: '¿Ya tienes cuenta?',
        registerLink: 'Regístrate', loginLink: 'Inicia sesión',
        welcome: 'Bienvenido de nuevo', orderHistory: 'Historial de Pedidos',
        noOrders: 'Sin pedidos. Tu historial aparecerá aquí.',
        logoutSuccess: 'Has cerrado sesión.',
        loginError: 'Email o contraseña incorrectos.',
        registerError: 'Ya existe una cuenta con este email.',
        passwordMismatch: 'Las contraseñas no coinciden.',
        passwordShort: 'La contraseña debe tener al menos 6 caracteres.'
      },
      checkout: {
        title: 'Finalizar Compra', orderSummary: 'Resumen del Pedido',
        customerInfo: 'Información del Cliente',
        fullName: 'Nombre Completo', email: 'Correo Electrónico',
        phone: 'Número de Teléfono', address: 'Dirección',
        city: 'Ciudad', postalCode: 'Código Postal', country: 'País',
        notes: 'Notas / Instrucciones Especiales',
        notesPlaceholder: 'Solicitudes especiales o notas de entrega…',
        payment: 'Pago', paymentNote: 'Tu pago se procesa de forma segura.',
        cardNumber: 'Número de Tarjeta', expiryDate: 'Fecha de Caducidad', cvv: 'CVV',
        placeOrder: 'Realizar Pedido', processing: 'Procesando…',
        subtotal: 'Subtotal', shipping: 'Envío',
        shippingNote: 'Calculado en entrega', total: 'Total',
        guestCheckout: 'Comprando como invitado.',
        loginPrompt: '¿Tienes cuenta?',
        loginLink: 'Inicia sesión para una compra más rápida',
        backToCart: '← Volver'
      },
      confirmation: {
        title: 'Pedido Confirmado',
        subtitle: 'Gracias por tu pedido. Se enviará una confirmación a tu email.',
        orderNumber: 'Referencia del Pedido',
        returnHome: 'Volver al Inicio'
      },
      newReleases: {
        pageTitle: 'Novedades — LUPI', label: 'Lanzamientos Recientes',
        title: 'Nuevas', titleItalic: 'Llegadas',
        subtitle: 'Las últimas expresiones de la casa LUPI.',
        newRelease: 'Nuevo Lanzamiento', addToCart: 'Añadir al Carrito',
        viewDetails: 'Ver Detalles', noProducts: 'Novedades próximamente.'
      },
      categories: {
        perfumes: 'Perfumes', handSoap: 'Jabones de Manos',
        roomSprays: 'Ambientadores', candles: 'Velas'
      },
      footer: {
        navigate: 'Navegar', collection: 'Colección', legal: 'Legal',
        crafted: 'Hecho con intención.',
        privacy: 'Política de Privacidad', terms: 'Términos de Servicio',
        shipping: 'Política de Envío', returns: 'Devoluciones',
        women: 'Mujer', men: 'Hombre', unisex: 'Unisex', limited: 'Edición Limitada'
      }
    },

    /* ── FRENCH ───────────────────────────────────────────── */
    fr: {
      nav: {
        home: 'Accueil', about: 'À propos', collection: 'Collection',
        contact: 'Contact', newReleases: 'Nouveautés',
        cart: 'Panier', account: 'Compte', login: 'Connexion'
      },
      hero: {
        explore: 'Explorer la Collection',
        exploreCollection: 'Explorer la Collection',
        story: 'Découvrir Notre Histoire'
      },
      products: {
        filterAll: 'Tous', filterWomen: 'Femme', filterMen: 'Homme',
        filterUnisex: 'Mixte', filterLimited: 'Édition Limitée',
        viewDetails: 'Voir Détails', addToCart: 'Ajouter au Panier',
        addedToCart: 'ajouté au panier',
        sectionLabel: 'La Collection', sectionSubtitle: 'Chaque parfum est un chapitre. Trouvez le vôtre.'
      },
      cart: {
        title: 'Votre Panier', empty: 'Votre panier est vide.',
        emptyHint: 'Explorez notre collection et découvrez votre fragrance.',
        subtotal: 'Sous-total', total: 'Total',
        checkout: 'Passer à la Caisse',
        continueShopping: 'Continuer les Achats',
        remove: 'Supprimer', qty: 'Qté'
      },
      auth: {
        login: 'Connexion', register: "S'inscrire", account: 'Compte',
        email: 'Adresse email', password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe', fullName: 'Nom complet',
        loginBtn: 'Se Connecter', registerBtn: 'Créer un Compte', logout: 'Se Déconnecter',
        noAccount: 'Pas encore de compte ?', hasAccount: 'Déjà un compte ?',
        registerLink: "S'inscrire", loginLink: 'Se connecter',
        welcome: 'Bon retour', orderHistory: 'Historique des Commandes',
        noOrders: 'Aucune commande. Votre historique apparaîtra ici.',
        logoutSuccess: 'Vous avez été déconnecté.',
        loginError: 'Email ou mot de passe incorrect.',
        registerError: 'Un compte avec cet email existe déjà.',
        passwordMismatch: 'Les mots de passe ne correspondent pas.',
        passwordShort: 'Le mot de passe doit comporter au moins 6 caractères.'
      },
      checkout: {
        title: 'Paiement', orderSummary: 'Récapitulatif',
        customerInfo: 'Informations Client',
        fullName: 'Nom Complet', email: 'Adresse Email',
        phone: 'Numéro de Téléphone', address: 'Adresse',
        city: 'Ville', postalCode: 'Code Postal', country: 'Pays',
        notes: 'Notes / Instructions Spéciales',
        notesPlaceholder: 'Demandes spéciales ou notes de livraison…',
        payment: 'Paiement', paymentNote: 'Votre paiement est traité en toute sécurité.',
        cardNumber: 'Numéro de Carte', expiryDate: "Date d'Expiration", cvv: 'CVV',
        placeOrder: 'Passer la Commande', processing: 'Traitement…',
        subtotal: 'Sous-total', shipping: 'Livraison',
        shippingNote: 'Calculé à la livraison', total: 'Total',
        guestCheckout: "Commander en tant qu'invité.",
        loginPrompt: 'Vous avez un compte ?',
        loginLink: 'Connectez-vous pour un achat plus rapide',
        backToCart: '← Retour'
      },
      confirmation: {
        title: 'Commande Confirmée',
        subtitle: 'Merci pour votre commande. Une confirmation sera envoyée à votre email.',
        orderNumber: 'Référence de la Commande',
        returnHome: "Retour à l'Accueil"
      },
      newReleases: {
        pageTitle: 'Nouveautés — LUPI', label: 'Récemment Lancés',
        title: 'Nouvelles', titleItalic: 'Créations',
        subtitle: 'Les dernières expressions de la maison LUPI.',
        newRelease: 'Nouveau Lancement', addToCart: 'Ajouter au Panier',
        viewDetails: 'Voir Détails', noProducts: 'Nouveautés à venir.'
      },
      categories: {
        perfumes: 'Parfums', handSoap: 'Savons pour les Mains',
        roomSprays: "Parfums d'Intérieur", candles: 'Bougies'
      },
      footer: {
        navigate: 'Navigation', collection: 'Collection', legal: 'Mentions Légales',
        crafted: 'Conçu avec intention.',
        privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation",
        shipping: "Politique d'Expédition", returns: 'Retours',
        women: 'Femme', men: 'Homme', unisex: 'Mixte', limited: 'Édition Limitée'
      }
    }
  };

  /* ── helpers ────────────────────────────────────────────── */

  function getLang() {
    const s = localStorage.getItem('lupi_lang');
    return SUPPORTED.includes(s) ? s : DEFAULT;
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

  function init() {
    const lang = getLang();
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

  return { init, t, getLang, setLang };
})();
