import { ref, firebaseAuth } from './constants';

/**Exported functions for handling
authentication with firebase */

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
}

export function logout () {
  return firebaseAuth().signOut()
}

/**Autenticates the user with email to firebase.
   Also firebase error messages have been redefined.*/
export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
  .catch(function(error){
    console.log(error.code)
    switch (error.code) {
      case 'auth/invalid-email':
          alert('The email entered was not recognised. Please try again.')
          break;
      case 'auth/wrong-password':
          alert('You have entered the worng password. Please try again.')
          break;
      default:
    }
  })
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
