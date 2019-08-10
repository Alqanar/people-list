const transformEmployeeObject = (objectData) => {
  const birthdayArray = objectData.birthday
    .split('.')
    .map((elem) => parseInt(elem, 10));

  const birthdayAsDate = new Date(
    birthdayArray[2],
    birthdayArray[1] - 1,
    birthdayArray[0]
  );

  return {
    'id': objectData.id,
    'name': objectData.name,
    'isArchive': objectData.isArchive,
    'role': objectData.role,
    'phone': objectData.phone,
    'birthday': birthdayAsDate
  }
};

export default transformEmployeeObject;
