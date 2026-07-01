"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Avatar3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---------- Scene setup ----------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const COLORS = {
      lime: 0xcbff4d,
      coral: 0xff5d7a,
      cyan: 0x45e8d1,
      violet: 0x8b6bff,
      paper: 0xf6f3ff,
    };

    const rig = new THREE.Group();
    scene.add(rig);

    // Core wireframe head (icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: COLORS.lime,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    rig.add(core);

    // Inner glowing solid
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: COLORS.coral,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    rig.add(inner);

    const innerEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(innerGeo),
      new THREE.LineBasicMaterial({ color: COLORS.paper })
    );
    inner.add(innerEdges);

    // Orbit rings
    const ringConfigs = [
      { radius: 3.1, color: COLORS.cyan, rot: [Math.PI / 2.4, 0, 0], tube: 0.012 },
      { radius: 3.5, color: COLORS.violet, rot: [Math.PI / 3.2, Math.PI / 4, 0], tube: 0.012 },
      { radius: 3.85, color: COLORS.coral, rot: [Math.PI / 1.8, -Math.PI / 5, 0], tube: 0.01 },
    ];
    const rings: THREE.Mesh[] = [];
    ringConfigs.forEach((cfg) => {
      const geo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 8, 96);
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.55,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      rig.add(ring);
      rings.push(ring);
    });

    // Orbiting skill nodes
    const nodeCount = 8;
    const nodes: { mesh: THREE.Mesh; speed: number; radius: number; offset: number; axis: THREE.Vector3 }[] = [];
    const nodeColors = [COLORS.lime, COLORS.cyan, COLORS.coral, COLORS.violet];
    for (let i = 0; i < nodeCount; i++) {
      const geo = new THREE.OctahedronGeometry(0.11, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: nodeColors[i % nodeColors.length],
      });
      const mesh = new THREE.Mesh(geo, mat);
      const radius = 3.1 + Math.random() * 0.8;
      const axis = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      rig.add(mesh);
      nodes.push({ mesh, speed: 0.15 + Math.random() * 0.25, radius, offset: Math.random() * Math.PI * 2, axis });
    }

    // Background particle field
    const particleCount = 260;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: COLORS.paper,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---------- Interaction: mouse parallax ----------
    const pointer = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    function onPointerMove(e: PointerEvent) {
      const rect = mount!.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRot.y = pointer.x * 0.4;
      targetRot.x = pointer.y * -0.3;
    }
    window.addEventListener("pointermove", onPointerMove);

    // ---------- Scroll-driven rotation ----------
    const scrollState = { progress: 0 };
    let scrollTriggerInstance: ScrollTrigger | null = null;
    if (!prefersReducedMotion) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => {
          scrollState.progress = self.progress;
        },
      });
    }

    // ---------- Resize ----------
    function handleResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();
    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      core.rotation.y = t * 0.18 + scrollState.progress * Math.PI * 2;
      core.rotation.x = t * 0.09;
      inner.rotation.y = -t * 0.35;
      inner.rotation.x = -t * 0.22;

      rings.forEach((ring, i) => {
        ring.rotation.z = t * (0.12 + i * 0.05) * (i % 2 === 0 ? 1 : -1);
      });

      nodes.forEach((n) => {
        const angle = t * n.speed + n.offset;
        const pos = new THREE.Vector3(
          Math.cos(angle) * n.radius,
          Math.sin(angle) * n.radius * 0.6,
          Math.sin(angle * 0.8) * n.radius
        ).applyAxisAngle(n.axis, angle * 0.4);
        n.mesh.position.copy(pos);
      });

      particles.rotation.y = t * 0.015;

      // smooth parallax follow
      rig.rotation.y += (targetRot.y - rig.rotation.y) * 0.04;
      rig.rotation.x += (targetRot.x - rig.rotation.x) * 0.04;

      const pulse = 1 + Math.sin(t * 1.4) * 0.03;
      inner.scale.setScalar(pulse);

      renderer.render(scene, camera);
    }
    animate();

    // ---------- Entrance animation ----------
    if (!prefersReducedMotion) {
      gsap.from(rig.scale, {
        x: 0.001,
        y: 0.001,
        z: 0.001,
        duration: 1.4,
        ease: "elastic.out(1, 0.6)",
        delay: 0.2,
      });
      gsap.from(rig.rotation, {
        y: Math.PI * 1.5,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      scrollTriggerInstance?.kill();
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      rings.forEach((r) => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      nodes.forEach((n) => {
        n.mesh.geometry.dispose();
        (n.mesh.material as THREE.Material).dispose();
      });
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full w-full"
      aria-hidden="true"
      role="presentation"
    />
  );
}
