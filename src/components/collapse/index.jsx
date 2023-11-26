import './collapse.css'
import { useState } from 'react'
import icon from '../../assets/dropdown-up.svg'
import React from 'react'



function Collapse({ content, title, contentType = "list" }) {

    const [isopen, setOpen] = useState(false)
    const [isrotate, setRotate] = useState()



    function toogle() {//si clique :

        isrotate === 'down' ? setRotate("up") : setRotate("down")//si la valeur de isrotate est de up, on la change en down et inversement, ce qui les fait tourner via la classe css qui change
        setOpen(!isopen) //Regle la valeur de isopen sur son contraire donc = true et donc si true, les divs du contenu des collapse seron créés et apparaitront par conte si isopen=false les divs des contenus seront déconstruites


    }


    return (
        <div className='collapse-main ' >
            <div className='collapse-title'>
                <div className='collapse-title-title'>{title}</div>
                {<img className={` collapse-icon ${isrotate}`} src={icon} alt={icon} onClick={toogle} />}

            </div>

            {isopen && <div className={`collapse-content`} >
                {contentType === 'list' ?
                    (
                        <ul className='collapse-content-text'>
                            {content.map((elementList) =>
                                <li key={elementList}>{elementList}</li>)}
                        </ul>
                    ) : (
                        <p className={`collapse-content-text   `} >{content}</p>
                    )}
            </div>}
        </div>

    )
}

export default Collapse