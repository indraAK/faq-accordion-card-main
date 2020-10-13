const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
   const accordionHeader = accordion.querySelector('.accordion__header');
   accordionHeader.addEventListener('click', ({ target }) => {
      toggleAccordion(target);

      accordions.forEach((accItem) => {
         if (accordion.getAttribute('id') !== accItem.getAttribute('id')) {
            accItem.classList.remove('accordion--open');
         }
      });
   });
});

function toggleAccordion(accordionHeader) {
   const accordion = accordionHeader.parentElement;
   const accordionContent = accordion.querySelector('.accordion__content');
   const accordionText = accordion.querySelector('.accordion__text');
   const height = accordionText.offsetHeight;
   accordionContent.setAttribute('style', `--height: ${height}px`);
   accordion.classList.toggle('accordion--open');
}