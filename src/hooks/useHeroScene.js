import { useEffect } from "react";

export default function useHeroScene(sceneRef, canvasRef) {
  useEffect(() => {
    const scene = sceneRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!scene || reduceMotion) {
      return undefined;
    }

    function handlePointerMove(event) {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty("--pointer-x", x.toFixed(3));
      scene.style.setProperty("--pointer-y", y.toFixed(3));
    }

    function handlePointerLeave() {
      scene.style.setProperty("--pointer-x", "0");
      scene.style.setProperty("--pointer-y", "0");
    }

    scene.addEventListener("pointermove", handlePointerMove);
    scene.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [sceneRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = [];
    const pointCount = 34;
    let frameId;

    function createPoint(width, height) {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1.2
      };
    }

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      points.length = 0;
      for (let index = 0; index < pointCount; index += 1) {
        points.push(createPoint(rect.width, rect.height));
      }
    }

    function draw() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= width) point.vx *= -1;
        if (point.y <= 0 || point.y >= height) point.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(154, 182, 255, 0.7)";
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < points.length; j += 1) {
          const next = points[j];
          const dx = point.x - next.x;
          const dy = point.y - next.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 128) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(98, 126, 255, ${0.18 - distance / 1280})`;
            ctx.lineWidth = 1;
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) {
        frameId = window.requestAnimationFrame(draw);
      }
    }

    resizeCanvas();
    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [canvasRef]);
}
