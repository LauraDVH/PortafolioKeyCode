import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import styles from "./styles.module.css"

function Navbar() {
    // Crear un useState para controlar el estado del menú
    const [active, setActive] = useState(false)

    // Definición de una función para abrir o cerrar el menú
    const openModal = event => {       
        setActive(!active)       
    }
    return (
        <>
            {/*Se usa el operador ternario para determinar la clase CSS a aplicar al elemento 'nav'. Si 'active' es verdadero, se aplican las clases 'nav' y 'active'. Si 'active' es falso, solo se aplica la clase 'nav'. */}
            <nav id="home" className={active ? `${styles.nav} ${styles.active}` : styles.nav}>
                <div className={styles.navNavigation}>
                    <button
                        onClick={openModal}
                        className={styles.hamburguerBtn}
                    >
                        {/*Determinar qué icono se muestra en el botón de hamburguesa. Si 'active' es verdadero, se muestra el icono de cierre. Si 'active' es falso, se muestra el icono de menú. */}
                        {active ? <MdOutlineClose /> : <HiOutlineMenuAlt1 />}
                    </button>
                    <div className={styles.navNavigationBrand}>Laura Vargas<span>.</span></div>
                    <ul>
                        <li><a onClick={openModal} href='#home'>Inicio</a></li>                       
                        <li><a onClick={openModal} href='#about'>Acerca de mi</a></li>
                        <li><a onClick={openModal} href='#projects'>Proyectos</a></li>
                    </ul>
                </div>
                <div className={styles.navSocial}>
                    <a href="https://github.com/LDvargasHidalgo">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/laura-vargash">
                        <GrLinkedinOption />
                    </a>
                </div>
            </nav>
        </>
    )
}

// Exportación del componente Navbar para su uso en otros archivos
export { Navbar }