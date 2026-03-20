<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

//<script>
  // TODO: ใส่ค่าจาก Firebase Console ของโปรเจ็กต์คุณ
  //const firebaseConfig = {
   // apiKey: "YOUR_KEY",
   // authDomain: "YOUR_PROJECT.firebaseapp.com",
    //projectId: "YOUR_PROJECT",
   // storageBucket: "YOUR_PROJECT.appspot.com",
   // messagingSenderId: "YOUR_SENDER_ID",
   // appId: "YOUR_APP_ID"
  //};
 // firebase.initializeApp(firebaseConfig);
 // window.db = firebase.firestore();
 // window.auth = firebase.auth();
//</script>

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCCiWI6isg8VwVE9cNJKVByF_dffwsua8A",
    authDomain: "survey-app-70556.firebaseapp.com",
    projectId: "survey-app-70556",
    storageBucket: "survey-app-70556.firebasestorage.app",
    messagingSenderId: "206150943819",
    appId: "1:206150943819:web:337a837e190aaa8d17f9ce",
    measurementId: "G-FGH68B811W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
