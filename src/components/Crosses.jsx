import React from 'react'
import { RxCross2 } from "react-icons/rx";
import './Crosses.css'; // Assuming you have a CSS file for styling

const Crosses = ({ backgroundColor, color }) => {
    return (
        <div className='crosses' style={{ backgroundColor }}>
                <span style={{ color }}><RxCross2 /></span>
                <span style={{ color }}><RxCross2 /></span>
        </div>
    )
}

export default Crosses
