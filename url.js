import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image'
inquirer
.prompt([
    /* Pass your questions in here */
    {message:"hi. what is your name?",
        name: "URL", 
    }
])
.then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream("QRCode.png"));
   fs.writeFile('URL.txt',url,(err)=>
   {
    if(err) throw err;
    console.log("url saved in file");
   });
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    console.log("try error");
    } else {
      // Something else went wrong
    }
});