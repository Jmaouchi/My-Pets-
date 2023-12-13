const showAlertbutton = document.querySelector('.showAlert')
const showAlertMessage = document.querySelector('.review-alert')


function showTheAlert(){
  showAlertMessage.style.display = 'block'
}

showAlertbutton.addEventListener('click', showTheAlert)