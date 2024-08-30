window.onload = function () {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

document.querySelectorAll('a[href^="#"]').forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });