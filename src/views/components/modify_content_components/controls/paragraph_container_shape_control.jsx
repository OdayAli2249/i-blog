import React, { useEffect, useState } from 'react';
import './paragraph_container_shape_style.scss';
import ButtonComponent from '../../core/button_component';
import RangeSliderComponent from '../../core/range_slider_component';

function ParagraphContainerShapeControl(props) {

    const shapes = [
        { radius: 0 },
        { radius: 0.1 },
        { radius: 0.2 },
        { radius: 0.3 },
        { radius: 0.4 },
        { radius: 0.5 },
        { radius: 0.6 },
        { radius: 0.7 },
        { radius: 0.8 },
        { radius: 0.9 },
        { radius: 1 },
    ]

    const hideModShapesListLength = 3;
    const [paragraphContainerShapeState, setParagraphContainerShapeState] = useState(props.initialParagraphContainerShapeState)

    useEffect(() => {
        setParagraphContainerShapeState(props.initialParagraphContainerShapeState);
    }, [props.initialParagraphContainerShapeState])

    return (
        <div className='paragraph-container-shape-root'>
            <h4 className='standard-text'>Shapes({shapes.length})</h4>
            <div className='paragraph-container-shape-grid'>
                {!paragraphContainerShapeState.showAllShapes &&
                    Array.from({ length: hideModShapesListLength }, (_, index) => index).map((idx) =>
                        <div key={idx} className={paragraphContainerShapeState.shape == shapes[idx].radius * 10 ?
                            'focused-paragraph-container-shape-grid-item' :
                            'paragraph-container-shape-grid-item'}
                            style={{ borderRadius: shapes[idx].radius * 25 }}
                            onClick={() => {
                                setParagraphContainerShapeState({
                                    ...paragraphContainerShapeState,
                                    shape: shapes[idx].radius * 10
                                })
                                props.onApply({
                                    ...paragraphContainerShapeState,
                                    shape: shapes[idx].radius * 10
                                })
                            }} />
                    )
                }
                {!paragraphContainerShapeState.showAllShapes &&
                    <div className='paragraph-container-rest-grid-items-container' onClick={() => {
                        setParagraphContainerShapeState({
                            ...paragraphContainerShapeState,
                            showAllShapes: true
                        })
                    }}>
                        <div className='paragraph-container-shape-grid-item'
                            style={{ borderRadius: shapes[hideModShapesListLength].radius * 25 }} />
                        <h4 className='standard-text paragraph-container-rest-grid-items'>+{shapes.length - hideModShapesListLength}</h4>
                    </div>
                }
                {paragraphContainerShapeState.showAllShapes && shapes.map(shape => {
                    // 25 is the half of item dimention
                    return <div key={shape.radius} className={paragraphContainerShapeState.shape == shape.radius * 10 ?
                        'focused-paragraph-container-shape-grid-item' :
                        'paragraph-container-shape-grid-item'}
                        style={{ borderRadius: shape.radius * 25 }}
                        onClick={() => {
                            setParagraphContainerShapeState({
                                ...paragraphContainerShapeState,
                                shape: shape.radius * 10
                            })
                            props.onApply({
                                ...paragraphContainerShapeState,
                                shape: shape.radius * 10
                            })
                        }} />
                })}
            </div>
            <div className='paragraph-container-shape-row'>
                <ButtonComponent width={'100px'} onClicked={() => {
                    setParagraphContainerShapeState({
                        ...paragraphContainerShapeState,
                        showAllShapes: !paragraphContainerShapeState.showAllShapes
                    })
                }} />
                <ButtonComponent width={'100px'} onClicked={() => {
                    setParagraphContainerShapeState({
                        ...paragraphContainerShapeState,
                        showCustomizeOption: !paragraphContainerShapeState.showCustomizeOption
                    })
                }} />
            </div>
            {paragraphContainerShapeState.showCustomizeOption &&
                <RangeSliderComponent leftLabel={'Rect'} rightLabel={'Circ'} initialValue={0}
                    max={10}
                    onChanged={(value) => {
                        setParagraphContainerShapeState({
                            ...paragraphContainerShapeState,
                            shape: value
                        })
                    }} />}
            <ButtonComponent label={'Apply'} onClicked={() => {
                props.onApply(paragraphContainerShapeState)
            }} />
        </div>
    );
}

export default ParagraphContainerShapeControl;