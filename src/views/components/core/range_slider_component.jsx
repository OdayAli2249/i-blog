import React, { useEffect, useState } from 'react';
import './range_slider_style.scss';
import SpaceComponent from './space_component';

function RangeSliderComponent(props) {

    const [sliderValue, setSliderValue] = useState(props.initialValue); // Initial value

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
        props.onChanged(event.target.value);
    };

    useEffect(() => {
        setSliderValue(props.initialValue)
    }, [props.initialValue])

    return (
        <div className='range-slider-root'>
            <h5 className='standard-text'>{props.leftLabel}</h5>
            <SpaceComponent width={'10px'} />
            <input className='range-slider'
                type="range"
                id="rangeSlider"
                value={sliderValue}
                onChange={handleSliderChange}
                min={props.min ? props.min : "0"}
                max={props.max ? props.max : "100"}
            />
            <SpaceComponent width={'10px'} />
            <h5 className='standard-text'>{props.rightLabel}</h5>

        </div>
    );
}

export default RangeSliderComponent;