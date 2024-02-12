import React, { useEffect, useState } from 'react';
import './paragraph_container_dimension_style.scss'
import RangeSliderComponent from '../../core/range_slider_component';
import ButtonComponent from '../../core/button_component';

function ParagraphContainerDimensionControl(props) {
    const [paragraphContainerDimensionState, setParagraphContainerDimensionState] =
        useState(props.initialParagraphContainerDimensionState);

    const maxWidth = 1000;
    const maxHeight = props.height ?? 1000;

    useEffect(() => {
        setParagraphContainerDimensionState(props.initialParagraphContainerDimensionState);
    }, [props.initialParagraphContainerDimensionState])

    return (
        <div className='paragraph-container-dimension-root'>
            <h4 className='standard-text'>Dimension</h4>
            <h5 className='standard-text'>Width</h5>
            <RangeSliderComponent leftLabel={'0'} rightLabel={maxWidth.toString()}
                initialValue={paragraphContainerDimensionState.width} max={maxWidth}
                onChanged={(value) => {
                    setParagraphContainerDimensionState({ ...paragraphContainerDimensionState, width: value });
                }} />
            <h5 className='standard-text'>Height</h5>
            <RangeSliderComponent leftLabel={'0'} rightLabel={maxHeight.toString()}
                initialValue={paragraphContainerDimensionState.height} max={maxHeight}
                onChanged={(value) => {
                    setParagraphContainerDimensionState({ ...paragraphContainerDimensionState, height: value });
                }} />
            <ButtonComponent label={'Apply'} onClicked={() => {
                props.onApply(paragraphContainerDimensionState)
            }} />
        </div>
    );
}

export default ParagraphContainerDimensionControl;