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

function showPreviousSection() {
  const sections = document.querySelectorAll('.row');
  sections.forEach(section => {
    section.classList.add('d-none');
  });

  const previousSection = getPreviousSection(currentSection);
  if (previousSection) {
    document.getElementById(previousSection).classList.remove('d-none');
    currentSection = previousSection;
  }
}

function getPreviousSection(sectionId) {
  const sections = [
    //bcc
    'introducao',
    'algoritmos',
    'estruturasDados',
    'videoFinal',
    'apresentacao',

    // ads
    'introducaoAds',
    'algoritmosAds',
    'estruturasDadosAds',
    'videoFinalAds',
    'apresentacaoAds',

    // bsi
    'introducaoBsi',
    'algoritmosBsi',
    'estruturasDadosBsi',
    'videoFinalBsi',
    'apresentacaoBsi',

    // Engenharia
    'introducaoEngenharia',
    'algoritmosEngenharia',
    'estruturasDadosEngenharia',
    'videoFinalEngenharia',
    'apresentacaoEngenharia',

    // redes
    'introducaoRedes',
    'algoritmosRedes',
    'estruturasDadosRedes',
    'videoFinalRedes',
    'apresentacaoRedes'

  ]
}