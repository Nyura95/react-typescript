export default {
  translate: 'Langue de traduction actuelle: %{lang}',
  helmet: {
    '/': 'Acceuil',
    '/counter': 'Compteur',
    '/translate': 'Traduction',
    '/notification': 'Notification',
    '/loader': 'Loader'
  },
  nav: {
    title: 'react-typescript',
    page1: 'Acceuil',
    page2: 'Compteur',
    page3: 'Traduction',
    page4: 'Notification',
    page5: 'Loader',
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
      initialState: 'Bonjour !',
      state: 'Bonjour le monde !'
    },
    loader: {
      show: 'Afficher',
      hide: 'Cacher'
    },
    login: {
      button: 'Se connecter',
      title: 'Bonjour'
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
    }
  }
};
