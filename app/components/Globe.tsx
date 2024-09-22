import createGlobe from "cobe";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

import { useEffect, useRef } from "react";
import CardContainer from "./CardContainer";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0; // Horizontal rotation
    const theta = 0.3; // Vertical rotation (adjusted to show Stockholm immediately)
    let isDragging = false;
    let lastX = 0;

    // Make sure the canvas exists before initializing the globe
    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0.3, // Adjust this to center on Stockholm (longitude)
        theta: 1.5, // Adjust this to show more of the globe from the side
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [59.3293, 18.0686], size: 0.1 }, // Stockholm
        ],
        onRender: (state) => {
          state.phi = phi;
          state.theta = theta;
        },
      });

      // Event listener to track mouse movement and rotate the globe
      const handleMouseDown = (event: MouseEvent) => {
        isDragging = true;
        lastX = event.clientX;
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (isDragging) {
          const deltaX = event.clientX - lastX;
          phi += deltaX * 0.005;
          lastX = event.clientX;
        }
      };

      const handleMouseUp = () => {
        isDragging = false;
      };

      // Attach event listeners to the document to track mouse actions
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      // Cleanup when the component unmounts
      return () => {
        globe.destroy();
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return (
    <CardContainer>
      <div className="flex gap-4 items-center p-4">
        <MapPin size={20} weight="bold" />
        <p className="text-base font-light">Stockholm</p>
      </div>
      <div
        className="cursor-pointer flex justify-center"
        style={{ height: "300px", overflow: "hidden" }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: 500, height: 500, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </CardContainer>
  );
};

export default Globe;
