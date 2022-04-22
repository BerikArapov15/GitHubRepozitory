import React,  {useState} from 'react';
import Select from 'react-select'

const Color = () => {

    let [bgColor, setBgColor] = useState('grey')
    console.log(bgColor);

    const bgHandler =(e)=>{
        console.log(e.value);
        setBgColor(e.value)
    };

    const options = [
        { value: 'black', label: 'black' },
        { value: 'pink', label: 'pink' },
        { value: 'blue', label: 'blue' },
        { value: 'yellow', label: 'yellow' }
      ];
    return (
        <div>
            <style>{`body{background-color: ${bgColor}}`}</style>
         <Select  options={options} onChange={bgHandler} />
        </div>
    );
};

export default Color;