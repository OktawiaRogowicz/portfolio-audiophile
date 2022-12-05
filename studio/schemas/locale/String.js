import supportedLanguages from './supportedLanguages'

export const DEFAULT_LOCALE_ID = 'en'

export default {
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
}
