# localization-str-manager

A library to manage localization strings with complex logic, built on top of `i18next` and `lodash`.

## Installation

Run the following command to install `localization-str-manager`:

```bash
npm install localization-str-manager
```

## Usage

To use `localization-str-manager`, first import the library, then use its functions to get localized strings or update resources:

```javascript
const { getLocalizedString, updateResources } = require('localization-str-manager')

// Updating resources with new strings
updateResources('en', {
  'greeting': 'Hello, World!'
})

// Getting a localized string
console.log(getLocalizedString('greeting')) // Outputs: Hello, World!
```

## API

- `getLocalizedString(key, options)`: Retrieves a localized string based on the given key and options.
- `updateResources(lng, resources)`: Merges given resources into the existing ones for the specified language.
