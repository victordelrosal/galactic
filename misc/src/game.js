import { getRandomAlienType } from './aliens.js';
// ...existing code...

// Make sure enemies are initialized with alien types
let enemies = [];

function createEnemy() {
  const enemy = {
    x: Math.random() * canvas.width,
    y: 0, 
    speed: 1 + Math.random() * 3,
    radius: 10 + Math.random() * 15,
    alienType: getRandomAlienType(), // Assign random alien type
    // ...other existing properties...
  };
  enemies.push(enemy);
  return enemy;
}

function renderEnemies(ctx) {
  ctx.save();
  for (const enemy of enemies) {
    // IMPORTANT: Complete replacement - remove any existing red dot drawing code
    // and ONLY use the alien rendering
    
    // Comment out or remove any lines that look like this:
    // ctx.fillStyle = "red"; 
    // ctx.beginPath();
    // ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    // ctx.fill();
    
    // Use alien type's render method instead
    enemy.alienType.render(ctx, enemy.x, enemy.y, enemy.radius);
  }
  ctx.restore();
}

// For existing enemies, ensure they have alien types
function initializeExistingEnemies() {
  for (let enemy of enemies) {
    if (!enemy.alienType) {
      enemy.alienType = getRandomAlienType();
    }
  }
}

// Call this function after loading the game
initializeExistingEnemies();
// ...existing code...
