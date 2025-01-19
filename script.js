document.addEventListener('DOMContentLoaded', (event) => {
  const aboutB = document.getElementById("About");
  const contactB = document.getElementById("Contact");
  const educationB = document.getElementById("Education");
  
  const bubble = document.querySelector('.bubble-indicator');

  const contentSections = {
    About: document.getElementById("aboutContent"),
    Contact: document.getElementById("contactContent"),
    Projects: document.getElementById("educationContent"),
  };

  function showContent(section) {
    Object.values(contentSections).forEach(content => content.classList.remove('active'));
    contentSections[section].classList.add('active');
  }

  function moveBubble(button) {
    const rect = button.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    bubble.style.width = `${rect.width + 10}px`;
    bubble.style.height = `${rect.height + 10}px`;
    bubble.style.left = `${rect.left - bodyRect.left - 5}px`;
    bubble.style.top = `${rect.top - bodyRect.top - 5}px`;
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
    showContent('Projects');
    moveBubble(event.target);
  });

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('button').forEach(btn => btn.classList.remove('clicked'));
      this.classList.add('clicked');
      moveBubble(this);
    });
  });

  // Move the bubble to the "About" button initially and show the About content
  requestAnimationFrame(() => {
    moveBubble(aboutB);
    showContent('About');
    loadTextFile('About.txt', 'aboutText');
  });
});