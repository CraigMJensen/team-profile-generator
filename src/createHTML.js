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
  <div class='card mb-3 p-3' style='max-width: 18rem;'>
    <h3>${manager.name}</h3>
    <h4>${manager.getRole()}</h4>

    <p>${manager.email}</p>
    <p>Office Number ${manager.officeNumber}</p>
    <p>Employee ID# ${manager.id}</p>
  </div>
    `;
};

const createEngineer = function (engineer) {
  return `
  <div class='card mb-3 p-3' style='max-width: 18rem;'>
    <h3>${engineer.name}</h3>
    <h4>${engineer.getRole()}</h4>

    <p>${engineer.email}</p>
    <p>Github ${engineer.github}</p>
    <p>Employee ID# ${engineer.id}</p>
  </div>
    `;
};

const createIntern = function (intern) {
  return `
  <div class='card mb-3 p-3' style='max-width: 18rem;'>
    <h3>${intern.name}</h3>
    <h4>${intern.getRole()}</h4>

    <p>${intern.email}</p>
    <p>School ${intern.school}</p>
    <p>Employee ID# ${intern.id}</p>
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
        <h1 class='bg-success py-4 text-justify'>Team Roster</h1>
      </header>
      <main>
        <div class="d-flex">
          ${employeeCards}
        </div>
      </main>
    </body>
    </html>
    `;
};

module.exports = createCards;
