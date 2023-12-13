const showAlertbutton = document.querySelector('.showAlert')
const showAlertMessage = document.querySelector('.review-alert')
const showReviewForm = document.querySelector('.review-submit');
const continueReview = document.querySelector('.ok');



showTheAlert= () => {
  showAlertMessage.style.display = 'block'
}


showReviwFormForClient = () => {
  showAlertMessage.style.display = 'none'
  showReviewForm.style.display = 'block'
}


showAlertbutton.addEventListener('click', showTheAlert);
continueReview.addEventListener('click', showReviwFormForClient)