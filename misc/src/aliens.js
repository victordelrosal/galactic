// Different types of scary aliens for the game

const ALIEN_TYPES = [
  {
    name: "Cyclops",
    render: (ctx, x, y, radius) => {
      // Main body (green)
      ctx.fillStyle = "#2ecc71";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Single large eye (red)
      ctx.fillStyle = "#e74c3c";
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Pupil (black)
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }
  },
  {
    name: "Tentacled",
    render: (ctx, x, y, radius) => {
      // Main body (purple)
      ctx.fillStyle = "#9b59b6";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Tentacles
      ctx.strokeStyle = "#9b59b6";
      ctx.lineWidth = radius * 0.25;
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        const tentacleLength = radius * 1.2;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        const endX = x + Math.cos(angle) * tentacleLength;
        const endY = y + Math.sin(angle) * tentacleLength;
        const ctrlX = x + Math.cos(angle) * tentacleLength * 0.7;
        const ctrlY = y + Math.sin(angle) * tentacleLength * 1.3;
        ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
        ctx.stroke();
      }
      
      // Eyes (yellow)
      const eyeDistance = radius * 0.4;
      ctx.fillStyle = "#f1c40f";
      ctx.beginPath();
      ctx.arc(x - eyeDistance/2, y - eyeDistance/2, radius * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + eyeDistance/2, y - eyeDistance/2, radius * 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
  },
  {
    name: "BrainInvader",
    render: (ctx, x, y, radius) => {
      // Brain-like body (pink)
      ctx.fillStyle = "#e84393";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Brain wrinkles
      ctx.strokeStyle = "#d63031";
      ctx.lineWidth = radius * 0.1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(x, y, radius * (0.5 + i * 0.2), 0, Math.PI);
        ctx.stroke();
      }
      
      // Glowing eyes
      ctx.fillStyle = "#00cec9";
      ctx.beginPath();
      ctx.arc(x - radius * 0.3, y, radius * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + radius * 0.3, y, radius * 0.15, 0, Math.PI * 2);
      ctx.fill();
    }
  },
  {
    name: "SpikeMutant",
    render: (ctx, x, y, radius) => {
      // Spiky body (orange)
      ctx.fillStyle = "#e67e22";
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.8, 0, Math.PI * 2);
      ctx.fill();
      
      // Spikes
      ctx.fillStyle = "#d35400";
      const spikes = 8;
      for (let i = 0; i < spikes; i++) {
        const angle = (Math.PI * 2 * i) / spikes;
        const innerRadius = radius * 0.8;
        const outerRadius = radius * 1.4;
        
        ctx.beginPath();
        ctx.moveTo(x + innerRadius * Math.cos(angle), y + innerRadius * Math.sin(angle));
        ctx.lineTo(x + outerRadius * Math.cos(angle), y + outerRadius * Math.sin(angle));
        ctx.lineTo(x + innerRadius * Math.cos(angle + Math.PI/spikes), y + innerRadius * Math.sin(angle + Math.PI/spikes));
        ctx.fill();
      }
      
      // Menacing mouth
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(x, y + radius * 0.2, radius * 0.3, 0, Math.PI);
      ctx.fill();
    }
  },
  {
    name: "SlimeCreature",
    render: (ctx, x, y, radius) => {
      // Gooey body (green-blue)
      ctx.fillStyle = "#00b894";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Bubbles
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      const bubbleCount = 4;
      for (let i = 0; i < bubbleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * radius * 0.6;
        const bubbleSize = radius * (0.1 + Math.random() * 0.2);
        ctx.beginPath();
        ctx.arc(
          x + Math.cos(angle) * distance,
          y + Math.sin(angle) * distance,
          bubbleSize,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      
      // Three eyes in triangle formation
      ctx.fillStyle = "#ff0000";
      const eyeRadius = radius * 0.15;
      ctx.beginPath();
      ctx.arc(x, y - radius * 0.3, eyeRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - radius * 0.3, y + radius * 0.2, eyeRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + radius * 0.3, y + radius * 0.2, eyeRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
];

// Function to get a random alien type
function getRandomAlienType() {
  const randomIndex = Math.floor(Math.random() * ALIEN_TYPES.length);
  return ALIEN_TYPES[randomIndex];
}

export { ALIEN_TYPES, getRandomAlienType };
