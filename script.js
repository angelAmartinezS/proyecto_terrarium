// Drag and drop functionality
const plants = document.querySelectorAll('.plant');
const terrarium = document.getElementById('terrarium-container');

plants.forEach(plant => {
  plant.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.src);
  });
});

terrarium.addEventListener('dragover', e => {
  e.preventDefault();
});

terrarium.addEventListener('drop', e => {
  e.preventDefault();
  const plantSrc = e.dataTransfer.getData('text/plain');
  const img = document.createElement('img');
  img.src = plantSrc;
  img.style.position = 'absolute';
  img.style.width = '80px';
  img.style.left = `${e.offsetX - 40}px`;
  img.style.top = `${e.offsetY - 40}px`;
  terrarium.appendChild(img);
});
