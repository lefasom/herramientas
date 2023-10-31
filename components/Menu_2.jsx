import { useEffect, useState } from 'react';
import Styles from '../styles/menu_2.module.css'
export default function Menu_1() {
    const [list, setlist] = useState(false)
    const [list2, setlist2] = useState(false)
    const [states, setstate] = useState(true)


    const changeList = () => {
        setlist(!list)
    }
    const changeList2 = () => {
        setlist2(!list2)
    }
    const menu = () => {
        setstate(!states)
        setlist(false)
        setlist2(false)

    }
    let mensaje = "Hola alberto, mi pedido:\npapa 2k\nzanahoria 2k\nhuevos x6";
    var imagenURL = "https://tse1.mm.bing.net/th?id=OIP.A0MMBdQp2LPP_jomgdQZvwHaJB&pid=Api&rs=1&c=1&qlt=95&w=78&h=95"; // Reemplaza con la URL real de tu imagen

    // Reemplaza espacios en blanco en la URL de la imagen
    imagenURL = imagenURL.replace(/ /g, '%20');
    mensaje = mensaje.replace(/\n/g, '%0A');
    const url = "https://api.whatsapp.com/send?phone=2616115057&text=" + mensaje + "%0A" + imagenURL;
    return (<>{states ?

        <div className={Styles.container_menu_1}>
            <button onClick={menu}>m</button>
        <a href={url}>whatsapp</a>

            <ul>
                <li className={Styles.li}>
                    <span>1</span></li>
                <li className={Styles.li}>
                    <span onClick={() => {
                        menu()
                    }}>2</span>

                    <ul className={list ? Styles.sub_block : Styles.sub_none}>
                        <li>Hombres</li>
                        <li>Mujer</li>
                        <li>Animal</li>
                        <li>Objeto</li>
                    </ul>
                </li>
                <li className={Styles.li}>
                    <span>3</span>
                </li>
                <li className={Styles.li}>

                    <span onClick={() => {
                        menu()

                    }}>4</span>

                    <ul className={list2 ? Styles.sub_block : Styles.sub_none}>
                        <li>Motos</li>
                        <li>Autos</li>
                        <li>Aviones</li>
                        <li>Barcos</li>
                    </ul>
                </li>
                <li className={Styles.li}>
                    <span>5</span></li>
            </ul>
        </div>
        :
        <div className={Styles.container_menu_2}>
            <button onClick={() => {
                menu()
                setlist2(false)
                setlist(false)

            }}>m</button>

            <ul>
                <li className={Styles.li}>

                    Numeros<span>1</span></li>
                <li onClick={changeList} className={Styles.li}>
                    &darr;Ser<span >2</span>
                    <ul className={list ? Styles.sub_block : Styles.sub_none}>
                        <li>Hombres</li>
                        <li>Mujer</li>
                        <li>Animal</li>
                        <li>Objeto</li>
                    </ul>
                </li>
                <li className={Styles.li}>
                    Colores<span>3</span></li>
                <li onClick={changeList2} className={Styles.li}>
                    &darr;Vehiculo<span >4</span>
                    <ul className={list2 ? Styles.sub_block : Styles.sub_none}>
                        <li>Motos</li>
                        <li>Autos</li>
                        <li>Aviones</li>
                        <li>Barcos</li>
                    </ul>
                </li>
                <li className={Styles.li}>
                Equipos<span>5</span></li>
            </ul>
        </div>

    }
    </>);
}
