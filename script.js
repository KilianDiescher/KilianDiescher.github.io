document.addEventListener('DOMContentLoaded', (event) => {
  const aboutB = document.getElementById("About");
  const contactB = document.getElementById("Contact");
  const educationB = document.getElementById("Education");
  const t4B = document.getElementById("T4");
  const t5B = document.getElementById("T5");
  const bubble = document.querySelector('.bubble-indicator');

  const contentSections = {
    About: document.getElementById("aboutContent"),
    Contact: document.getElementById("contactContent"),
    Education: document.getElementById("educationContent"),
    T4: document.getElementById("t4Content"),
    T5: document.getElementById("t5Content")
  };

  function showContent(section) {
    Object.values(contentSections).forEach(content => content.classList.remove('active'));
    contentSections[section].classList.add('active');
  }

  function moveBubble(button) {
    const rect = button.getBoundingClientRect();
    bubble.style.width = `${rect.width + 10}px`;
    bubble.style.height = `${rect.height + 10}px`;
    bubble.style.left = `${rect.left - 5}px`;
    bubble.style.top = `${rect.top - 5}px`;
  }

  aboutB.addEventListener('click', (event) => {
    showContent('About');
    moveBubble(event.target);
  });

  contactB.addEventListener('click', (event) => {
    showContent('Contact');
    moveBubble(event.target);
  });

  educationB.addEventListener('click', (event) => {
    showContent('Education');
    moveBubble(event.target);
  });

  t4B.addEventListener('click', (event) => {
    showContent('T4');
    moveBubble(event.target);
  });

  t5B.addEventListener('click', (event) => {
    showContent('T5');
    moveBubble(event.target);
  });

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('button').forEach(btn => btn.classList.remove('clicked'));
      this.classList.add('clicked');
      moveBubble(this);
    });
  });

  moveBubble(aboutB);
  showContent('About');
});