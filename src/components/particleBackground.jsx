import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return <div className="App">
    <Particles
    options={{
      background: {
        color: "#0a2342",
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: ["#2CA58D", "#f05f95", "#FFFdF7"]
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          value: 400,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 1.2,
        },
      },
    }}
      />
  </div>
};

export default ParticleBackground;