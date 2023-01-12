//////////////////Scroll Navbar///////////////
const navE1 = document.querySelector('.navbar-expand-lg');
window.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        navE1.classList.add('navbar-scrolled');
    }
    else if (window.scrollY < 50){
        navE1.classList.remove('navbar-scrolled');
    }
});

////////////////////Filteration///////////////////
const switcherlis = document.querySelectorAll('.switcher li');
const imgs = Array.from(document.images);

switcherlis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
function removeActive() {
    switcherlis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) =>{
        el.style.display ="block";
    })
}
///////////////////////validation form/////////////////////////////////////////
const form = document.querySelector("#form");
const nameField = document.querySelector(".name-field");
const nameInput = document.querySelector("#name");
const emailField = document.querySelector(".email-field");
const emailInput = document.querySelector("#email");
const subjectField = document.querySelector(".subject-field");
const subjectInput = document.querySelector("#subject");
const messageField = document.querySelector(".message-field");
const messageInput = document.querySelector("#message");
//email
const emailPattarn = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function checkEmail(){
        if (!emailInput.value.match(emailPattarn)){
            return emailField.classList.add("invalid");
        }
        emailField.classList.remove("invalid");
    }
    
//name
function entName(){
    if (nameInput.value === '' || nameInput.value == null ){
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}
//subject
function entSubject(){
    if(subjectInput.value.length <= 12){
        return subjectField.classList.add("invalid");
    }
    subjectField.classList.remove("invalid");
}
//message
function entMessage(){
    if(messageInput.value.length <=24){
        return messageField.classList.add("invalid");
    }
    messageField.classList.remove("invalid");
}
//function
form.addEventListener('submit', e =>  {
    e.preventDefault();
    checkEmail();
    entName();
    entSubject();
    entMessage();
    
    emailInput.addEventListener("keyup", checkEmail);
    nameInput.addEventListener("keyup",entName);
    subjectInput.addEventListener("keyup", entSubject);
    messageInput.addEventListener("keyup",entMessage);
    if(
        !emailField.classList.contains("invalid")&&
        !nameField.classList.contains("invalid")&&
        !subjectField.classList.contains("invalid")&&
        !messageField.classList.contains("invalid")
    ){
        location.href = form.getAttribute("action");
    }
    
});
/////////////////////////swiper js///////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop : true,
    navigation : false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay:1200,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
			spaceBetween: 20
        },
		520: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	},
});