// Create a canvas element and append it to the container element
const canvas = document.createElement('canvas');
const container = document.getElementById('glitterfall-container');
container.appendChild(canvas);

// Set the canvas size to match the container size
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

// Get the canvas context
const ctx = canvas.getContext('2d');

// Create an array to hold the glitter or sequin particles
const particles = [];

// Create a function to draw the particles on the canvas
function drawParticles() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through the particles array
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    // Update the particle position based on its velocity
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Decrease the particle velocity over time to make it gradually slow down
    particle.vx *= 0.99;
    particle.vy *= 0.99;

    // If the particle has reached the bottom of the canvas and its velocity is zero, stop it from moving
    if (particle.y > canvas.height && particle.vy === 0) {
      particle.y = canvas.height;
    }
    // If the particle has reached the bottom of the canvas and its velocity is not zero, reset its velocity to zero
    else if (particle.y > canvas.height && particle.vy !== 0) {
      particle.y = canvas.height;
      particle.vy = 0;
      particle.vx = 0;
    }

    // Draw the particle on the canvas
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  }
}

// Create a function to add new particles to the canvas
function addParticle() {
  // Generate a random position for the particle
  const x = Math.random() * canvas.width;
  const y = 0; // Start the particle at the top of the canvas
    // Generate a random velocity for the particle
    const vx = (Math.random() - 0.5) * 5;
    const vy = Math.random() * 5 + 5; // Give the particle an initial upward velocity

    // Generate a random size and color for the particle
    const size = Math.random() * 5 + 2;
    const color = 'purple'; // Make the glitter monotone purple

    // Add the particle to the particles array
    particles.push({ x, y, vx, vy, size, color });
    }

    // Set an interval to add a new particle every 100 milliseconds
    setInterval(addParticle, 100);

    // Set an interval to draw the particles on the canvas every 10 milliseconds
    setInterval(drawParticles, 10);

    // Get a reference to the abutton element
    const abutton = document.getElementById('shake-button');

    // Add an event listener to the abutton to listen for the mousedown event
    abutton.addEventListener('mousedown', (event) => {
    // Set a flag to indicate that the abutton is being held down
    let abuttonHeld = true;

    // Set a variable to track the previous mouse position
    let prevMouseY = event.clientY;
        // Generate a random velocity for the particle
    const vx = (Math.random() - 0.5) * 5;
    const vy = (Math.random() * 5 + 5); // Give the particle some upward velocity

    // Generate a random size and color for the particle
    const size = Math.random() * 5 + 2;
    const color = 'purple'; // Make the glitter monotone purple

    // Add the particle to the particles array
    particles.push({ x, y, vx, vy, size, color });
    },

    // Set an interval to add a new particle every 100 milliseconds
    setInterval(addParticle, 100),

    // Set an interval to draw the particles on the canvas every 10 milliseconds
    setInterval(drawParticles, 10),

    // Add an event listener to the abutton to listen for the mousedown event
    abutton.addEventListener('mousedown', (event) => {
    // Set a flag to indicate that the abutton is being held down
    let abuttonHeld = true;

    // Set a variable to track the previous mouse position
    let prevMouseY = event.clientY;

// Add an event listener to the document to listen for the mousemove event
  document.addEventListener('mousemove', (event) => {
    // If the abutton is not being held down, do nothing
    if (!abuttonHeld) {
      return;
    }

    // Calculate the distance that the mouse has moved since the previous mousemove event
    const deltaY = event.clientY - prevMouseY;

    // If the mouse has moved a significant distance, trigger the shaking effect
    if (Math.abs(deltaY) > 20) {
      // Perform the shaking effect here
      console.log('Shaking!');

      // Loop through the particles array and give each particle a random velocity
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.vx = (Math.random() - 0.5) * 20;
        particle.vy = (Math.random() - 0.5) * 20;
      }

      // Move the abutton's y-position to imitate real life bottle shaking
      abutton.style.top = (event.clientY - abutton.offsetHeight / 2) + 'px';
    }

    // Update the previous mouse position
    prevMouseY = event.clientY;
  });

  // Add an event listener to the document to listen for the mouseup event
  document.addEventListener('mouseup', (event) => {
    // Set the flag to indicate that the abutton is no longer being held down
    abuttonHeld = false;
  });
}));
