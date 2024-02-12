import React, { useEffect, useState } from 'react';
import './paragraph_element_position_style.scss'
import RangeSliderComponent from '../../core/range_slider_component';
import ButtonComponent from '../../core/button_component';

function ParagraphElementPositionControl(props) {
    const [paragraphElementPositionState, setParagraphElementPositionState] = useState(props.initialParagraphElementPositionState);

    const maxX = 1000;
    const maxY = 1000;

    useEffect(() => {
        setParagraphElementPositionState(props.initialParagraphElementPositionState);
    }, [props.initialParagraphElementPositionState])

    return (
        <div className='paragraph-element-position-root'>
            <h4 className='standard-text'>Position</h4>
            <h5 className='standard-text'>x</h5>
            <RangeSliderComponent leftLabel={'0'} rightLabel={'1000'}
                initialValue={paragraphElementPositionState.x} max={maxX}
                onChanged={(value) => {
                    setParagraphElementPositionState({
                        ...paragraphElementPositionState,
                        x: value
                    })
                }} />
            <h5 className='standard-text'>y</h5>
            <RangeSliderComponent leftLabel={'0'} rightLabel={'1000'}
                initialValue={paragraphElementPositionState.y} max={maxY}
                onChanged={(value) => {
                    setParagraphElementPositionState({
                        ...paragraphElementPositionState,
                        y: value
                    })
                }} />
            <ButtonComponent label={'Apply'} onClicked={() => {
                props.onApply(paragraphElementPositionState)
            }} />
        </div>
    );
}

export default ParagraphElementPositionControl;