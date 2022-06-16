// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {apiKey: "AIzaSyDsE2IVrCIUB6vBmyKHpQeh0gzAk8ufXJ4",
  authDomain: "intraform-2156e.firebaseapp.com",
  databaseURL: "https://intraform-2156e-default-rtdb.firebaseio.com",
  projectId: "intraform-2156e",
  storageBucket: "intraform-2156e.appspot.com",
  messagingSenderId: "71043514938",
  appId: "1:71043514938:web:47906ace77459267916b03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Succesful");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Login Succesful");
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })