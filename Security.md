🔐 ช่องโหว่ที่พบบ่อยใน Web Application 

1. Injection (เช่น SQL Injection, Command Injection) 
เกิดจากการที่ระบบรับอินพุตจากผู้ใช้โดยไม่ตรวจสอบและส่งต่อไปยังคำสั่งต่าง ๆ เช่น SQL ทำให้ผู้โจมตีแทรกคำสั่งอันตรายได้ 

2. Cross-Site Scripting (XSS) 
ระบบแสดงผล input กลับไปที่หน้าเว็บโดยไม่ sanitize ทำให้ผู้โจมตีฝังสคริปต์แล้วรันใน browser ของเหยื่อได้ 

3. Broken Authentication / Session Management 
ระบบล็อกอินหรือจัดการ session ไม่ดี เช่น session ไม่หมดอายุ, token เดาง่าย, ไม่มีการใช้ HTTPS 

4. Access Control Broken / Authorization Issues 
ผู้ใช้เข้าถึงข้อมูลหรือฟังก์ชันที่ไม่ควรเข้าถึง (เช่น IDOR – ใส่เลขไอดีคนอื่นแล้วเข้าถึงข้อมูลได้) 

5. Security Misconfiguration 
ตั้งค่าระบบผิด เช่น เปิด debug mode, ลืมปิด port, permission มากเกินไป, error messages เผยข้อมูลสำคัญ 

6. Sensitive Data Exposure 
ข้อมูลสำคัญถูกเก็บหรือส่งแบบไม่เข้ารหัส เช่น ส่งรหัสผ่าน plaintext หรือไม่ใช้ HTTPS 

7. Cross-Site Request Forgery (CSRF) 
ผู้โจมตีหลอกเหยื่อให้กดลิงก์หรือทำ action โดยที่เหยื่อไม่รู้ตัว และระบบไม่มีการตรวจสอบ token 

8. Using Components with Known Vulnerabilities 
ใช้ library, framework, plugin รุ่นเก่า มีช่องโหว่สะสมอยู่ 

9. Insecure Deserialization 
แปลงข้อมูล object ที่ส่งมาจาก client โดยไม่มีการตรวจสอบ ทำให้รันโค้ดอันตรายได้ 

10. Insufficient Logging & Monitoring 
ไม่มีระบบตรวจจับหรือบันทึกพฤติกรรมผิดปกติ ทำให้การโจมตีดำเนินต่อได้นาน 