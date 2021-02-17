import React from 'react';

import './color-picker__panel.css';

const ColorPickerPanel = ({value, rgbIconClickHandler, onItemSelected, backGround}) => {

    return (
        <section className="color-picker-panel">
            <p>{value}</p>
            <article onClick={() => rgbIconClickHandler()} className="color-picker-panel-rgb-slider-icon"
                     style={backGround}></article>
            <article onClick={() => onItemSelected('colorList')}
                     className="color-picker-panel-color-list-icon"></article>
        </section>
    );
};
export default ColorPickerPanel;