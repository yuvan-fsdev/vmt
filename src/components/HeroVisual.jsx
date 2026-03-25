import { useRef } from "react";
import { LogoImage } from "./BrandMark";
import useHeroScene from "../hooks/useHeroScene";

export default function HeroVisual() {
  const sceneRef = useRef(null);
  const canvasRef = useRef(null);

  useHeroScene(sceneRef, canvasRef);

  return (
    <div ref={sceneRef} className="hero-visual">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <span className="hero-ring ring-a" aria-hidden="true" />
      <span className="hero-ring ring-b" aria-hidden="true" />

      <div className="hero-folds" aria-hidden="true">
        <span className="fold-plane plane-a" />
        <span className="fold-plane plane-b" />
        <span className="fold-plane plane-c" />
      </div>

      <div className="scene-chip chip-a">Neural orchestration</div>
      <div className="scene-chip chip-b">LLM pipelines</div>
      <div className="scene-chip chip-c">Cloud-native control</div>

      <article className="scene-card scene-card-top">
        <strong>Intelligence Layer</strong>
        <span>Memory, routing, automation, and UX logic structured into one coherent engineering surface.</span>
      </article>

      <div className="hero-logo-core" aria-hidden="true">
        <div className="logo-shell">
          <LogoImage alt="" />
        </div>
      </div>

      <article className="scene-card scene-card-bottom">
        <strong>Operational Signal</strong>
        <span>Telemetry, workflows, and systems status exposed through clean control-plane interfaces.</span>
        <div className="signal-bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </article>
    </div>
  );
}
