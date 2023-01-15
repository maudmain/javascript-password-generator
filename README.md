# javascript-password-generator

## Project description
The following brief was provided by edX Bootcamp.
The challenge required ud to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. 

## Instructions

The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)


* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page.

  ## Usage
To view the final results, you will need to open the page in the browser [Deployed landing page]().

Then click on the generate button, this will open a pop-up box and ask you to enter what you would want the length of your password to be.

![password generator prompt](./assets/05-%20screenshot%20prompt%201.PNG)

If the criteria is not met, you will be asked the question again.

Upon writting the number, meeting the criteria, you will need to confirm through four different prompts the character types wanted. if the criteria is not met, you will be asked the questions again.

![password generator prompt](./assets/05-%20screenshot%20prompt%20requirement%20not%20met.PNG)

Once all is met, the password will appear on the screen label.

![password generator prompt](./assets/05-screenshot-final-password.PNG)

To reset and get a new password, simply press the generate button again.






  ## Credit
  - edX Bootcamp: for project brief and criterias, tutorial and ressources.

  What I have learned/ Resources:
  - Do...while loop https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
  - ParseInt function  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
  - Array push method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push


  ## License
  MIT