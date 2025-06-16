document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
  const loginForm = document.getElementById("loginForm");
  console.log("loginForm:", loginForm);
  if (!loginForm) return;
  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Form submitted");
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log({ email, password });
    if (email === "langla779@gmail.com" && password === "123456") {
      alert("Đăng nhập thành công!");
      console.log("Redirecting to index");
      window.location.href = "../index.html";
    } else {
      alert("Email hoặc mật khẩu không chính xác!");
    }
  });
});


  // Xử lý đăng ký
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const termsCheck = document.getElementById("termsCheck").checked;

      if (!termsCheck) {
        alert("Bạn phải đồng ý với điều khoản dịch vụ!");
        return;
      }

      if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
      }

      alert("Đăng ký thành công! Chuyển hướng đến trang đăng nhập.");
      window.location.href = "login.html";
    });
  }
});
