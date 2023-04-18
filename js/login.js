const login_check = () => {
    const id = document.getElementById("member-id");
    const password = document.getElementById("member-password");
   
    if(!id_check() && !password_check()) {
        id.focus();
        return false;
   } else if (id_check() && !password_check()) {
        id.focus();
        return false;
   } else if (!id_check() && password_check()) {
        id.focus();
        return false;
   } else {
        return true;
   } 
} 

const id_check = () => {
    const id = document.getElementById("member-id").value;
    const idResult = document.getElementById("id-result");
    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d_-]{5,10}$/;
    if (id.length == 0) {
        idResult.innerHTML = "id를 입력해주세요.";
        idResult.style.color = "red";
        return false;
    } else if(!id.match(exp)) {
        idResult.innerHTML = "id를 다시 입력해주세요";
        idResult.style.color = "red";
        return false;
    } else {
        idResult.innerHTML = "";
        return true;
    }


}

const password_check = () => {
    const password = document.getElementById("member-password").value;
    const passwordResult = document.getElementById("password-result");
    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$\-_])[A-Za-z\d!#$\-_]{6,18}$/;
    if (password.length == 0) {
        passwordResult.innerHTML = "비밀번호를 입력해주세요."
        passwordResult.style.color = "red";
        return false;
    } else if (!password.match(exp)) {
        passwordResult.innerHTML = "비밀번호를 다시 입력해주세요."
        passwordResult.style.color = "red";
        return false;
    } else {
        passwordResult.innerHTML = "";
        return true;
    }
}

const goIndex = () => {
    history.back();
  }


  function toggleDarkMode() {
    const body = document.querySelector("body");
    body.classList.toggle("theme-dark");
    var icon = document.getElementById("mode-icon");
      if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
      } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
      }

    const article = document.querySelector("article");
    const currentTheme = article.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    article.setAttribute("data-theme", newTheme);
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    const currentTheme = button.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    button.setAttribute("data-theme", newTheme);
    });

  }

 
  
  



  