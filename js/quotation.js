var confirm = document.getElementsByClassName("quotConfirmation");

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    setTimeout(function(){
        confirm[0].style.display = "block";
    }, 2000);

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch('/sendQuot', { // Change this URL to your server-side endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    //   alert('Email sent successfully');
      // Optionally clear the form fields or provide other feedback to the user
    })
    .catch(error => {
    //   console.error('There was a problem with your fetch operation:', error.message);
    //   alert('Failed to send email');
    });
  });

  var done = document.getElementsByClassName("doneConfirm");
  done[0].addEventListener('click', function(){
    setTimeout(function(){
        confirm[0].style.display = "";
    }, 1000);
    location.reload();
  })