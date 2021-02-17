import React, {useContext, useEffect} from 'react';

import {ColorsContext, onChangeContext} from "../app";

import ColorPickerColorsList from "../color-picker__colors-list";

const ColorPickerColorsListContainer = ({onItemSelected, onChangeIconColor}) => {

    const colors = useContext(ColorsContext);
    const onChange = useContext(onChangeContext);

    useEffect(() => {
        const clickOutHandler = (event) => {
            const eClass = event.target.classList;
            if (!eClass.contains('color-picker-colors-list-item')
                && !eClass.contains('color-picker-colors-list-item-name')
                && !eClass.contains('color-picker-colors-list-item-color')
                && !eClass.contains('color-picker-colors-list')
            ) onItemSelected('colorList');
        };
        window.addEventListener("click", clickOutHandler);

        return () => window.removeEventListener("click", clickOutHandler);
    });

    const onListItemSelect = (event) => {

        const e = event.target;
        let targetColorName = '';

        if (e.classList.contains('color-picker-colors-list-item')) {
            targetColorName = e.childNodes[1].style.background;
        }
        if (e.classList.contains('color-picker-colors-list-item-name')) {
            targetColorName = e.nextSibling.style.background;
        }
        if (e.classList.contains('color-picker-colors-list-item-color')) {
            targetColorName = e.style.background;
        }
        if (targetColorName) {
            colors.forEach((item) => {
                if (item.name === targetColorName) {
                    onChangeIconColor(item.value);
                    onChange(item.value);
                }
            });
            onItemSelected('colorList');
        }
    };

    return (
        <ColorPickerColorsList onListItemSelect={onListItemSelect} colors={colors}/>
    );
};

export default ColorPickerColorsListContainer;