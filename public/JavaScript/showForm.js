const contactForm = document.querySelector('.contact-form')
const contactBtn = document.querySelector('.contact_me')

function showForm(){
    contactForm.classList.toggle('show')
}

contactBtn.addEventListener('click', showForm)



