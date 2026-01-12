import React from "react";

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  height?: string;
}

const Map: React.FC<MapProps> = ({
  center = { lat: 17.4474, lng: 78.391 },
  zoom = 15,
  className = "",
  height = "100%",
}) => {
  const src = `https://www.google.com/maps?q=${center.lat},${center.lng}&z=${zoom}&output=embed`;

  return (
    <div className={className} style={{ height }}>
      <iframe
        title="Company location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
