import React from 'react';

import ColorPickerRgbSliderItem from "../color-picker__rgb-slider_item";

import './color-picker__rgb-slider.css';

const ColorPickerRgbSlider = ({sliderChannels, onSliderItemChange, cancelButtonHandler, okButtonHandler}) => {

    return (
        <section className="color-bar-rgb-slider">
            <form className="color-bar-rgb-slider-form">
                {sliderChannels.map((colorChanel) => <ColorPickerRgbSliderItem key={colorChanel.name}
                                                                               sliderChanel={colorChanel.name}
                                                                               handleFunc={onSliderItemChange}
                                                                               chanelValue={colorChanel.value}/>)}
                <button onClick={(event) => cancelButtonHandler(event)} className={'cancel'}>CANCEL</button>
                <button onClick={(event) => okButtonHandler(event)} className={'ok'}>OK</button>
            </form>
        </section>
    );
};

export default ColorPickerRgbSlider;