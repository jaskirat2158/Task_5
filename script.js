// Upload Form Submission
const uploadForm = document.getElementById("uploadForm");
const uploadMessage = document.getElementById("uploadMessage");

uploadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  uploadMessage.textContent = "Your resume has been uploaded successfully!";
  uploadMessage.style.color = "green";
});

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  contactMessage.textContent = `Thank you, ${name}! We will get in touch soon.`;
  contactMessage.style.color = "blue";
});