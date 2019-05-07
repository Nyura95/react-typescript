export default {
  translate: 'Langue de traduction actuelle: %{lang}',
  helmet: {
    '/': 'Acceuil',
    '/counter': 'Compteur',
    '/translate': 'Traduction',
    '/notification': 'Notification',
    '/loader': 'Loader',
    '/animate': 'Animation'
  },
  nav: {
    title: 'React-typescript',
    page1: 'Acceuil',
    page2: 'Compteur',
    page3: 'Traduction',
    page4: 'Notification',
    page5: 'Loader',
    page6: 'Animation',
    disconnect: 'Déconnexion'
  },
  notifications: {
    connect: {
      title: 'Bonjour !',
      message: 'Vous êtes connecté'
    }
  },
  pages: {
    notification: {
      button: 'Lancer une notification',
      title: 'Titre',
      message: 'Message'
    },
    home: {
      run: 'Lancer le state',
      initialState: 'Bonjour %{username} !',
      state: '%{username} à modifier le state !'
    },
    loader: {
      show: 'Afficher',
      hide: 'Cacher',
      loadscreen: 'Page de chargement',
      loadbar: 'Barre de chargement'
    },
    login: {
      username: "Nom d'utilisateur",
      password: 'Mot de passe',
      button: 'Se connecter',
      title: 'React-typescript v%{version}'
    },
    translate: {
      button: 'Changer de langue'
    },
    counter: {
      count: 'Compteur : %{counter}',
      increment: 'Incrémenter',
      decrement: 'Décrémenter',
      async: 'Incrémenter en asynchrone',
      reset: 'Réinitialiser'
    },
    animate: {
      triggerIn: 'Déchancher l\'apparition',
      triggerOut: 'Déchancher la disparition',
      trigger: 'Déchancher l\'animation'
    }
  }
};
