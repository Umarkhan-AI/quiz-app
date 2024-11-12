// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLfbqoHtVB8tVW_G05sMqC5ncwtoOBW8E",
  authDomain: "quiz-app-d3426.firebaseapp.com",
  databaseURL: "https://quiz-app-d3426-default-rtdb.firebaseio.com", 
  projectId: "quiz-app-d3426",
  storageBucket: "quiz-app-d3426.firebasestorage.app",
  messagingSenderId: "382816158254",
  appId: "1:382816158254:web:ecc3b548630f7367dc95bf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function signup(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;

  // Firebase Authentication for User Signup
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // Only save data if signup is successful
      var user = {
          name: name,
          email: email,
          password: password
      };
      // Save user data to Firebase Realtime Database
      firebase.database().ref("users").push(user)
      .then(() => {
          console.log("User data saved to database.");
          window.location.href = "quiz.html";  // Redirect on successful signup and data save
      })
      .catch((error) => {
          console.log("Error saving data to database: ", error.message);
      });
  })
  .catch((error) => {
      // Handle signup error here
      var errorMessage = error.message;
      alert("Signup Error: " + errorMessage);
  });
}





function login(){
    var loginemail =document.getElementById("login-email")
    var loginpassword =document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpassword.value)
    .then((userCredential) => {
      // Signed in
    //   var user = userCredential.user;
      console.log("Login Sccessflly");
    console.log(userCredential);
    window.location.href="quiz.html"
      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      
    });

    
}
 