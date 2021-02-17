import React, {useContext, useState} from 'react';

import {ValueContext} from "../app";

import {ColorPickerPanelContainer, ColorPickerRgbSliderContainer, ColorPickerColorsListContainer} from '../containers';

import "./color-picker.css";

const ColorPicker = () => {
    const value = useContext(ValueContext);

    const [colorListActive, setColorListActive] = useState(false);
    const [rgbSliderActive, setRGBSliderActive] = useState(false);
    const [rgbSliderIconColor, setRgbSliderIconColor] = useState(value);

    const backGround = {
        background: rgbSliderIconColor
    };

    const onChangeIconColor = (newIconColor) => {
        setRgbSliderIconColor(newIconColor);
    };

    const onItemSelected = (item) => {
        if (item === 'colorList') {
            if (rgbSliderActive) setRGBSliderActive(!rgbSliderActive);
            setColorListActive(!colorListActive);
        }

        if (item === 'rgbSlider') {
            if (colorListActive) setColorListActive(!colorListActive);
            setRGBSliderActive(!rgbSliderActive);
        }
    };

    return (
        <article className="color-picker">
            <ColorPickerPanelContainer onItemSelected={onItemSelected}
                                       rgbSliderActive={rgbSliderActive}
                                       backGround={backGround}
                                       onChangeIconColor={onChangeIconColor}/>
            {rgbSliderActive && <ColorPickerRgbSliderContainer onItemSelected={onItemSelected} onChangeIconColor={onChangeIconColor}/>}
            {colorListActive && <ColorPickerColorsListContainer onItemSelected={onItemSelected} onChangeIconColor={onChangeIconColor}/>}
        </article>
    );
};

export default ColorPicker;