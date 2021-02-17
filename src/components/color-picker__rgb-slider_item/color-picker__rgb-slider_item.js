import React from 'react';

import "./color-picker__rgb-slider_item.css";

const ColorPickerRgbSliderItem = ({sliderChanel, handleFunc, chanelValue}) => {

    return <fieldset className="color-picker-rgb-slider-field-set">
        <label className="color-picker-rgb-slider-label" htmlFor={sliderChanel}>{sliderChanel.toUpperCase()}</label>
        <input onChange={(event) => handleFunc(event)}
               id={sliderChanel}
               className={`color-picker-rgb-slider-${sliderChanel}`}
               value={chanelValue}
               type="range" min="0" max="255"
               step="1"
        />
    </fieldset>
};

export default ColorPickerRgbSliderItem;