
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// button function navigate to about page
function goToAbout() {
    window.location.href = 'about.html';
}

// button function navigate to contact page
function goToContact() {
    window.location.href = 'contact.html';
}

// function used to send email using EmailJS Service and Sweetalert2 pop up message
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-name');
  const contactEmail = document.getElementById('contact-email');
  const contactSubject = document.getElementById('contact-subject');
  const contactMessage = document.getElementById('contact-message');
  const submitButton = document.getElementById('submit-button');

  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }

  function sendEmail(e) {
      e.preventDefault();
      if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "All input fields are required before sending email.",
          });
      } else if (!validateEmail(contactEmail.value)) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please validate your email format before sending email. (Example: example@example.com)",
          });
      } else {
          Swal.fire({
              title: 'Sending email...',
              text: 'Please wait while we send your email.',
              allowOutsideClick: false,
              didOpen: () => {
                  Swal.showLoading();
              }
          });
          emailjs.sendForm(
              'service_zm2xz71',
              'template_exo16bc',
              '#contact-form',
              'T-mg12gUKzKu5IMRx'
          ).then((result) => {
              Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "Email sent successfully!"
              });
              contactForm.reset();
          }, (error) => {
              Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Failed to send email. Please try again later."
              });
          });
      }
  }

  submitButton.addEventListener('click', sendEmail);
});


// function used to control the project description 
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-overlay a');
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close');
  
    items.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const project = item.closest('.item').getAttribute('data-project');
        const modal = document.getElementById(project);
        if (modal) {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
          scrollToTopBtn.style.display = "none";
        }
      });
    });
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        modals.forEach(modal => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        });
      });
    });
  
    window.addEventListener('click', (event) => {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
  
// button used to scroll back page to the top
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // Show the button when user scrolls down half the height of the viewport
    window.addEventListener("scroll", function() {
      if (window.scrollY > window.innerHeight * 0.6) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    // Scroll to the top when button is clicked
    scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('active');

            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);

            if (isExpanded) {
                accordionContent.style.maxHeight = 0;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });
});

// button function download resume
document.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.getElementById('downloadBtn');
  
  if (downloadButton) { 
    downloadButton.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = 'assets/EhZhongYu_Resume.pdf';
      link.download = 'EhZhongYu_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});