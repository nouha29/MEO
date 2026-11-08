import { useEffect, useState } from 'react';
import { GOLD, OFF_WHITE } from '../theme';

interface SelectedImage {
  src: string;
  alt: string;
}

export default function ImageLightbox() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  useEffect(() => {
    const makeImagesAccessible = () => {
      document.querySelectorAll<HTMLImageElement>('main img').forEach(image => {
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-haspopup', 'dialog');
        image.setAttribute('aria-label', `Enlarge image: ${image.alt || 'Project photo'}`);
      });
    };

    const openImage = (image: HTMLImageElement) => {
      setSelectedImage({
        src: image.currentSrc || image.src,
        alt: image.alt || 'Project photo',
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement) || !target.closest('main')) return;

      event.preventDefault();
      event.stopPropagation();
      openImage(target);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        !(target instanceof HTMLImageElement) ||
        !target.closest('main') ||
        (event.key !== 'Enter' && event.key !== ' ')
      ) return;

      event.preventDefault();
      openImage(target);
    };

    makeImagesAccessible();
    const observer = new MutationObserver(makeImagesAccessible);
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={selectedImage.alt}
      onClick={event => {
        if (event.target === event.currentTarget) setSelectedImage(null);
      }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, background: 'rgba(20, 20, 18, 0.9)',
      }}
    >
      <button
        type="button"
        aria-label="Close enlarged image"
        onClick={() => setSelectedImage(null)}
        style={{
          position: 'absolute', top: 20, right: 24,
          width: 44, height: 44, border: `1px solid ${GOLD}`,
          background: 'rgba(20, 20, 18, 0.7)', color: OFF_WHITE,
          fontSize: 28, lineHeight: 1, cursor: 'pointer',
        }}
      >
        ×
      </button>
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        style={{
          maxWidth: 'min(1200px, 94vw)', maxHeight: '88vh',
          width: 'auto', height: 'auto', objectFit: 'contain',
          border: `1px solid ${GOLD}66`, boxShadow: '0 20px 70px rgba(0,0,0,0.45)',
        }}
      />
    </div>
  );
}
