// assets/firebase.js  (ไฟล์ JS ล้วน ๆ - ไม่มีแท็ก <script> ด้านใน)

// TODO: ใส่ค่าจาก Firebase Console ของโปรเจกต์คุณ
const firebaseConfig = {
  apiKey: "AIzaSyCCiWI6isg8VwVE9cNJKVByF_dffwsua8A",
  authDomain: "survey-app-70556.firebaseapp.com",
  projectId: "survey-app-70556",
  // ค่าที่ถูกต้องทั่วไปของ Storage จะเป็น <PROJECT_ID>.appspot.com
  storageBucket: "survey-app-70556.appspot.com",
  messagingSenderId: "206150943819",
  appId: "1:206150943819:web:337a837e190aaa8d17f9ce",
  measurementId: "G-FGH68B811W"
};

// ✅ Initialize ด้วย Compat เพียงครั้งเดียว
firebase.initializeApp(firebaseConfig);

// ✅ ประกาศตัวแปร global ให้ทุกหน้าเรียกใช้ได้
window.auth = firebase.auth();
window.db   = firebase.firestore();
