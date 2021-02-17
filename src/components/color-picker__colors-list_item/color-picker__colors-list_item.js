import React from 'react';

import './color-picker__colors-list_item.css';

const ColorPickerColorsListItem = ({color, backGroundColor}) => {

    return (
        <section className="color-picker-colors-list-item">
            <p className="color-picker-colors-list-item-name">{color.toUpperCase()}</p>
            <article className="color-picker-colors-list-item-color" style={backGroundColor}></article>
        </section>
    );
};

export default ColorPickerColorsListItem;