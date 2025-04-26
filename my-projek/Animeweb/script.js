const canvas = document.getElementsByClassName("area")[0];
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const trails = [];

const starImage = new Image();
starImage.src = "https://pnghq.com/wp-content/uploads/2023/02/glow-star-purple-bluefreetoedit-png-5786.png";

function createStar(targetX, targetY) {
  stars.push({
    x: canvas.width,
    y: 0,
    targetX,
    targetY,
    size: Math.random() * 30 + 10,
    speed: Math.random() * 2 + 1,
  });
}

canvas.addEventListener("click", (e) => {
  createStar(e.clientX, e.clientY);
});

function updateStars() {
    for (let i = stars.length - 1; i >= 0; i--) {
      const star = stars[i];
      const dx = star.targetX - star.x;
      const dy = star.targetY - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      // Add trail effect
      trails.push({
        x: star.x + star.size / 2,
        y: star.y + star.size / 2,
        size: star.size / 10,
        life: 0,
        maxLife: Math.random() * 30 + 20,
      });
  
      // Check if the star is near the click point
      if (distance < 5) {
        // 50% chance to stop at the click point
        if (Math.random() < 0.5) {
          stars.splice(i, 1); // Remove the star
          continue; // Skip further updates for this star
        }
      }
  
      // Check if the star moves off-screen
      if (
        star.x + star.size < 0 || // Exit left
        star.y + star.size < 0 || // Exit top
        star.x > canvas.width ||  // Exit right
        star.y > canvas.height    // Exit bottom
      ) {
        stars.splice(i, 1); // Remove the star
      } else {
        // Update the star's position
        star.x += (dx / distance) * star.speed;
        star.y += (dy / distance) * star.speed;
      }
    }
  }
  
  
  
  
function updateTrails() {
  for (let i = trails.length - 2; i >= 0; i--) {
    const trail = trails[i];
    trail.size -= 0.1;
    trail.life--;
    if (trail.life >= trail.maxLife || trail.size <= 0) {
      trails.splice(i, 1);
    }
  }
}

function drawTrails() {
  for (let trail of trails) {
    ctx.beginPath();
    ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(159, 107, 255)";
    ctx.fill();
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTrails();
  for (let star of stars) {
    ctx.drawImage(starImage, star.x, star.y, star.size, star.size);
  }
}

function animate() {
  updateStars();
  updateTrails();
  drawStars();
  requestAnimationFrame(animate);
}

animate();
