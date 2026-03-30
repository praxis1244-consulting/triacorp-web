import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function proxyUrl(url: string): string {
  if (!url || url.startsWith("/")) return url;
  return `/api/image-proxy?url=${encodeURIComponent(url)}`;
}

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  textureOffsetY?: number;
}

export default function ScrollImage({
  src,
  alt,
  className = "",
  fallbackSrc,
  textureOffsetY = 0,
}: ScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stripRefs = useRef<THREE.Mesh[]>([]);
  const rafRef = useRef<number>(0);
  const lastScrollRef = useRef(0);
  const smoothVelRef = useRef(0);
  const targetOffsetsRef = useRef([0, 0, 0]);
  const currentOffsetsRef = useRef([0, 0, 0]);
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const stripMultipliers = [-1.0, 1.6, -0.9];

  useEffect(() => {
    setLoaded(false);
    setCurrentSrc(src);
  }, [src]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.localClippingEnabled = true;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.01, 10);
    camera.position.z = 1;

    const clipTop = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.5);
    const clipBottom = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.5);

    const loader = new THREE.TextureLoader();
    loader.load(
      proxyUrl(currentSrc),
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const stripWidth = 1 / 3;
        const strips: THREE.Mesh[] = [];

        for (let i = 0; i < 3; i++) {
          const geometry = new THREE.PlaneGeometry(stripWidth, 1);
          const uvAttr = geometry.attributes.uv;
          for (let j = 0; j < uvAttr.count; j++) {
            const u = uvAttr.getX(j);
            uvAttr.setX(j, u * stripWidth + i * stripWidth);
            if (textureOffsetY !== 0) {
              const v = uvAttr.getY(j);
              uvAttr.setY(j, v + textureOffsetY);
            }
          }

          const material = new THREE.MeshBasicMaterial({
            map: texture,
            clippingPlanes: [clipTop, clipBottom],
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.x = -0.5 + stripWidth * i + stripWidth / 2;
          scene.add(mesh);
          strips.push(mesh);
        }

        stripRefs.current = strips;
        setLoaded(true);
      },
      undefined,
      () => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      },
    );

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const strips = stripRefs.current;
      if (strips.length === 0) return;

      const currentScroll = window.scrollY;
      const rawVel = currentScroll - lastScrollRef.current;
      lastScrollRef.current = currentScroll;

      smoothVelRef.current += (rawVel - smoothVelRef.current) * 0.1;
      const vel = smoothVelRef.current * 0.003;

      for (let i = 0; i < 3; i++) {
        targetOffsetsRef.current[i] = vel * stripMultipliers[i];
        currentOffsetsRef.current[i] +=
          (targetOffsetsRef.current[i] - currentOffsetsRef.current[i]) * 0.08;
        strips[i].position.y = currentOffsetsRef.current[i];
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      renderer.dispose();
    };
  }, [currentSrc, fallbackSrc, textureOffsetY]);

  return (
    <div className={className}>
      <div ref={containerRef} className="relative w-full h-full">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={currentSrc}
          alt={alt}
          onError={() => {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
              setCurrentSrc(fallbackSrc);
            }
          }}
          style={textureOffsetY ? { objectPosition: `center ${50 - textureOffsetY * 100}%` } : undefined}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}
