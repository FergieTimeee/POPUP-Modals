window.addEventListener('load', () => {
  const popupButtons = document.querySelectorAll('.popup-button');
  //console.log(popupButtons);
  popupButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const target = this.dataset.target;

      const popupElement = document.querySelector(target);

      if (popupElement !== null) {
        popupElement.classList.toggle('is-active');
      }
    });
  });
});
