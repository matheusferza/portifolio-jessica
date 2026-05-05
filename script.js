document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.querySelector("#current-year");
  
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  
    const revealElements = document.querySelectorAll(".reveal");
    window.addEventListener('scroll', () => {
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (top < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    });
    
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
        }
      );
      
      revealElements.forEach((element) => observer.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("active"));
    }
  
  });