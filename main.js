/**
 Below are the exercises to complete:
  Exercise 6.1.1 - In main.js create a simple function that takes two parameters (firstName, surname), 
                   and returns your full name. Try printing the result to the console. 
                   Don’t forget to link your main.js to your index.html
  Exercise 6.1.2 - Those that are following along with your own portfolio, go to this week’s template, 
                   and copy all the modal-body HTML on the “Contact Me” page (line 91 - 107). Use this to 
                   replace what you currently have in your own modal-body. Also copy all of the Javascript 
                   code from contact.js into your own contact.js file. You will need these for this week’s exercises.
                   Don’t forget to link your contact.js to your contact.html 

  Exercise 6.2.1 - Go to your site browser and open Chrome Dev Tools. In the console, type window and press enter. 
                   Now try and find the document key in this object, once you’ve found document look for the key all. 
                   Look at the objects in here, does any of it look familiar?  


  Exercise 6.3.1 - Take a look at the appendModal function in the contact.js file. Notice how its adding text 
                   to the name field in the modal. Now do the same for the topic field and message field. Things to consider: 
                   - The IDs of the topic and message fields in the modals;
                   - The IDs of the new fields you are creating (see current implementation of name field if stuck!).


  Exercise 6.4.1 - Add a unique ID to your submit button on your contact.html page.
  Exercise 6.4.2 - Now select this button and create a click event listener, inside the 
                   function call the appendModal function but with different text. What happens?
  Exercise 6.4.3 - Back in your HTML, remove each “data-”  attribute from the submit button, 
                   then work out a different way to trigger the Bootstrap Modal. Hint: look at the documentation!
  
  Exercise 6.5.1 - In your contact.js file, create a boolean called alreadySubmitted at the top of the file, 
                   and set it to false by default. Now set this to true after the first call of appendModal.
  Exercise 6.5.2 - Inside appendModal, before the current content, create an if statement checking if alreadySubmitted is true. 
                   Inside the if statement, remove the three field elements you created inside the function. 
                   EG: nameField, topicField, messageField. Check that you no longer see duplicate fields in the modal. 
                   (If successful, you can now delete the first appendModal call that we provided at the start)

  Exercise 6.6.1 - In HTML, move the submit button back into the form and change to an input element, refer to week 4’s template 
                   if you need a reminder (You may need to add an ID to the form element at this point).
  Exercise 6.6.2 - Now change the event listener to watch for the form submission, ensure you prevent the default 
                   action on the first line inside. Before you call appendModal, capture the form values, and pass them 
                   into appendModal. Set alreadySubmitted to true after the call to the function.
                   Now check to see that it works in your browser. 
 */
