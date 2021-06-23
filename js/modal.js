const modalBody = (function () {
// Modal starts here
  const modalContainer = document.querySelector('#modal-container');
  function showModal(title, text, imgSrc) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    const myImage = document.createElement('img');
    myImage.src = imgSrc;
    modal.appendChild(myImage);

function hideModal() {
    modalContainer.classList.remove('is-visible');
    }

    const closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    const titleElement = document.createElement('h1');
    titleElement.innerText = title;

    const contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    const { target } = e;
    if (target === modalContainer) {
      hideModal();
    }
  });
  // Modal ends here

  // adding the return statement
  return {
    showModal,
    hideModal,
  };
}());

// modal.showModal();
