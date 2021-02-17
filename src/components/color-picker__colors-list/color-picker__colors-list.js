import React from 'react';

import ColorPickerColorsListItem from "../color-picker__colors-list_item";

import './color-picker__colors-list.css';

const ColorPickerColorsList = ({onListItemSelect, colors}) => {

    const colorListItemRender = (color) => {
        const backGroundColor = {
            background: color.name
        };
        return (
            <ColorPickerColorsListItem key={color.name} color={color.name} backGroundColor={backGroundColor}/>
        );
    };

    return (
        <section onClick={onListItemSelect} className="color-picker-colors-list">
            {colors.map(colorListItemRender)}
        </section>
    );
};

export default ColorPickerColorsList;