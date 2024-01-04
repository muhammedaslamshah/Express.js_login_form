const section = document.querySelector(".hide-section");
const formContainer = document.querySelector(".login-container");
const loginContainer = document.querySelector(".login");
const profile = document.querySelector("img");


profile.onclick = () => {
   requestAnimationFrame(() => {
      
      if (!loginContainer.classList.contains("hide-login") || !formContainer.classList.contains("hide-form") || !section.classList.contains("hide-section")) {
         
         loginContainer.classList.add("hide-login");
         formContainer.classList.add("hide-form");
         section.classList.add("hide-section");
         
        
         setTimeout(() => {
            loginContainer.classList.add("hide-login");
            formContainer.classList.add("hide-form");
            section.classList.add("hide-section");
         }, 1000);
      } else {
         loginContainer.classList.remove("hide-login");
         formContainer.classList.remove("hide-form");
         section.classList.remove("hide-section");
      }
   });
};
