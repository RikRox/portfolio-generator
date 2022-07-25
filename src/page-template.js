const generateProjects = projectsArr => {
  const projectHtmlArr = projectsArr.map(({name, description, languages, link})=>{

    //get arry of just featured projects
    const featuredProjects = projectsArr.filter(project => {
      if(project.feature){
        return true;
      } else {
        return false;
      }
      });

      //get array of all non-featured projects 
      const nonFeaturedProjects = projectsArr.filter(project => {
        if(!project.feature){
          return true;
        } else {
          return false;
        }
      });


      const FeaturedProjectHtmlArr = featuredProjects.map (({name, description, languages, link}) => {

    
    return `<div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
    <h3 class="portfolio-item-title text-light">${name}</h3>
    <h5 class="portfolio-languages">
    Built with:
    ${languages.join(', ')}
    </h5>
    <p>${description}</p>
    <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
    </div>
    `;
  });


  const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map (({name, description, languages, link}) => {

    
    return `<div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
    <h3 class="portfolio-item-title text-light">${name}</h3>
    <h5 class="portfolio-languages">
    Built with:
    ${languages.join(', ')}
    </h5>
    <p>${description}</p>
    <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
    </div>
    `;
  });




  return `
  <section class="my-3" id=Portfolio">
    <h2 class="text-dark bg-primary p-2 display-inline block">
    <div class="flex-row justify-space-between">
    <!--Leaving this empty as we'll dynamically insert project HTML here-->
    ${projectHtmlArr.join('')}
    ${nonFeaturedProjectHtmlArr.join('')}
    </div>
    </section>
  `;
});



//create the about section
const generateAbout = aboutText => {
  if(!aboutText) {
    return '';
  }

  return ` <section class="my-3" id="about">
  <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
  <p>${aboutText}</p>
  </section>
  `;
};




module.exports = (templateData) => {

  console.log(templateData);

  //destructure projects and about data from templateData based on their property key names

  const {projects, about, ...header} = templateData

  // header = {
  //   name: templateData.name,
  //   github: templateData.github
  // };

  console.log(projects, about, header);

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
    <h1>${templateData.name}</h1>
    <h2><a href="https://github.com/${templateData.github}">Github</a></h2>


  <main class="container my-5">
    ${generateAbout(about)}
    ${generateProjects(projects)}
  </main>


    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
  </footer>
  
  </body>
  </html>
  `;
};
