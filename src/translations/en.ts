export default {
  translate: 'Current translation language: %{lang}',
  helmet: {
    '/': 'Home',
    '/counter': 'Counter',
    '/translate': 'Translate',
    '/notification': 'Notification',
    '/loader': 'Loader',
    '/animate': 'Animate',
    '/component': 'Component'
  },
  nav: {
    title: 'react-typescript',
    page1: 'Home',
    page2: 'Counter',
    page3: 'Translate',
    page4: 'Notification',
    page5: 'Loader',
    page6: 'Animate',
    page7: 'Component',
    disconnect: 'disconnect'
  },
  notifications: {
    connect: {
      title: 'Hello !',
      message: 'You are connected !'
    }
  },
  pages: {
    component: {
      button: 'Button'
    },
    home: {
      hello: 'Your email : %{username}'
    },
    loader: {
      show: 'Show',
      hide: 'Hide',
      loadscreen: 'Loading screen',
      loadbar: 'Loading bar'
    },
    login: {
      username: 'Usernname',
      password: 'Password',
      button: 'Submit',
      title: 'React-typescript v%{version}'
    },
    translate: {
      button: 'Change language'
    },
    counter: {
      count: 'Counter : %{counter}',
      increment: 'Incrément',
      decrement: 'Decrease',
      async: 'Async incrément',
      reset: 'Reset'
    },
    animate: {
      triggerIn: 'Trigger in',
      triggerOut: 'Trigger out',
      trigger: 'Trigger'
    }
  }
};
