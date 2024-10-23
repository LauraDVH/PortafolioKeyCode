import fondoCompu from "../../assets/Image/fondoCompu.jpg";
import { Navbar } from "../Navbar/navbar";
import styles from "./styles.module.css";
import programadora from "../../assets/Image/programadora.png";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${fondoCompu})`, // Aquí va la imagen de fondo
      }}
    >
      {/* Overlay negro translúcido */}
      <div className={styles.overlay}></div>

      {/* Navbar fija en la parte superior */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Contenedor que divide la pantalla en dos: imagen a la izquierda y contenido a la derecha */}
      <div
        className={`relative z-10 w-full flex`}
        style={{ minHeight: "100vh" }}
      >
        {/* Contenedor de la imagen a la izquierda */}
        <div
          className={`flex-1 ${styles.characterContainer}`}
          data-aos="fade-up"
        >
          <img
            src={programadora}
            alt="Programadora"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Contenedor del contenido de Home a la derecha */}
        <div
          className={`flex-1 ${styles.home} flex flex-col items-end justify-center pr-10`}
          data-aos="fade-up"
        >
          <div className={styles.gretting}>
            <Typewriter
              options={{
                strings: [
                  "Hola mundo, yo soy",
                  "Hello world, I'm",
                  "Bonjour le monde, je suis",
                  "Olá mundo, eu sou",
                  "Hallo Welt, ich bin",
                  "Hei verden, jeg er",
                  "Ciao mondo, io sono",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <span className={styles.grettingHand}> 👋🏼 </span>
          </div>
          <div className={styles.info}>
            <h1>LAURA VARGAS</h1>
            <p>Desarrolladora FullStack 🖥️</p>
          </div>
          <div className={styles.btnsContainer}>
            <a
              href="mailto:danielavargas@gmail.com"
              className={styles.btnContact}
            >
              Contáctame
            </a>
            <a href="" className={styles.btnCv}>
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Home };
