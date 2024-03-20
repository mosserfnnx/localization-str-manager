const i18n = require('i18next');
const _ = require('lodash');

// Initialization of i18next with a simple configuration
i18n.init({
  lng: 'en', // default language
  resources: {
    en: {
      translation: {
        "key": "Hello World"
      }
    }
  }
});

const getLocalizedString = (key, options = {}) => {
  return i18n.t(key, options);
};

const updateResources = (lng, resources) => {
  const existingResources = i18n.getResourceBundle(lng, 'translation') || {};
  const mergedResources = _.merge({}, existingResources, resources);

  i18n.addResourceBundle(lng, 'translation', mergedResources, true, true);
};

module.exports = { getLocalizedString, updateResources };
