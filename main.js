// 
let registerLink = document.querySelector('.register-link')
let rlgoinLink = document.querySelector('.login-link')
let formBoxSignUp = document.querySelector('.form-box.sign-up')
let formBoxSignIn = document.querySelector('.form-box.sign-in')
console.log(rlgoinLink)


registerLink.addEventListener('click',function(){

    formBoxSignUp.classList.add('active')
    formBoxSignIn.classList.add('active')
})

rlgoinLink.addEventListener('click',function(){
    formBoxSignUp.classList.remove('active')
    formBoxSignIn.classList.remove('active')
})