# 🚀 คำแนะนำการ Deploy ไปยัง GitHub Pages

## ขั้นตอนที่ 1: เตรียม Repository

### 1.1 สร้าง Repository บน GitHub

1. ไปที่ [GitHub](https://github.com)
2. คลิก **New Repository** หรือ **+** > **New repository**
3. ตั้งชื่อ repository เป็น `quiz-example` (หรือชื่ออื่นตามต้องการ)
4. เลือก **Public** (สำหรับ GitHub Pages)
5. **ไม่ต้อง** เลือก "Initialize this repository with a README"
6. คลิก **Create repository**

### 1.2 เชื่อมต่อ Local Project กับ GitHub

เปิด Terminal และรันคำสั่งต่อไปนี้:

```bash
# ไปยังโฟลเดอร์โปรเจกต์
cd /Users/weerawat.tat/Documents/git_repo/quiz-example

# Initialize Git (ถ้ายังไม่ได้ทำ)
git init

# เพิ่มไฟล์ทั้งหมดเข้า staging
git add .

# Commit การเปลี่ยนแปลง
git commit -m "Initial commit: Quiz Master Application"

# เชื่อมต่อกับ GitHub repository (แทน YOUR_USERNAME ด้วย username ของคุณ)
git remote add origin https://github.com/YOUR_USERNAME/quiz-example.git

# Push ไปยัง GitHub
git branch -M main
git push -u origin main
```

## ขั้นตอนที่ 2: เปิดใช้งาน GitHub Pages

### 2.1 เข้าไปที่ Settings

1. ไปที่ repository ของคุณบน GitHub
2. คลิกแท็บ **Settings**
3. ในเมนูด้านซ้าย คลิก **Pages**

### 2.2 ตั้งค่า Source

1. ในส่วน **Build and deployment**
2. ภายใต้ **Source** ให้เลือก **GitHub Actions**
3. ระบบจะแสดงข้อความว่า "GitHub Actions workflows can be used to deploy from any branch"

![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/select-github-actions-source.webp)

## ขั้นตอนที่ 3: Deploy อัตโนมัติ

### 3.1 GitHub Actions จะทำงานอัตโนมัติ

เมื่อคุณ push โค้ดไปยัง branch `main` ระบบจะ:

1. ตรวจจับการ push ใหม่
2. เริ่มต้น GitHub Actions workflow
3. Build และ Deploy ไปยัง GitHub Pages
4. แจ้งเตือนเมื่อเสร็จสิ้น

### 3.2 ตรวจสอบสถานะการ Deploy

1. ไปที่แท็บ **Actions** ใน repository
2. คุณจะเห็น workflow ชื่อ "Deploy to GitHub Pages"
3. คลิกเพื่อดูรายละเอียดและสถานะ
4. รอจนกว่าจะแสดง ✅ (สำเร็จ)

### 3.3 เข้าถึงเว็บไซต์ของคุณ

หลังจาก deploy สำเร็จ คุณสามารถเข้าถึงเว็บไซต์ได้ที่:

```
https://YOUR_USERNAME.github.io/quiz-example/
```

หรือไปที่ **Settings** > **Pages** จะมี URL แสดงอยู่

## ขั้นตอนที่ 4: อัปเดตเว็บไซต์

### 4.1 แก้ไขโค้ด

แก้ไขไฟล์ใดๆ ในโปรเจกต์ เช่น:

- `index.html` - แก้ไขโครงสร้างหน้าเว็บ
- `styles.css` - แก้ไขการออกแบบ
- `app.js` - แก้ไข logic
- `example.json` - แก้ไขคำถาม

### 4.2 Push การเปลี่ยนแปลง

```bash
# ตรวจสอบไฟล์ที่เปลี่ยนแปลง
git status

# เพิ่มไฟล์ที่เปลี่ยนแปลง
git add .

# Commit พร้อมข้อความ
git commit -m "Update quiz questions"

# Push ไปยัง GitHub
git push origin main
```

ระบบจะ deploy อัตโนมัติอีกครั้ง และเว็บไซต์จะอัปเดตภายใน 1-2 นาที

## 🎯 Tips & Troubleshooting

### ❓ ถ้า deploy ไม่สำเร็จ

1. ตรวจสอบ **Actions** tab ว่ามี error อะไร
2. ตรวจสอบว่า repository เป็น **Public**
3. ตรวจสอบว่าเลือก Source เป็น **GitHub Actions** แล้ว
4. ลองรัน workflow ใหม่โดยไปที่ Actions > เลือก workflow > **Re-run jobs**

### 💡 ทดสอบก่อน deploy

```bash
# รัน local server
python3 -m http.server 8000

# เปิด browser ที่
http://localhost:8000
```

### 🔄 Deploy ด้วยตัวเอง (Manual)

หากต้องการ deploy โดยไม่ต้อง push code:

1. ไปที่แท็บ **Actions**
2. เลือก workflow "Deploy to GitHub Pages"
3. คลิก **Run workflow**
4. เลือก branch `main`
5. คลิก **Run workflow**

### 📱 ทดสอบบน Mobile

1. เปิดเว็บไซต์บนมือถือ: `https://YOUR_USERNAME.github.io/quiz-example/`
2. ทดสอบการทำงานของ quiz
3. ตรวจสอบว่า responsive design ทำงานดี

### 🎨 Custom Domain (ถ้าต้องการ)

1. ไปที่ **Settings** > **Pages**
2. ในส่วน **Custom domain** ใส่ domain ของคุณ
3. เพิ่ม CNAME record ใน DNS provider
4. รอให้ DNS propagate (ประมาณ 24 ชั่วโมง)

## 📊 ตรวจสอบสถิติการเข้าถึง

GitHub Pages ไม่มี analytics ในตัว แต่คุณสามารถ:

1. เพิ่ม Google Analytics
2. เพิ่ม Plausible Analytics
3. ดูจำนวน visitors ใน repository insights

## 🚨 Important Notes

- ⚠️ Repository ต้องเป็น **Public** สำหรับ GitHub Pages (ฟรี)
- ⚠️ GitHub Pages มีขนาดจำกัดที่ 1GB
- ⚠️ แต่ละไฟล์ไม่ควรเกิน 100MB
- ⚠️ Bandwidth จำกัดที่ 100GB/เดือน (แต่ปกติไม่เกิน)

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

**Happy Deploying! 🎉**

ถ้ามีคำถามหรือปัญหา สามารถเปิด Issue ใน GitHub repository ได้เลยครับ!
