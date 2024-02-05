import { useState } from 'react';

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

    // remove the URL hash while preserving history
    history.replaceState(null, '', ' ');
  }

  return (
    <div className="LightboxGallery">
      <div className="thumbnails">
        {images.map(({ src, alt }, i) => (
          <a href="#lightbox-gallery" key={src} onClick={() => openLightbox(i)}>
            <img src={src} alt={alt} />
          </a>
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
