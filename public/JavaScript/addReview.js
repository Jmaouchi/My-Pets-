const reviewer = document.querySelector('.reviewer_name')
const reviewer_message = document.querySelector('.reviewer_message')
const stars_num = 5;

// First button listener
async function addReview(event) {
  event.preventDefault();
  const name = reviewer.value;
  const my_comment = reviewer.value;
  console.log('is ' + name);
  console.log(my_comment);

  const response = await fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify({
      name,
      my_comment,
      stars_num
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/client');
  } else {
    alert(response.statusText);
  }
}


document.querySelector('.review_btn_submit').addEventListener('click', addReview);