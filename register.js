function showError(message) {
    document.getElementById('errormsg').textContent = message;
}

function validateForm() {
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const birthday = document.querySelector('input[name="bday"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const retypePassword = document.querySelector('input[name="retypepassword"]').value;

    if (
        firstName === '' ||
        lastName === '' ||
        !gender ||
        birthday === '' ||
        email === '' ||
        username === '' ||
        password === '' ||
        retypePassword === ''
    ) {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
        return false;
    }

    if (password !== retypePassword) {
        alert('รหัสผ่านไม่ตรงกัน');
        return false;
    }

    alert('สมัครเรียบร้อย');
    login(username, password); // ส่ง username และ password ไปยังฟังก์ชัน login()

    return true;
}

function login(username, password) {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);

    window.location.href = `login.html?username=${encodedUsername}&password=${encodedPassword}`;
}
