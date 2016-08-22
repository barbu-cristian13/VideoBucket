import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyBEEt1djHPOVLNy0cEu9UcFRkDTwZCjolc",
      authDomain: "videobucket-77b9b.firebaseapp.com",
      databaseURL: "https://videobucket-77b9b.firebaseio.com",
      storageBucket: "videobucket-77b9b.appspot.com",
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
