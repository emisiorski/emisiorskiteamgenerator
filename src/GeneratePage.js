
module.exports = templateData => {
  const engineer = templateData[0];
  const manager = templateData[1];
  const intern = templateData[2];
  const team = [engineer, manager, intern];
  console.log(templateData);


  let generateManagerCard = (manager) => {
    return `
    <div class='column'>
    <div class='box has-background-link'>
      <div>
        <h1 class='title'>${manager.managerName}</h1><br>
        <h2 class='subtitle'>${manager.managerRole}</h2>
      </div>
      <div>
        <ul>
          <li class='box'>ID: ${manager.managerId}</li>
          <li class='box'>Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
          <li class='box'>Office Number: ${manager.managerOffice}</li>
        </ul>
        </div>
      </div>
    </div>
`
  }
  var managerString = generateManagerCard(manager);

  let generateEngineerCard = (engineer) => {
    return `
    <div class='column'>
      <div class='box has-background-link'>
        <div>
      <h1 class='title'>${engineer.engineerName}</h1><br>
      <h2 class='subtitle'>${engineer.engineerRole}</h2>
      </div>
      <div>
        <ul>
          <li class='box'>ID: ${engineer.engineerId}</li>
          <li class='box'>Email: <a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail} </a></li>
          <li class='box'>gitHub: <a href="https://github.com/${engineer.engineerGithub}" target="_blank">${engineer.engineerGithub}</a></li>
          </ul>
        </div>
      </div>
    </div>
  `
  }
  var engineerString = generateEngineerCard(engineer);

  let generateInternCard = (intern) => {
    return `
    <div class='column'>
      <div class='box has-background-link'>
        <div>
          <h1 class='title'>${intern.internName}</h1><br>
          <h2 class='subtitle'>${intern.internRole}</h2>
        </div>
          <div>
            <ul>
              <li class='box'>ID: ${intern.internId}</li>
              <li class='box'>Email: <a href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
              <li class='box'>School: ${intern.internSchool}</li>
              </ul>
              </div>
            </div>
          </div>
  `
  }
  var internString = generateInternCard(intern);

  let generateTeam = (team) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <title>My Team</title>
  </head>
  <body>
  <div class="container is-widescreen">
    <div class='notification is-danger'>
      <div class="title is-1 is-white is-centered">My Team</div>
    </div>

  </div>
  <div class='columns'>
  ${managerString}
  ${engineerString}
  ${internString}
  </div>
 </body>
</html>`
  }
  var teamString = generateTeam(team);
  return teamString;
}
