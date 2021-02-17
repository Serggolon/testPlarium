import React, {useContext} from 'react';

import {ValueContext} from "../app";

import ColorPickerPanel from "../color-picker__panel";

const ColorPickerPanelContainer = ({onItemSelected, rgbSliderActive, backGround, onChangeIconColor}) => {

    const value = useContext(ValueContext);

    const rgbIconClickHandler = () => {
        if (rgbSliderActive) {
            onChangeIconColor(value);
            onItemSelected('rgbSlider');
        }
        onItemSelected('rgbSlider');
    };

    return (
        <ColorPickerPanel value={value}
                          rgbIconClickHandler={rgbIconClickHandler}
                          onItemSelected={onItemSelected}
                          backGround={backGround}/>
    );
};
export default ColorPickerPanelContainer;