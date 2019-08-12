export const EMPTY_FILTER = `without`;
export const DEFAULT_SORTING = `byName`;

export const vocabularyPosts = {
  [EMPTY_FILTER]: `Не выбрано`,
  driver: `Водитель`,
  waiter: `Официант`,
  cook: `Повар`
}

export const dateStringOptions = {
  year: `numeric`,
  month: `long`,
  day: `numeric`
}

export const sortingVariants =[
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
