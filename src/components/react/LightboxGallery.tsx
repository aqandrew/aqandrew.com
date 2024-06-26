import { useState } from 'react';
import type { ImageMetadata } from 'astro';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import './LightboxGallery.css';

type LightboxGalleryImage = {
  src: string;
  alt: string;
};

interface LightboxGalleryProps {
  images: LightboxGalleryImage[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function openLightbox(index: number) {
    setOpen(true);
    setIndex(index);
  }

  function closeLightbox() {
    setOpen(false);
  }

  return (
    <div className="LightboxGallery">
      <div className="thumbnails">
        {images.map(({ src, alt }, i) => (
          <button
            key={src}
            onClick={() => openLightbox(i)}
            aria-label={`Open lightbox gallery: ${alt}`}
          >
            <img src={src} alt={alt} />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={closeLightbox}
        slides={images.map(({ src, alt }) => ({
          src,
          description: alt,
        }))}
        index={index}
        plugins={[Captions, Zoom]}
        captions={{ showToggle: true }}
      />
    </div>
  );
}

const SQUARE_BREAKPOINTS = [
  { label: 'xs', desc: 'mobile, small' },
  { label: 'sm', desc: 'mobile, large' },
  { label: 'md', desc: 'tablet' },
  { label: 'lg', desc: 'desktop, small' },
  { label: 'xl', desc: 'desktop, large' },
];

// convert locally imported images into LightboxGallery `images` prop,
//   corresponding to Square's 5 breakpoints
export function getSquareLightboxImages(
  importedImages: ImageMetadata[],
  label: string
): LightboxGalleryImage[] {
  return importedImages.map(({ src }, i) => {
    const { desc } = SQUARE_BREAKPOINTS[i];

    return {
      src,
      alt: `${label} - ${desc}`,
    };
  });
}
