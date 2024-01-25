import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Design2 = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="design-background">
      <Particles
        className="w-full h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: { value: "#0d47a1" },
          },
          fullScreen: { enable: true, zIndex: 0 },
          fpsLimit: 60
          ,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: false, mode: "repulse", distance: 400 },
              resize: { delay: 0.5, enable: true },
            },
            modes: {
              push: { default: true, groups: [], quantity: 4 },
              repulse: {
                distance: 150,
                duration: 0.4,
                factor: 100,
                speed: 1,
              },
            },
          },
          particles: {
            absorbers: {
              color: { value: "#000000" }, // Color of the absorber
              draggable: true,             // Whether the absorber is draggable
              opacity: 1,                  // Opacity of the absorber
              destroy: true,               // Whether particles are destroyed on absorption
              orbits: false,               // Whether particles orbit the absorber
              size: {
                value: { min: 5, max: 10 }, // Size range of the absorber
                density: 5,
                limit: { radius: 10, mass: 0 }
              },
              position: { x: 50, y: 50 }   // Initial position of the absorber
            },
            bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
            collisions: { enable: true },
            color: { value: "#000" },
            links: {
              color: { value: "#ffffff" },
              distance: 120,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            move: {
              enable: true,
              outModes: { default: "bounce" },
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, value_area: 5000 },
              value: 80,
            },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          zLayers: 100,
          name: "Absorbers",
          motion: { disable: false, reduce: { factor: 4, value: true } },
        }}
      />
    </div>
  );
};

export default Design2;
