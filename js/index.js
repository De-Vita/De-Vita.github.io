const fun1 = () => {
    alert("호출성공!");
  };

  const gologin = () => {
    location.href = "login.html";
  };
  const gosave = () => {
    location.href = "save.html"
  }

  window.recaptchaCallback = () => {
    const saveButton = document.getElementById("save-button");
    const loginButton = document.getElementById("login-button");
    const fun1Button = document.getElementById("fun1-button");

    saveButton.removeAttribute("disabled");
    loginButton.removeAttribute("disabled");
    fun1Button.removeAttribute("disabled");

    saveButton.disabled = false;
    loginButton.disabled = false;
    fun1Button.disabled = false;
  };

  function toggleDarkMode() {
    const html = document.querySelector("html");
    html.classList.toggle("theme-dark");

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    const currentTheme = button.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    button.setAttribute("data-theme", newTheme);
    });

    const article = document.querySelector("article");
    const currentTheme = article.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    article.setAttribute("data-theme", newTheme);

    const recaptcha = document.querySelector(".g-recaptcha");
    recaptcha.style.filter = html.classList.contains("theme-dark") ? "invert(100%)" : "none";

  
    var icon = document.getElementById("mode-icon");
      if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
      } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
      }


  }  

  function randomImage() {
    var images = [
      "./images/rabbit.jpg",
      "./images/람쥐썬더.jpg",
      "./images/물람쥐.jpg",
    ];
    var index = Math.floor(Math.random() * images.length);
    var image = document.getElementById("myImage");
    image.src = images[index];
  }

  setInterval(randomImage, 3000);


