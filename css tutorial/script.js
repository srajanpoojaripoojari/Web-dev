onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // Get all the petals and hidden notes
const petals = document.querySelectorAll('.flower .flower__leaf');
const hiddenNotes = document.querySelectorAll('.flower .hidden-note');

// Add event listeners to the petals
petals.forEach(petal => {
  petal.addEventListener('click', function () {
    // Toggle the visibility of the corresponding hidden note
    const flower = petal.closest('.flower');
    const note = flower.querySelector('.hidden-note');
    note.style.display = note.style.display === 'none' ? 'block' : 'none';
  });
});
