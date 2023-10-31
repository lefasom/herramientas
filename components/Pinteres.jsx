import Styles from '../styles/pinteres.module.css'
import { images } from '../pages/api/images';
import { useState } from 'react';
export default function Pinteres() {
    const [img, setImg] = useState('')
    const [state, setState] = useState(false)

    const zoom = (src) => {
        setState(!state)
        setImg(src)
    }
    return (
        <div className={Styles.container_pinteres}>
            {
                images.map((val) => {
                    return (
                        <div key={val.id}>
                            <img onClick={()=>zoom(val.src)} src={val.src} alt="" />
                        </div>)
                })
            }

            <div className={state ? Styles.see : Styles.noSee} >
                <button onClick={()=>setState(false)}>x</button>
                <img src={img} alt="" />

            </div>
        </div>
    );
}
