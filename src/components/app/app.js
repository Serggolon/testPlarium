import React, {useState} from 'react';

import ColorPicker from '../color-picker';

const ValueContext = React.createContext();
const ColorsContext = React.createContext();
const onChangeContext = React.createContext();

const App = () => {

    const [value, setValue] = useState('#00ff00');
    const onChange = (colorInputValue) =>  colorInputValue !== value ? setValue(colorInputValue): null;
    const [colors] = useState([
        {name: 'red', value: '#ff0000'},
        {name: 'yellow', value: '#ffff00'},
        {name: 'green', value: '#00ff00'},
        {name: 'blue', value: '#0000ff'}
    ]);

    return (
        <ValueContext.Provider value={value}>
            <onChangeContext.Provider value={onChange}>
                <ColorsContext.Provider value={colors}>
                    <ColorPicker/>
                </ColorsContext.Provider>
            </onChangeContext.Provider>
        </ValueContext.Provider>
    );
};
export {
    ValueContext,
    ColorsContext,
    onChangeContext,
    App
};