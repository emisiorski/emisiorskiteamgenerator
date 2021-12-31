module.exports = templateData => {
  const engineer = templateData[0];  
  const manager = templateData[1];
  const intern = templateData[2];
  console.log(templateData);
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${engineer.engineerName}</h1>
      <h2><a href="https://github.com/${engineer.enginerGithub}">Github</a></h2>
    </body>
    </html>
    `;
  };