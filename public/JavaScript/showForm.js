const contactForm = document.querySelector('.contact-form')
const contactBtn = document.querySelector('.contact_me_text')


function showForm(){
    contactForm.classList.toggle('show')
}



contactBtn.addEventListener('click', showForm)


