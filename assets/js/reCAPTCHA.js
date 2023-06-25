// Verify reCAPTCHA response

const recaptchaApiKey = process.env.RECAPTCHA_API_KEY;
if (recaptchaResponse.length === 0) {
  console.error('reCAPTCHA verification failed. Please complete the reCAPTCHA.');
  return; // Stop execution if reCAPTCHA is not verified
}
