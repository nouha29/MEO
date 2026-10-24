import { useEffect, useRef } from 'react';
import { GOLD } from '../theme';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    const onEnterLink = () => {
      ringRef.current?.classList.add('cursor-hover');
    };
    const onLeaveLink = () => {
      ringRef.current?.classList.remove('cursor-hover');
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring - follows with lag */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, width: 36, height: 36,
          marginLeft: -18, marginTop: -18, borderRadius: '50%',
          border: `1.5px solid ${GOLD}`, pointerEvents: 'none', zIndex: 99999,
          transition: 'width 0.2s, height 0.2s, margin 0.2s, border-color 0.2s', mixBlendMode: 'normal',
        }}
        className="cursor-ring custom-cursor"
      />
      {/* Inner dot - follows instantly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, width: 5, height: 5,
          marginLeft: -2.5, marginTop: -2.5, borderRadius: '50%',
          background: GOLD, pointerEvents: 'none', zIndex: 100000,
        }}
        className="custom-cursor"
      />
    </>
  );
}
