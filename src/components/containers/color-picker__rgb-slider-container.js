import React, {useContext, useState, useEffect} from 'react';

import {ValueContext, onChangeContext} from "../app";
import {
    hexToRgb,
    rgbToHex
} from "../utils/utils";

import ColorPickerRgbSlider from "../color-picker__rgb-slider";

const ColorPickerRgbSliderContainer = ({onItemSelected, onChangeIconColor}) => {

    const value = useContext(ValueContext);
    const onChange = useContext(onChangeContext);

    const [startPickerValue] = useState(value);
    const startPickerRGBValue = hexToRgb(startPickerValue);

    const [rValue, setRValue] = useState(startPickerRGBValue.r);
    const [gValue, setGValue] = useState(startPickerRGBValue.g);
    const [bValue, setBValue] = useState(startPickerRGBValue.b);

    const sliderChannels = [{name: 'r', value: rValue},
        {name: 'g', value: gValue},
        {name: 'b', value: bValue}];

    useEffect(() => {
        const clickOutHandler = (event) => {
            const eClass = event.target.classList;
            if (!eClass.contains('color-bar-rgb-slider')
                && !eClass.contains('color-bar-rgb-slider-form')
                && !eClass.contains('color-picker-rgb-slider-field-set')
                && !eClass.contains('color-picker-rgb-slider-label')
                && !eClass.contains('color-picker-rgb-slider-r')
                && !eClass.contains('color-picker-rgb-slider-g')
                && !eClass.contains('color-picker-rgb-slider-b')
            ) {
                onChangeIconColor(startPickerValue)
                onItemSelected('rgbSlider');
            }
        };
        window.addEventListener("click", clickOutHandler);

        return () => window.removeEventListener("click", clickOutHandler);
    });


    const onSliderItemChange = (event) => {
        const value = event.target.value;
        const _id = event.target.id;

        if (value && _id === 'r') {
            setRValue(value);
            return onChangeIconColor(rgbToHex(value, gValue, bValue))
        }
        if (value && _id === 'g') {
            setGValue(value);
            return onChangeIconColor(rgbToHex(rValue, value, bValue));
        }
        if (value && _id === 'b') {
            setBValue(value);
            return onChangeIconColor(rgbToHex(rValue, gValue, value));
        }
    };

    const cancelButtonHandler = (event) => {
        event.preventDefault();
        onChangeIconColor(startPickerValue);
        onItemSelected('rgbSlider');
    };

    const okButtonHandler = (event) => {
        event.preventDefault();
        onItemSelected('rgbSlider');
        onChange(() => rgbToHex(rValue, gValue, bValue));
    };

    return (
        <ColorPickerRgbSlider sliderChannels={sliderChannels}
                              onSliderItemChange={onSliderItemChange}
                              cancelButtonHandler={cancelButtonHandler}
                              okButtonHandler={okButtonHandler}/>
    );
};

export default ColorPickerRgbSliderContainer;