# 🎯 Quiz Master - แอปพลิเคชันทดสอบความรู้ออนไลน์

แอปพลิเคชันทดสอบความรู้ด้านการพัฒนาซอฟต์แวร์ สวยงาม ทันสมัย และใช้งานง่ายบนมือถือ

[![Deploy to GitHub Pages](https://github.com/riskywerawat/quiz-example/actions/workflows/deploy.yml/badge.svg)](https://github.com/riskywerawat/quiz-example/actions/workflows/deploy.yml)

## ✨ Features (คุณสมบัติ)

- 🎨 **Modern UI/UX** - ออกแบบด้วย Glassmorphism และ Gradient สวยงาม
- 📱 **Responsive Design** - รองรับการใช้งานบนมือถือ แท็บเล็ต และคอมพิวเตอร์
- 🔀 **Random Questions** - สุ่มลำดับคำถามทุกครั้งที่เริ่มทำข้อสอบ
- ⏱️ **Progress Tracking** - แสดงความคืบหน้าแบบเรียลไทม์
- 📊 **Detailed Results** - แสดงผลคะแนนพร้อมสถิติที่ละเอียด
- 🔍 **Answer Review** - ตรวจสอบเฉลยและคำตอบที่ผิดพลาด
- ⚡ **Fast & Lightweight** - ไม่ต้องใช้ framework เพิ่มเติม
- 🎭 **Smooth Animations** - เอฟเฟกต์เคลื่อนไหวที่ลื่นไหล
- 🌐 **Works Offline** - ทำงานได้แม้ไม่มีอินเทอร์เน็ต (หลังโหลดครั้งแรก)

## 📚 Topics (หัวข้อ)

แบบทดสอบครอบคลุมหัวข้อต่างๆ ดังนี้:

- **Git** - Version Control System
- **DDD** - Domain-Driven Design
- **OOAD** - Object-Oriented Analysis and Design
- **OOP** - Object-Oriented Programming
- **SOLID** - SOLID Principles
- **CI/CD** - Continuous Integration/Deployment
- **Architecture** - Software Architecture
- **Microservices** - Microservices Architecture

## 🚀 Quick Start (เริ่มต้นใช้งาน)

### วิธีที่ 1: เปิดไฟล์โดยตรง

1. Clone repository นี้

   ```bash
   git clone https://github.com/riskywerawat/quiz-example.git
   cd quiz-example
   ```

2. เปิดไฟล์ `index.html` ในเบราว์เซอร์
   ```bash
   open index.html
   ```

### วิธีที่ 2: ใช้ Local Server

```bash
# ใช้ Python
python -m http.server 8000

# หรือใช้ Node.js (npx)
npx serve

# หรือใช้ PHP
php -S localhost:8000
```

จากนั้นเปิด `http://localhost:8000` ในเบราว์เซอร์

## 📁 Project Structure (โครงสร้างโปรเจกต์)

```
quiz-example/
├── index.html              # หน้าหลักของแอปพลิเคชัน
├── styles.css              # ไฟล์ CSS สำหรับการออกแบบ
├── app.js                  # Logic หลักของแอปพลิเคชัน
├── example.json            # ข้อมูลคำถามและคำตอบ
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── README.md               # เอกสารนี้
└── REQUIMENT.md           # ข้อกำหนดของโปรเจกต์
```

## 🌐 Deploy to GitHub Pages

### ขั้นตอนการ Deploy

1. **Push โค้ดขึ้น GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **เปิดใช้งาน GitHub Pages**

   - ไปที่ Settings > Pages
   - ในส่วน "Build and deployment"
   - เลือก Source: **GitHub Actions**

3. **รอให้ GitHub Actions deploy**
   - ไปที่แท็บ "Actions" ใน repository
   - จะเห็น workflow กำลัง deploy
   - เมื่อเสร็จแล้วจะได้ URL แบบ: `https://<username>.github.io/quiz-example/`

### Auto Deploy

ทุกครั้งที่ push ไปยัง branch `main` หรือ `master` ระบบจะ deploy อัตโนมัติผ่าน GitHub Actions

## 🎨 Screenshots (ภาพตัวอย่าง)

### หน้าหลัก (Welcome Screen)

- แสดงจำนวนคำถามทั้งหมด
- หัวข้อที่จะทดสอบ
- ปุ่มเริ่มทำแบบทดสอบ

### หน้าทำแบบทดสอบ (Quiz Screen)

- แสดง Progress Bar
- คำถามและตัวเลือกคำตอบ
- ปุ่มย้อนกลับและถัดไป

### หน้าผลคะแนน (Result Screen)

- แสดงคะแนนที่ได้
- สถิติการทำข้อสอบ
- ปุ่มดูเฉลยและทำใหม่

### หน้าเฉลย (Review Screen)

- แสดงคำถามทั้งหมด
- คำตอบของคุณ vs คำตอบที่ถูกต้อง
- แบ่งเป็นข้อที่ถูกและผิด

## 📝 Customization (การปรับแต่ง)

### แก้ไขคำถาม

แก้ไขไฟล์ `example.json`:

```json
[
  {
    "question": "คำถามของคุณ?",
    "options": [
      "ตัวเลือกที่ 1",
      "ตัวเลือกที่ 2",
      "ตัวเลือกที่ 3",
      "ตัวเลือกที่ 4"
    ],
    "answer": "คำตอบที่ถูกต้อง"
  }
]
```

### แก้ไขสีและธีม

แก้ไขไฟล์ `styles.css` ในส่วน CSS Variables:

```css
:root {
  --primary-hue: 250; /* เปลี่ยนสีหลัก */
  --accent-hue: 320; /* เปลี่ยนสีเสริม */
  /* ... */
}
```

## 🛠️ Technologies Used (เทคโนโลยีที่ใช้)

- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - การออกแบบและ animations
- **JavaScript (Vanilla)** - Logic และการทำงาน
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Web hosting

## 📄 License

MIT License - Feel free to use this project for your own purposes

## 👨‍💻 Author

Created with ❤️ by Weerawat

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Enjoy the quiz! 🎉**
