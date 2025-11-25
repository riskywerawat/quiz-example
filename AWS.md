1) Compute — งานประมวลผล 

EC2 (Elastic Compute Cloud) 
เหมือนเช่าเซิร์ฟเวอร์บนคลาวด์ ปรับขนาด CPU/RAM ได้ตามต้องการ 

Lambda 
รันโค้ดแบบไม่ต้องดูแลเซิร์ฟเวอร์ จ่ายตามจำนวนครั้งที่ถูกเรียก (“serverless”) 

ECS / EKS 
สำหรับคนใช้ Docker—ECS จัดการ container เอง, EKS คือ Kubernetes ที่ AWS ดูแลให้ 

 
 

2) Storage — เก็บข้อมูล 

S3 (Simple Storage Service) 
ที่เก็บไฟล์ที่ทนทานมาก ราคาถูก ใช้ได้ทั้งรูป, log, backup, hosting static website 

EBS (Elastic Block Store) 
ดิสก์ที่ผูกกับ EC2 — เหมือน SSD/HDD สำหรับเครื่อง EC2 

EFS (Elastic File System) 
โฟลเดอร์แบบแชร์ได้หลายเครื่องพร้อมกัน 

 
 

3) Database 

RDS 
ฐานข้อมูลมีผู้ดูแลให้ เช่น MySQL, PostgreSQL, MariaDB, SQL Server 

DynamoDB 
NoSQL เร็วมาก ขยายได้ง่าย ไม่ต้องดูแล server 

Aurora 
Database ของ AWS เองที่เร็วกว่า MySQL/Postgres มาตรฐาน 

 
 

4) Networking 

VPC (Virtual Private Cloud) 
พื้นที่เครือข่ายส่วนตัวของคุณใน AWS 
(subnet, route table, security group—all networking basics) 

Route 53 
จัดการโดเมนและ DNS 

API Gateway 
ทำ API แบบ serverless และเชื่อมกับ Lambda ได้ดีมาก 

 
 

5) Security & Identity 

IAM (Identity and Access Management ) 
จัดการผู้ใช้, สิทธิ์ (policies), roles—เป็นรากฐานความปลอดภัยของทั้งหมด 

KMS (Key Management Service) 
บริการเข้ารหัสคีย์ลับ 

 
 

6) Monitoring 

CloudWatch 
ดู log, metric, alert ของระบบ 

CloudTrail 
ตรวจประวัติว่ามีใครทำอะไรในบัญชี AWS 