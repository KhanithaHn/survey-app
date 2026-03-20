# survey-app

เว็บทำแบบสอบถาม + ส่งแจ้งเตือนเข้า LINE (LINE Notify)

## 1) เตรียม Firebase (ครั้งเดียว)
- สร้าง Firebase Project
- เปิดใช้ **Authentication** (Email/Password) และ **Firestore**
- ตั้ง **Firestore Rules** (ตัวอย่าง):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /questions/{id} {
      allow read: if true;
      allow create, update, delete: if request.auth != null
        && request.auth.token.email == "YOUR_OWNER_EMAIL@example.com";
    }
    match /responses/{id} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

- ใส่ค่า config ใน `assets/firebase.js`

## 2) LINE Notify Token
- ไปที่ https://notify-bot.line.me/my → Generate token → คัดลอกเก็บไว้

## 3) ดีพลอย Cloud Function (HTTP)
```bash
npm i -g firebase-tools
firebase login
firebase init functions
# วางโค้ดในโฟลเดอร์ functions/ ตาม repo นี้

# คัดลอก functions/.env.sample → functions/.env และใส่ LINE_NOTIFY_TOKEN
firebase deploy --only functions:notifyLine
```
หลังดีพลอยจะได้ URL คล้าย:
```
https://asia-southeast1-<PROJECT_ID>.cloudfunctions.net/notifyLine
```

## 4) เชื่อมกับหน้าเว็บ
- เปิด `survey.html` แล้วแก้ URL ฟังก์ชันให้ตรงกับของคุณ

## 5) อัปขึ้น GitHub Pages
- ตั้งให้เสิร์ฟจาก branch `main` และโฟลเดอร์ root (หรือ `/docs` ตามที่ใช้)
- เปิดที่ `https://<USERNAME>.github.io/survey-app/`

## 6) ทดสอบ
- ทำแบบสอบถาม → กดส่ง → ข้อความควรเด้งเข้า LINE ภายในไม่กี่วินาที

## หมายเหตุ
- อย่าใส่ LINE token ใน JS ฝั่งเว็บ ให้ซ่อนไว้ในฟังก์ชันเท่านั้น
- ระหว่างทดสอบ CORS สามารถตั้ง `cors: true` ในฟังก์ชันแล้วค่อยกลับมา whitelist โดเมนจริง
```
