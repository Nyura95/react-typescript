export default {
  translation: {
    translate: 'Current translation language: {{lang}}',
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
      title: 'React-typescript',
      page1: 'Home',
      page2: 'Counter',
      page3: 'Translate',
      page4: 'Notification',
      page5: 'Loader',
      page6: 'Component',
      disconnect: 'Disconnect'
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
      notification: {
        button: 'Run a notification',
        title: 'Title',
        message: 'Message'
      },
      home: {
        hello: 'Your email : {{username}}'
      },
      loader: {
        show: 'Show',
        hide: 'Hide',
        loadscreen: 'Loading screen',
        loadbar: 'Loading bar',
        loadscreentext: 'Please wait'
      },
      login: {
        username: 'Username',
        password: 'Password',
        button: 'Submit',
        title: 'React-typescript v{{version}}'
      },
      translate: {
        button: 'Change language'
      },
      counter: {
        count: 'Counter : {{counter}}',
        increment: 'Increment',
        decrement: 'Decrease',
        async: 'Async increment',
        reset: 'Reset'
      },
      animate: {
        triggerIn: 'Trigger in',
        triggerOut: 'Trigger out',
        trigger: 'Trigger'
      }
    }
  }
};
