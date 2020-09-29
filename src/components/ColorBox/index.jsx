import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {

};


function getRandomColor() {
    const colorList = ['deeppink', 'aqua', 'brown'];
    const randomIndex = Math.trunc(Math.random() * 3);
    return colorList[randomIndex];
}
function ColorBox() {

    const [color, setColor] = useState(() => {
        const innitColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(innitColor);
        return innitColor;
    });
    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className="color-box"
            style={{ background: color }}
            onClick={handleBoxClick}
        >
            Hi im SuShi
        </div>
    );
}

export default ColorBox;