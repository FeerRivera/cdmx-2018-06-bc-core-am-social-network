window.userRegister = {

//registro nuevo
newUser: (emailSignUp, passwordSignUp) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
      .then(result => {
        const user = firebase.auth().currentUser;
        alert('Hola corredor!');
        location.href = ('views/wall.html');
      })
      .catch (e => alert(e.message))
  },

//login con usuario registrado
loginEmail: (emailLogin, passLogin) => {
    if(emailLogin != '' && passLogin != '') {
      firebase.auth().signInWithEmailAndPassword(emailLogin, passLogin)
        .then(result => {
          location.href = ('views/wall.html');
        })
        .catch (e => alert(e.message));
    } else {
      alert('Ingresa tu correo y contraseña para continuar');
    }
  },


//login con google
loginGoogle: () => {

  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(result => {
     location.href = ("../src/views/wall.html");
   })
    .catch (e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

//login con facebook
loginFacebook: () => {

if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ("../src/views/wall.html");
      })
      .catch (e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

//login con github
loginGitHub: () => {
if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then(result => {
      location.href = ("../src/views/wall.html");
    })
    .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },


const userData = firebase.auth().currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
},

//cerrar sesión
  signOut: () => {
   firebase.auth().signOut()
     .then(element => {
       location.href('../index.html');
     }).catch(error => {
       console.log('Error paracerrar sesión');
     });
 }
};
