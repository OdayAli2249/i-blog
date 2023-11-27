import React, { useState } from 'react';
import './paragraph_element_size_style.scss'
import MultipleSelectionComponent from '../../core/multiple_selection_component';
import ButtonComponent from '../../core/button_component';
import RangeSliderComponent from '../../core/range_slider_component';

function ParagraphElementSizeControl(props) {

    const sizes = [
        { size: 'Small' },
        { size: 'Medium' },
        { size: 'Larg' },
        { size: 'X-Larg' },
        { size: 'XX-Larg' }
    ]

    const [paragraphElementSizeState, setParagraphElementSizeState] = useState(props.initialParagraphElementSizeState)

    return (
        <div className='paragraph-element-size-root'>
            <h4 className='standard-text'>Sizes({sizes.length})</h4>
            <MultipleSelectionComponent selectedOption={paragraphElementSizeState.selectedOption}
                options={sizes.map(sizeItem => sizeItem.size)}
                onOptionClicked={(idx) => {
                    setParagraphElementSizeState({ ...paragraphElementSizeState, selectedOption: idx })
                }
                } />

            <ButtonComponent width={'100px'} onClicked={() => {
                setParagraphElementSizeState({
                    ...paragraphElementSizeState,
                    showCustomizeOption: !paragraphElementSizeState.showCustomizeOption
                })
            }} />
            {paragraphElementSizeState.showCustomizeOption &&
                <RangeSliderComponent leftLabel={'Min'} rightLabel={'Max'} initialValue={50} />}
        </div>
    );
}

export default ParagraphElementSizeControl;