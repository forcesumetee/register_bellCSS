function checkLogin() {
    // ดึงค่า username และ password จาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

    // ตรวจสอบว่ามีค่า username และ password ใน URL
    if (!username || !password) {
        return; // ไม่ต้องแสดง Alert ถ้าไม่มีข้อมูลใน URL
    }

    const enteredUsername = document.querySelector('input[name="username"]').value;
    const enteredPassword = document.querySelector('input[name="password"]').value;

    if (enteredUsername === username && enteredPassword === password) {
        alert('เข้าสู่ระบบสำเร็จ!');
        return true;
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        return false;
    }
}


