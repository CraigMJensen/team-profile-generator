const createCards = (empTeam) => {
  let cardArray = [];

  for (let i = 0; i < empTeam.length; i++) {
    const employee = empTeam[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = employee;

      cardArray.push(managerCard);
    } else if (role === 'Engineer') {
      const engineerCard = employee;

      cardArray.push(engineerCard);
    } else if (role === 'Intern') {
      const internCard = employee;

      cardArray.push(internCard);
      console.log(cardArray);
    }
  }
};

module.exports = createCards;
