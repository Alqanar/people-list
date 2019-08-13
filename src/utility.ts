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

export const paramsInput = [
  {
    fieldName: `name`,
    labelName: `Имя сотрудника`,
    typeInput: `text`,
    placeholder: `Иван Иванов`
  },
  {
    fieldName: `phone`,
    labelName: `Телефон`,
    typeInput: `phone`,
    placeholder: `+7 (999) 999-9999`,
    pattern: `\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{4}`
  },
  {
    fieldName: `birthday`,
    labelName: `Дата рождения`,
    typeInput: `date`,
    pattern: `[0-9]{4}-[0-9]{2}-[0-9]{2}`
  }
]

export const addZero = (number: number): string =>
  String(number).padStart(2, `0`);
