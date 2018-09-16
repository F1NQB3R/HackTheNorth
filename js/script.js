//New Members

  firebase.auth().createUserWithEmailAndPassword("email", "password").catch(function(error) {
  alert(error.code);
  alert(error.message);
  });


//Existing Users

  firebase.auth().signInWithEmailAndPassword("email", "password").catch(function(error) {
  alert(error.code);
  alert(error.message);
  });


//Authentication State Oberver

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });


//log in event
function Function1() {
    document.getElementById("demo").innerHTML = "Hello World";
}
