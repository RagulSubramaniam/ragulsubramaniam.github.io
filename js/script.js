const showButton = document.getElementById('showButton');
const hiddenButtons = document.querySelectorAll('.hidden');
let areHidden = true;

showButton.addEventListener('click', () => {
    hiddenButtons.forEach(button => {
        button.classList.toggle('hidden');
    });
    showButton.innerHTML = areHidden
        ? '<div class="line"></div><div class="line"></div><div class="line"></div>'
        : 'Show Hidden Button';
});
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const jobCards = document.querySelectorAll('.job-card');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      let currentPageIndex = 0;
      function showPage(pageIndex) 
      {
        jobCards.forEach((card, index) => {
          if (index === pageIndex) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
      showPage(currentPageIndex);
      nextBtn.addEventListener('click', () => {
        currentPageIndex++;
        if (currentPageIndex >= jobCards.length) {
          currentPageIndex = 0;
        }
        showPage(currentPageIndex);
      });
      prevBtn.addEventListener('click', () => {
        currentPageIndex--;
        if (currentPageIndex < 0) {
          currentPageIndex = jobCards.length - 1;
        }
        showPage(currentPageIndex);
      });


      