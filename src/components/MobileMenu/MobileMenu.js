import React, {useState} from "react";
import './MobileMenu.css'

const MobileMenu = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='mobile-menu' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            { click ? props.children : null }
        </div>
    )};

export default MobileMenu