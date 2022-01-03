module.exports = templateData => {
  const engineer = templateData[0];
  const manager = templateData[1];
  const intern = templateData[2];
  console.log(templateData);


let generateManagerCard = (manager) => {
return `
<div class='box is-two-fifths">
<div class=''>
    <h1 class='title'>${manager.getName()}</h1><br>
    <h2 class='subtitle'>${manager.getRole()}</h2>
</div>
<div class='box'>
    <ul class=''>
        <li class='box'>ID: ${manager.getId()}</li>
        <li class='box'>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class='box'>Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>
`
}
generateManagerCard();

let generateEngineerCard = (engineer) => {
  return `
  <div class='box is-two-fifths">
  <div class=''>
      <h1 class='title'>${engineer.getName()}</h1><br>
      <h2 class='subtitle'>${engineer.getRole()}</h2>
  </div>
  <div class=''>
      <ul class='box'>
          <li class='box'>ID: ${engineer.getId()}</li>
          <li class='box'>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()} </a></li>
          <li class='box'>gitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
      </ul>
  </div>
</div>
  `
}
generateEngineerCard();

let generateInternCard = (intern) => {
  return `
  <div class='box is-two-fifths">
      <div class=''>
          <h1 class='title'>${intern.getName()}</h1><br>
          <h2 class='subtitle'>${intern.getRole()}</h2>
      </div>
      <div class=''>
          <ul class='list-group'>
              <li class='box'>ID: ${intern.getId()}</li>
              <li class='box'>Email: <a href="mailto:${intern.getEmail()}">${Intern.getEmail()}</a></li>
              <li class='box'>School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
  `
}
generateInternCard();

let generateTeam = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="/dist/style.css" />
    <title>My Team</title>
  </head>
  <body>
  <div class="box is-danger is-full">
    <div class="">
      <h1 class="title is-white">My Team</h1>
    </div>
  </div>
  <div class="box">
  ${generateManagerCard}
  ${generateEngineerCard}
  ${generateInternCard}
  </div>
  </body>
  </html>`
}
generateTeam();
}