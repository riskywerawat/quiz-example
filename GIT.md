 HEAD คืออะไร? 

HEAD คือ ตัวชี้ปัจจุบัน ของคุณใน Git ว่ากำลังอยู่ที่ commit ไหน 

ปกติ HEAD ชี้ไปที่ branch ปัจจุบัน เช่น main 

สรุปง่าย: HEAD = ตำแหน่งปัจจุบันที่คุณอยู่ใน timeline ของ Git 

* C3 (HEAD -> main) 
* C2 
* C1 
 

ในตัวอย่างนี้ HEAD ชี้อยู่ที่ commit C3 บน branch main 

 
 

2️⃣ การเดินทางย้อนเวลาใน Git 

Git มีเครื่องหมายพิเศษให้ “ย้อนกลับไป commit ก่อนหน้า” 

a) ~ (tilde) 

ใช้เพื่อ เดินถอยหลัง N commit ตามเส้นตรงของ branch 

HEAD~1 → commit ก่อนหน้า 1 commit 

HEAD~2 → commit ก่อนหน้า 2 commit 

HEAD -> C3 
HEAD~1 -> C2 
HEAD~2 -> C1 
 

💡 จำง่าย: ~ = “parent ตามเส้นตรง” 

 
 

b) ^ (caret) 

ใช้ เลือก parent ของ commit 

โดยปกติ commit มี parent 1 ตัว (ปกติ) แต่ถ้าเป็น merge จะมี 2+ 

HEAD^ = parent ตัวแรกของ HEAD (เหมือน HEAD~1) 

HEAD^2 = parent ตัวที่สอง (ใช้กับ merge commit) 

Merge commit M 
Parents: C1, C2 
 
M^1 -> C1 
M^2 -> C2 
 

 
 

c) @ (at) 

เป็น shortcut ของ HEAD 

HEAD@{n} = สถานะของ HEAD ในอดีต n ครั้ง (จาก reflog) 

ตัวอย่าง: 

HEAD@{0} = HEAD ปัจจุบัน 

HEAD@{1} = HEAD ก่อน commit ล่าสุด 

เหมือน ย้อนเวลาแบบ timeline ของคุณเอง ไม่ใช่ commit tree 

 
 

d) {} (curly braces) 

ใช้ เข้าถึง branch หรือ tag ในอดีต 

ตัวอย่าง: 

main@{yesterday} → commit ของ main เมื่อวาน 

HEAD^{commit} → บังคับให้ Git treat เป็น commit (ใช้ในบางกรณี) 

 
 

3️⃣ ตารางสรุป 

เครื่องหมาย 

ใช้ทำอะไร 

ตัวอย่าง 

~ 

parent ตามเส้นตรง N ครั้ง 

HEAD~2 

^ 

parent ตัวที่ N ของ commit (merge ใช้ได้) 

HEAD^2 

@{} 

timeline / reflog ของ HEAD หรือ branch 

HEAD@{1}, main@{yesterday} 

{} 

ระบุชนิด commit, branch, tag 

HEAD^{commit} 

 
 

4️⃣ ภาพรวม 

C1 <- C2 <- C3 (HEAD -> main) 
        \ 
         C2b (merge) 
 

HEAD~1 → C2 

HEAD^ → C2 

HEAD^2 (ถ้า HEAD เป็น merge) → C2b 

HEAD@{1} → commit ก่อนหน้านี้ใน reflog 

main@{yesterday} → commit ของ main เมื่อวาน 

 
 

ถ้าต้องการ ฉันสามารถทำ แผนภาพ timeline แบบ visual ให้เห็นชัด ๆ ว่า ~, ^, @, {} เดินทางไปยัง commit ไหน จะได้เข้าใจง่ายสุด ๆ 🎨 

คุณอยากให้ฉันวาดให้ไหม? 

You said: 

พร้่อมยกตัวอย่างวิธีการใช้ทั้งหมด 

ChatGPT said: 

เยี่ยม! เรามาทำ ตารางสรุปพร้อมตัวอย่างคำสั่ง Git จริง ให้ครบทุกเครื่องหมาย (HEAD, ~, ^, @{}, {}) พร้อมคำอธิบายง่าย ๆ 🎯 

 
 

1️⃣ HEAD 

HEAD = ตำแหน่งปัจจุบันของคุณ 

ตัวอย่างเช่น: 

git log --oneline --graph --decorate 
 

* f3c2d1c (HEAD -> main) Fix bug 
* a1b2c3d Add feature 
* 9d8e7f6 Initial commit 
 

HEAD ชี้ที่ commit f3c2d1c บน branch main 

 
 

2️⃣ ~ (tilde) 

ย้อน parent ตามเส้นตรง N commit 

git show HEAD~1   # แสดง commit ก่อนหน้า 1 commit 
git show HEAD~2   # แสดง commit ก่อนหน้า 2 commit 
git diff HEAD~1 HEAD   # เปรียบเทียบกับ commit ก่อนหน้า 
 

ภาพ: 

HEAD -> C3 
HEAD~1 -> C2 
HEAD~2 -> C1 
 

 
 

3️⃣ ^ (caret) 

เลือก parent ของ commit 

Merge commit มีหลาย parent 

git show HEAD^      # parent ตัวแรก (เหมือน HEAD~1) 
git show HEAD^2     # parent ตัวที่สอง (สำหรับ merge commit) 
 

ตัวอย่าง merge: 

*   M (HEAD -> main) 
|\ 
| * C2b 
* | C2a 
|/ 
* C1 
 

M^1 → C2a 

M^2 → C2b 

 
 

4️⃣ @{ } (reflog / timeline) 

ย้อน HEAD หรือ branch ตาม history ของ Git 

git reflog 
# 0 f3c2d1c HEAD@{0}: commit: Fix bug 
# 1 a1b2c3d HEAD@{1}: commit: Add feature 
 
git show HEAD@{1}   # แสดง commit ก่อน commit ล่าสุด 
git reset --hard HEAD@{2}  # ย้อน HEAD กลับ 2 step 
 

นอกจากนี้กับ branch: 

git show main@{yesterday}   # commit ของ main เมื่อวาน 
 

 
 

5️⃣ { } (curly braces) 

ระบุชนิด commit หรือ tag 

ตัวอย่าง: 

git show HEAD^{commit}   # บังคับ treat HEAD เป็น commit 
git show v1.0^{tag}     # ดู commit ที่ tag v1.0 ชี้ 
 

รวมกับ caret: 

git show HEAD^{tree}    # แสดง tree ของ commit ปัจจุบัน 
 

 
 

6️⃣ ตัวอย่างใช้งานรวมจริง 

# แสดง commit ปัจจุบัน 
git show HEAD 
 
# แสดง commit ก่อนหน้า 2 commit 
git show HEAD~2 
 
# แสดง parent ตัวที่สอง (merge) 
git show HEAD^2 
 
# แสดง commit ก่อนหน้าตาม reflog 
git show HEAD@{1} 
 
# ย้อน HEAD กลับไป commit ก่อนหน้า 1 commit และ reset 
git reset --hard HEAD~1 
 
# ดู commit ของ main เมื่อวาน 
git show main@{yesterday} 
 
# แสดง commit ที่ tag v1.0 ชี้ 
git show v1.0^{commit} 

 