"use client";

import React, { useEffect, useRef } from "react";

export default function StarfieldBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number }[] = [];
    const numStars = 200; // Visible count high kiya thoda
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
        });
      }
    };

    initStars();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      // 🚀 IMPORTANT: Clear screen context instead of solid pure black box layout override
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, width, height);

      // Subtle dynamic tech pattern matrix dots grid tracker node
      ctx.fillStyle = "rgba(100, 116, 139, 0.12)";
      for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 50) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 1.2; // Velocity engine push matrix

        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / width) * 2.5; 
          const opacity = (1 - star.z / width) * 0.7; // Bright opacity target core

          // Premium golden yellow template sync metrics
          ctx.fillStyle = `rgba(234, 179, 8, ${opacity})`; 
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}