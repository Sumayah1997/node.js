import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"hi. what is your name?",
        name: "Name", 
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const Name = answers;
    console.log(Name);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("try error");
    } else {
      // Something else went wrong
    }
  });