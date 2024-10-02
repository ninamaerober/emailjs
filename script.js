// Initialize EmailJS with your user ID
(function () {
  emailjs.init("thXhf5v7HsgfdkmKV");
})();

// Function to send email using EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Send the email using the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.sendForm("service_x5d0w3l", "template_6bubezp", this).then(
      function () {
        alert("Message Sent Successfully!");
      },

      function (error) {
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
