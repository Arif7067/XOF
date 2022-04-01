import React, {useState, useEffect, useRef} from 'react'
import "./Accordion.css"
import Chevron from './chevron.svg'
import {Link} from 'react-router-dom'


export default function Accordion(props) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    // console.log(toggle);
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{props.title}</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
                <Link  className='btn btn-outline-dark' to={props.way}>Apply</Link>
                
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                </p>
            </div>
            
        </div>
    )
}
