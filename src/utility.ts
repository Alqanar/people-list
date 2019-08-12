export const EMPTY_FILTER = `without`;
export const DEFAULT_SORTING = `byName`;

export const vocabularyPosts = {
  [EMPTY_FILTER]: `Все должности`,
  driver: `Водитель`,
  waiter: `Официант`,
  cook: `Повар`
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
