const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// require for mock the translation
const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');

i18n.use(initReactI18next).init({
  resources: { en: { translation: {} } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

configure({ adapter: new Adapter() });
