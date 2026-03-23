  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCuRHLzyXZJgL1xfQMIeyMlYc5YX0p5bmM",
    authDomain: "neww-16bc7.firebaseapp.com",
    projectId: "neww-16bc7",
    storageBucket: "neww-16bc7.firebasestorage.app",
    messagingSenderId: "305448357382",
    appId: "1:305448357382:web:69fb9d1509ecd658bebd87",
    measurementId: "G-1Z03TEMF9Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
