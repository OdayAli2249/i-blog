import React, { useState } from 'react';
import './paragraph_element_color_style.scss';
import ButtonComponent from '../../core/button_component';

function ParagraphElementColorControl(props) {

    const colors = [
        { color: 'rgb(214, 37, 214)' },
        { color: 'rgb(75, 120, 225)' },
        { color: 'rgb(233, 187, 21)' },
        { color: 'rgb(70, 239, 208)' },
        { color: 'rgb(248, 32, 237)' },
        { color: 'rgb(247, 13, 56)' },
        { color: 'rgb(113, 24, 133)' },
        { color: 'red' },
        { color: 'pink' },
        { color: 'blue' }
    ]

    const hideModColorsListLength = 3;
    const [paragraphElementColorState, setParagraphElementColorState] = useState(props.initialParagraphElementColorState)

    return (
        <div className='paragraph-element-color-root'>
            <h4 className='standard-text'>Colors({colors.length})</h4>
            <div className='paragraph-element-color-grid'>
                {!paragraphElementColorState.showAllColors &&
                    Array.from({ length: hideModColorsListLength }, (_, index) => index).map((idx) =>
                        <div key={idx} className='paragraph-element-color-grid-item'
                            style={{ backgroundColor: colors[idx].color }}
                            onClick={() => {
                                setParagraphElementColorState({
                                    ...paragraphElementColorState,
                                    color: colors[idx].color
                                })
                                props.onApply({
                                    ...paragraphElementColorState,
                                    color: colors[idx].color
                                })
                            }} />
                    )
                }
                {!paragraphElementColorState.showAllColors &&
                    <div className='paragraph-element-rest-grid-items-container' onClick={() => {
                        setParagraphElementColorState({
                            ...paragraphElementColorState,
                            showAllColors: true
                        })
                    }}>
                        <div className='paragraph-element-color-grid-item'
                            style={{ backgroundColor: colors[hideModColorsListLength].color }} />
                        <h4 className='standard-text paragraph-element-rest-grid-items'>+{colors.length - hideModColorsListLength}</h4>
                    </div>
                }
                {paragraphElementColorState.showAllColors && colors.map(colorItem => {
                    // 25 is the half of item dimention
                    return <div key={colorItem.color} className='paragraph-element-color-grid-item'
                        style={{ backgroundColor: colorItem.color }}
                        onClick={() => {
                            setParagraphElementColorState({
                                ...paragraphElementColorState,
                                color: colorItem.color
                            })
                            props.onApply({
                                ...paragraphElementColorState,
                                color: colorItem.color
                            })
                        }} />
                })}
            </div>
            <div className='paragraph-element-color-row'>
                <ButtonComponent width={'100px'} onClicked={() => {
                    setParagraphElementColorState({
                        ...paragraphElementColorState,
                        showAllColors: !paragraphElementColorState.showAllColors
                    })
                }} />
                <ButtonComponent width={'100px'} onClicked={() => {
                    setParagraphElementColorState({
                        ...paragraphElementColorState,
                        showCustomizeOption: !paragraphElementColorState.showCustomizeOption
                    })
                }} />
            </div>
            {paragraphElementColorState.showCustomizeOption &&
                <input
                    type={'color'}
                    onChange={(event) => {
                        setParagraphElementColorState({
                            ...paragraphElementColorState,
                            color: event.target.value
                        })
                    }} />}
            <ButtonComponent label={'Apply'} onClicked={() => {
                props.onApply(paragraphElementColorState)
            }} />
        </div>
    );
}

export default ParagraphElementColorControl;