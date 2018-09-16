var app_firebase = {};

(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAYS_mXkzOluLBciiyPyJk092rc_-eCMvg",
      authDomain: "hackthenorth-16b34.firebaseapp.com",
      databaseURL: "https://hackthenorth-16b34.firebaseio.com",
      projectId: "hackthenorth-16b34",
      storageBucket: "hackthenorth-16b34.appspot.com",
      messagingSenderId: "1089172554056"
    };
    firebase.initializeApp(config);

    app.firebase = firebase;
});
