import { useEffect, useState } from 'react';
import Styles from '../styles/menu_1.module.css'
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
    return (<>{states ?
        <div className={Styles.container_menu_1}>
            <button onClick={menu}>m</button>
            <ul>
                <li className={Styles.li}>
                    <span>1</span></li>
                <li className={Styles.li}>
                <span onClick={()=>{
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

                <span onClick={()=>{
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
                        <button onClick={()=>{
                            menu()
                            setlist2(false)
                            setlist(false)

                            }}>m</button>

            <ul>
                <li className={Styles.li}>
                    <span>1</span>Numeros</li>
                <li onClick={changeList} className={Styles.li}>
                    <span >2</span>
                    Ser&darr;
                    <ul className={list ? Styles.sub_block : Styles.sub_none}>
                        <li>Hombres</li>
                        <li>Mujer</li>
                        <li>Animal</li>
                        <li>Objeto</li>
                    </ul>
                </li>
                <li className={Styles.li}>
                    <span>3</span>Colores</li>
                <li onClick={changeList2} className={Styles.li}>

                    <span >4</span>Vehiculo&darr;
                    <ul className={list2 ? Styles.sub_block : Styles.sub_none}>
                        <li>Motos</li>
                        <li>Autos</li>
                        <li>Aviones</li>
                        <li>Barcos</li>
                    </ul>
                </li>
                <li className={Styles.li}>
                    <span>5</span>Equipos</li>
            </ul>
        </div>

    }
    </>);
}
