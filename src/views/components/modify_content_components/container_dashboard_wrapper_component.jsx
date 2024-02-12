import React from 'react';
import './container_dashboard_wrapper_style.scss';
import ParagraphElementNameControl from './controls/paragraph_element_name_control';
import ParagraphContainerShapeControl from './controls/paragraph_container_shape_control';
import ParagraphElementColorControl from './controls/paragraph_element_color_control';
import ParagraphElementSizeControl from './controls/paragraph_element_size_control';
import ParagraphElementPositionControl from './controls/paragraph_element_position_control';
import ParagraphContainerDimensionControl from './controls/paragraph_container_dimension_control';

function ContainerDashboardWrapperComponent(props) {
    return (
        <div className='container-dashboard-wrapper-root'>
            <ParagraphElementNameControl initialParagraphElementNameState={{ name: props.container.name }} />
            <ParagraphContainerShapeControl
                initialParagraphContainerShapeState={{
                    showAllShapes: false, showCustomizeOption: false,
                    shape: props.container.shape
                }}
                onApply={(value) => {
                    props.onChanged({ ...props.container, shape: value.shape });
                }} />
            <ParagraphElementColorControl
                initialParagraphElementColorState={{
                    showAllColors: false, showCustomizeOption: false,
                    color: props.container.color
                }}
                onApply={(value) => {
                    props.onChanged({ ...props.container, color: value.color });
                }} />
            <ParagraphContainerDimensionControl initialParagraphContainerDimensionState={{
                width: props.container.dimension.width, height: props.container.dimension.height
            }} height={2000}
                onApply={(value) => {
                    props.onChanged({ ...props.container, dimension: value });
                }} />
            <ParagraphElementPositionControl initialParagraphElementPositionState={{
                x: props.container.position.x, y: props.container.position.y
            }}
                onApply={(value) => {
                    props.onChanged({ ...props.container, position: value });
                }} />
        </div>
    );
}

export default ContainerDashboardWrapperComponent;