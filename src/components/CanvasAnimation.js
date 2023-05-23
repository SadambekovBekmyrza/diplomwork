import React, { useEffect, useRef } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let requestId;
    let lines = [];

    const getRandomColor = () => {
      const colors = ["crimson", "#1ca5eb"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createLine = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const endX = Math.random() * canvas.width;
      const endY = Math.random() * canvas.height;
      const color = getRandomColor();
      const opacity = 1;

      lines.push({ startX, startY, endX, endY, color, opacity });
    };

    const animateLines = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line, index) => {
        context.beginPath();
        context.arc(line.startX, line.startY, 5, 0, Math.PI * 2);
        context.fillStyle = line.color;
        context.globalAlpha = line.opacity;
        context.fill();
        context.closePath();

        line.opacity -= 0.01;
        if (line.opacity <= 0) {
          lines.splice(index, 1);
        }
      });

      if (Math.random() < 0.1) {
        createLine();
      }

      requestId = requestAnimationFrame(animateLines);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animateLines();

    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-animation" />;
};

export default CanvasAnimation;
