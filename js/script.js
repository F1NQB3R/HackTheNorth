(function (){
  // Initialize Firebase
  const config = {
      apiKey: "AIzaSyAYS_mXkzOluLBciiyPyJk092rc_-eCMvg",
      authDomain: "hackthenorth-16b34.firebaseapp.com",
      databaseURL: "https://hackthenorth-16b34.firebaseio.com",
      projectId: "hackthenorth-16b34",
      storageBucket: "hackthenorth-16b34.appspot.com",
      messagingSenderId: "1089172554056"
  };
  firebase.initializeApp(config);

  //Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLongin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  //Add login event
  btnLogin.addEventListener("click", e => {
    //Get email / pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, "password");
    promise.catch(e=>console.log(e.message));
  });

    btnSignUp.addEventListener("click", e=> {
    //Get email / pass
    //TODO: CHECK 4 REAL NUMBER
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, "password");
    promise.catch(e=>console.log(e.message));
  });

  btnLogout.addEventListener("click", e=>{
    firebase.auth().signOut();
  });

  //Realtime Listener
  firebase.auth().onAuthStateChanged(firebaseuser => {
    if (firebaseuser){
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    }else{
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });


}());
