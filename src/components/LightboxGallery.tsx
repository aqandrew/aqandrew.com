interface LightboxGalleryProps {
  sources: string[];
}

export default function LightboxGallery({ sources }: LightboxGalleryProps) {
  return (
    <>
      <div className="thumbnails">
        {sources.map((source) => (
          <img src={source} />
        ))}
      </div>
    </>
  );
}
