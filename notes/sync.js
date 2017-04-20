     // Initialize Firebase
      /*var config = {
        apiKey: "AIzaSyCkyrIrVktUomIn2HDn7sRw7woLcITePuc",
        authDomain: "one-card-6eb00.firebaseapp.com",
        databaseURL: "https://one-card-6eb00.firebaseio.com",
        projectId: "one-card-6eb00",
        storageBucket: "one-card-6eb00.appspot.com",
        messagingSenderId: "601405421027"
      };
      firebase.initializeApp(config);
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var notesRef = storageRef.child("notes");*/
      
      // Handle Google Signin
      function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }
      function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log("signed out");
        });
      }
