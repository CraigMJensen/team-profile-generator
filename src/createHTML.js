const createCards = (empTeam) => {
  let cardArray = [];

  for (let i = 0; i < empTeam.length; i++) {
    const employee = empTeam[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = createManager(employee);

      cardArray.push(managerCard);
      // console.log(cardArray[i]);
    } else if (role === 'Engineer') {
      const engineerCard = createEngineer(employee);

      cardArray.push(engineerCard);
      // console.log(cardArray[i]);
    } else if (role === 'Intern') {
      const internCard = createIntern(employee);

      cardArray.push(internCard);
      // console.log(cardArray[i]);
    }
  }

  const allCards = cardArray.join('');

  const createTeam = createHTML(allCards);
  return createTeam;
};

const createManager = function (manager) {
  return `
  <div class='card border-success col-lg-4 py-2' style='max-width: 18rem;'>
    <div class='card-header text-center bg-success'>
      <h3>${manager.name}</h3>
      <h4>${manager.getRole()}</h4>
    </div>
    <div class='card-body bg-secondary'>
      <p>Employee ID# ${manager.id}</p>
      <p>Office # ${manager.officeNumber}</p>
      <a href="mailto:${manager.email}" class="text-white">${manager.email}</a>
    </div>
  </div>
    `;
};

const createEngineer = function (engineer) {
  return `
  <div class='card border-success col-lg-4 py-2' style='max-width: 18rem;'>
    <div class='card-header text-center bg-success'>
      <h3>${engineer.name}</h3>
      <h4>${engineer.getRole()}</h4>
    </div>
    <div class='card-body bg-secondary'>
      <p>Employee ID# ${engineer.id}</p>
      <p>Github <a href="https://github.com/${
        engineer.github
      }" class="text-white"
      >${engineer.github}</p>
      <a href="mailto:${engineer.email}" class="text-white">${
    engineer.email
  }</a>
    </div>
  </div>
    `;
};

const createIntern = function (intern) {
  return `
  <div class='card border-success col-lg-4 py-2' style='max-width: 18rem;'>
    <div class='card-header text-center bg-success'>
      <h3>${intern.name}</h3>
      <h4>${intern.getRole()}</h4>
    </div>
    <div class='card-body bg-secondary'>
      <p>Employee ID# ${intern.id}</p>
      <p>School ${intern.school}</p>
      <a href="mailto:${intern.email}" class="text-white">${intern.email}</a>
    </div>
  </div>
    `;
};

// Generate the HTML page with the employee cards
const createHTML = function (employeeCards) {
  console.log(employeeCards);
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header>
          <h1 class='bg-secondary py-4 text-center border-bottom'>Team Roster</h1>
        </header>
        <main class="container">
          <div class="row justify-content-around">
            ${employeeCards}
          </div>
        </main>
      </body>
    </html>
    `;
};

module.exports = createCards;
