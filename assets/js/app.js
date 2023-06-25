var recaptchaResponse = grecaptcha.getResponse();

// Verify reCAPTCHA response
if (recaptchaResponse.length === 0) {
  console.error('reCAPTCHA verification failed. Please complete the reCAPTCHA.');
  return; // Stop execution if reCAPTCHA is not verified
}

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_eevyrp5';
  const templateID = 'template_jfzhord';

  emailjs.sendForm(serviceID, templateID, templateParams, publicKey, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Email sent successfully!');
      // Clear out all input fields
      document.getElementById('your_email').value = "";
      document.getElementById('your_name').value = "";
      document.getElementById('message').value = "";
    })
    .catch((error) => {
      btn.value = 'Send Email';
      console.error('Error sending email:', error);
      // Add error handling or display an error message to the user
    });
});


