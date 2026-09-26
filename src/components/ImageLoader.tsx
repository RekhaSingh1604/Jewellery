import React, { useState } from "react";
import "../styles/ImageLoader.css";

interface ImageLoaderProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  loading = "lazy",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`image-loader ${loaded ? "loaded" : ""}`}>
      
      {!loaded && !error && (
        <div className="image-loading">
          <div className="image-spinner"></div>
        </div>
      )}

      {error ? (
        <div className="image-fallback">
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false);
            setError(true);
          }}
        />
      )}

    </div>
  );
};

export default ImageLoader;