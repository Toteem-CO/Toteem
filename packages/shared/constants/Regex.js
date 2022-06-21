//export const __PasswordRegex = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9 ])(?!.*[\\s])(?=.{10,})';
export const __EmailRegex =
  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
export const __NameRegex = "^[éèëêöôïîàäâüûa-z ,.'-]+$";

export const __PasswordRegexGroups = [
  { regex: '(?=.*[a-z])', description: 'Au moins une lettre minuscule' },
  { regex: '(?=.*[A-Z])', description: 'Au moins une lettre majuscule' },
  { regex: '(?=.*[0-9])', description: 'Au moins un chiffre' },
  { regex: '(?=.*[^A-Za-z0-9 ])', description: 'Au moins un caractère spécial' },
  { regex: '(?!.*[\\s])', description: 'Aucun espace' },
  { regex: '(?=.{10,})', description: 'Au moins 10 caractères' },
];

export const __PasswordRegex = __PasswordRegexGroups.map((e) => e.regex).join('');
