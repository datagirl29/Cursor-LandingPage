// Mood data
const moods = {
  happy: {
    colors: {
      bg: '#FFF9C4',
      accent: '#FFD600',
      text: '#795548',
    },
    description: 'Let your joy shine brighter today!',
    image: 'https://res.cloudinary.com/dhykxqpfx/image/upload/v1750312999/Happy_ccp5z2.jpg', // Local digital art for Happy
  },
  sad: {
    colors: {
      bg: '#B3C6E7',
      accent: '#607D8B',
      text: '#263238',
    },
    description: 'It\'s okay to pause—brighter days are coming.',
    image: 'https://res.cloudinary.com/dhykxqpfx/image/upload/v1750312999/Sad_p0jid6.jpg', // Local digital art for Sad
  },
  energetic: {
    colors: {
      bg: '#FFF3E0',
      accent: '#FF6F00',
      text: '#BF360C',
    },
    description: 'Channel your energy and conquer your goals!',
    image: 'https://res.cloudinary.com/dhykxqpfx/image/upload/v1750312999/Energetic_jkyvui.jpg', // Local digital art for Energetic
  },
  calm: {
    colors: {
      bg: '#E0F7FA',
      accent: '#00B8D4',
      text: '#006064',
    },
    description: 'Take a deep breathe and find your stillness in the moment',
    image: 'https://res.cloudinary.com/dhykxqpfx/image/upload/v1750312999/Calm_mncmai.png', // Local digital art for Calm
  },
};

// Elements
const moodBtns = document.querySelectorAll('.mood-btn');
const centeredDescription = document.getElementById('centered-description');
const moodBtn = document.getElementById('mood-btn');
const bgOverlay = document.querySelector('.bg-overlay');
const moodSelector = document.querySelector('.mood-selector');
let currentMood = 'happy';

function setMood(mood) {
  currentMood = mood;
  // Set background image
  bgOverlay.style.backgroundImage = `url('${moods[mood].image}')`;
  // Set description in center
  centeredDescription.style.opacity = '0';
  setTimeout(() => {
    centeredDescription.textContent = moods[mood].description;
    centeredDescription.style.opacity = '1';
  }, 200);
  // Set button color
  moodBtn.style.background = moods[mood].colors.accent;
  moodBtn.style.color = '#fff';
}

moodBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.mood-btn.active').classList.remove('active');
    btn.classList.add('active');
    setMood(btn.dataset.mood);
  });
});

// Button at bottom can cycle moods
const moodOrder = ['happy', 'sad', 'energetic', 'calm'];
moodBtn.addEventListener('click', () => {
  let idx = moodOrder.indexOf(currentMood);
  let nextMood = moodOrder[(idx + 1) % moodOrder.length];
  document.querySelector(`.mood-btn[data-mood="${nextMood}"]`).click();
});

// Initial mood
setMood('happy'); 