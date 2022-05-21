var firebaseConfig = {
    apiKey: "AIzaSyBy80aQYZDAirjCkkv91nOodcg3GdTC6e4",
    authDomain: "colleges-85ee4.firebaseapp.com",
    databaseURL: "https://colleges-85ee4-default-rtdb.firebaseio.com",
    projectId: "colleges-85ee4",
    storageBucket: "colleges-85ee4.appspot.com",
    messagingSenderId: "165268633161",
    appId: "1:165268633161:web:6ee7de7d5ca3dd19cbb198"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  
user_name=localStorage.getItem("user_name");


function stanford() {
    window.location.href="https://www.stanford.edu/";
}

function oxford() {
    window.location.href="https://www.ox.ac.uk/";
}

function mit() {
    window.location.href="https://web.mit.edu/";
}