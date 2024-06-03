let currentSection = null;

function showNextSection(sectionId) {
  const sections = document.querySelectorAll('.row');
  sections.forEach(section => {
    section.classList.add('d-none');
  });

  const nextSection = document.getElementById(sectionId);
  if (nextSection) {
    nextSection.classList.remove('d-none');
    currentSection = sectionId;
  }
}

