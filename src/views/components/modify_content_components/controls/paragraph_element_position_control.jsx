import React, { useState } from 'react';
import './paragraph_element_position_style.scss'
import RangeSliderComponent from '../../core/range_slider_component';

function ParagraphElementPositionControl(props) {
    const [paragraphElementPositionState, setParagraphElementPositionState] = useState(props.initialParagraphElementPositionState);

    const maxX = 1000;
    const maxY = 1000;

    return (
        <div className='paragraph-element-position-root'>
            <h4 className='standard-text'>Position</h4>
            <h5 className='standard-text'>x</h5>
            <RangeSliderComponent leftLabel={'0'} rightLabel={'1000'}
                initialValue={paragraphElementPositionState.x} max={maxX} />
            <h5 className='standard-text'>y</h5>
            <RangeSliderComponent leftLabel={'0'} rightLabel={'1000'}
                initialValue={paragraphElementPositionState.y} max={maxY} />
        </div>
    );
}

export default ParagraphElementPositionControl;