const reviewer = document.querySelector('.reviewer_name')
const reviewer_message = document.querySelector('.reviewer_message')
const stars_num = 5;
const reviewer_image = document.querySelector('.reviewer_image')


// First button listener
async function addReview(event) {
  event.preventDefault();
  const name = reviewer.value;
  const my_comment = reviewer_message.value;
  const image = 'images/puppy-2785074_640.jpg'; // this should be a path from a database ( have to get AWS s3 to generate images)


  if(!name || !my_comment ){
    alert('Fill up form')
  } else{
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({
        name,
        my_comment,
        stars_num,
        image
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
}


document.querySelector('.review_btn_submit').addEventListener('click', addReview);