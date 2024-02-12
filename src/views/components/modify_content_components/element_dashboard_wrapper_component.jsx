import React from 'react';
import './element_dashboard_wrapper_style.scss';
import ParagraphElementNameControl from './controls/paragraph_element_name_control';
import ParagraphContainerShapeControl from './controls/paragraph_container_shape_control';
import ParagraphElementColorControl from './controls/paragraph_element_color_control';
import ParagraphElementSizeControl from './controls/paragraph_element_size_control';
import ParagraphElementContentControl from './controls/paragraph_element_content_control';
import ParagraphElementPositionControl from './controls/paragraph_element_position_control';

function ElementDashboardWrapperComponent(props) {
    return (
        <div className='element-dashboard-wrapper-root'>
            <ParagraphElementNameControl initialParagraphElementNameState={{ name: props.element.name }} />
            {/* <ParagraphContainerShapeControl
                initialParagraphContainerShapeState={{ showAllShapes: false, showCustomizeOption: false }} /> */}
            <ParagraphElementColorControl
                initialParagraphElementColorState={{
                    showAllColors: false, showCustomizeOption: false,
                    color: props.element.color
                }}
                onApply={(value) => {
                    props.onChanged({ ...props.element, color: value.color }, 'color');
                }} />
            <ParagraphElementSizeControl
                initialParagraphElementSizeState={{ showCustomizeOption: false, selectedOption: 0 }}
                onApply={(value) => {
                    props.onChanged({ ...props.element, size: value.size }, 'size');
                }} />
            <ParagraphElementContentControl initialParagraphContentState={{
                type: props.element.type,
                text: props.element.text,
                src: props.element.src
            }}
                onApply={(value) => {
                    props.onChanged({ ...props.element, type: value.type, text: value.text, src: value.src }, value.type);
                }} />
            <ParagraphElementPositionControl initialParagraphElementPositionState={{
                x: props.element.position.x, y: props.element.position.y
            }}
                onApply={(value) => {
                    props.onChanged({ ...props.element, position: value }, 'position');
                }} />
        </div>
    );
}

export default ElementDashboardWrapperComponent;