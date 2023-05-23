import React, { useEffect, useRef } from "react";

const CanvasParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 100;
    const particleSpeed = 0.5;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * particleSpeed - particleSpeed / 2;
        this.speedY = Math.random() * particleSpeed - particleSpeed / 2;
        this.color = Math.random() < 0.5 ? "crimson" : "#1ca5eb";
        this.shape =
          Math.random() < 0.33
            ? "circle"
            : Math.random() < 0.5
            ? "triangle"
            : "square";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;

        if (this.shape === "circle") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        } else if (this.shape === "triangle") {
          const side = this.size * 2;
          const height = side * (Math.sqrt(3) / 2);
          const x1 = this.x - side / 2;
          const y1 = this.y + height / 3;
          const x2 = this.x + side / 2;
          const y2 = this.y + height / 3;
          const x3 = this.x;
          const y3 = this.y - (2 * height) / 3;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.closePath();
          ctx.fill();
        } else if (this.shape === "square") {
          const side = this.size * 2;
          const x = this.x - side / 2;
          const y = this.y - side / 2;

          ctx.fillRect(x, y, side, side);
        }
      }
    }

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        if (particle.size <= 0.2) {
          particles.splice(index, 1);
          particles.push(new Particle());
        } else {
          particle.update();
          particle.draw();
        }
      });

      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    // Cleanup
    return () => cancelAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasParticleAnimation;
