const reviewer = document.querySelector('.reviewer_name');
const reviewer_message = document.querySelector('.reviewer_message');
const reviewer_image = document.querySelector('.reviewer_image');
const stars_num = 5;

// First button listener
async function addReview(event) {
  event.preventDefault();

  const name = reviewer.value;
  const my_comment = reviewer_message.value;
  const image = reviewer_image.files[0]; // Get the selected image file


  if (!name || !my_comment || !image) {
  alert('Fill up form');
    } else {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('my_comment', my_comment);
      formData.append('image', image);
      formData.append('stars_num', stars_num)

    try {
      const response = await fetch('/api/reviews', {
      method: 'POST',
      body: formData, // Send FormData containing image file
    });

    if (response.ok) {
      document.location.replace('/client');
    } else {
      alert('Failed to add review: ' + response.statusText);
    }
    } catch (error) {
      console.error('Error adding review:', error);
      alert('Failed to add review');
    }
  }
}

document.querySelector('.review_btn_submit').addEventListener('click', addReview);