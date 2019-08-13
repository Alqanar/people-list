import { FieldValidator } from "final-form";

export const EMPTY_FILTER = `without`;
export const DEFAULT_SORTING = `byName`;

export const vocabularyPosts = {
  [EMPTY_FILTER]: `Все должности`,
  driver: `🚗 Водитель`,
  waiter: `💁 Официант`,
  cook: `👩🏽‍🍳 Повар`
}

export const dateLongStringOptions = {
  year: `numeric`,
  month: `long`,
  day: `numeric`
}

export const dateShortStringOptions = {
  year: `2-digit`,
  month: `2-digit`,
  day: `2-digit`
}

export const sortingVariants = [
  {
    name: `Имя сотрудника`,
    type: `byName`,
    isDisabled: false
  },
  {
    name: `Должность`,
    type: ``,
    isDisabled: true
  },
  {
    name: `День Рождения`,
    type: `byBirthday`,
    isDisabled: false
  }
]

const phonePattern = `\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{4}`
const birthdayPattern = `[0-9]{4}-[0-9]{2}-[0-9]{2}`

const required = (value): string | undefined =>
  (value ? undefined : `Поле не может быть пустым`);

const validatePhone = (value): string | undefined => {
  const idealPhone = new RegExp(phonePattern);

  if (idealPhone.test(value)) {
    return undefined;
  }
  return `Введите телефон в формате +7 (999) 999-9999`
}

const validateBirthday = (value): string | undefined => {
  const idealBirthday = new RegExp(birthdayPattern);

  if (idealBirthday.test(value)) {
    return undefined;
  }
  return `Введите дату рождения в формате ГГГГ-ММ-ДД`
}

const composeValidators = (...validators): FieldValidator<string> => (value): string | undefined =>
  validators.reduce((error, validator): string | undefined => error || validator(value), undefined)


export const paramsInput = [
  {
    fieldName: `name`,
    labelName: `Имя сотрудника`,
    typeInput: `text`,
    placeholder: `Иван Иванов`,
    validate: required
  },
  {
    fieldName: `phone`,
    labelName: `Телефон`,
    typeInput: `phone`,
    placeholder: `+7 (999) 999-9999`,
    pattern: phonePattern,
    validate: composeValidators(required, validatePhone)
  },
  {
    fieldName: `birthday`,
    labelName: `Дата рождения`,
    typeInput: `date`,
    pattern: birthdayPattern,
    validate: composeValidators(required, validateBirthday)
  }
]

export const addZero = (number: number): string =>
  String(number).padStart(2, `0`);
