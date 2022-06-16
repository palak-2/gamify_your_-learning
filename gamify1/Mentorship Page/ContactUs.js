// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfnPt26pPlNE7a0DI3l6TZtzlzCaDH6Pw",
    authDomain: "contact-form-32fd7.firebaseapp.com",
    databaseURL: "https://contact-form-32fd7-default-rtdb.firebaseio.com",
    projectId: "contact-form-32fd7",
    storageBucket: "contact-form-32fd7.appspot.com",
    messagingSenderId: "358766919451",
    appId: "1:358766919451:web:4892fb105876bf1eba1dbe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference Messages Collections
var messageRef = firebase.database().ref('messages');

//Listen for Contact Form's Submit
document.getElementById( 'ContactForm' ).addEventListener( 'submit', submitForm );

function submitForm ( e ) {
    e.preventDefault();
    //Get Values

    var name = getInputVal( 'name' );
    var email = getInputVal( 'email' );
    var message = getInputVal( 'message' );
    console.log( name );
    console.log( email );
    console.log( message );
    //Save Message
    saveMessage(name , email, message);
    //Show Alert
    alert("Your Message is sent.")
}

//Function to get  form values
function getInputVal ( id ) {
    return document.getElementById( id ).value;
}

//Save Messages to firebase
function saveMessage(name,email,message)
{
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message

    });
}
