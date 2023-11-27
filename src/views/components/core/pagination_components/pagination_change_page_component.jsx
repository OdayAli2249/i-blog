import React, { useState } from 'react';
import './pagination_change_page_style.scss';
import ButtonComponent from '../button_component';

function ChangePageComponent(props) {

    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className='pagination-change-page-root'>
            <ButtonComponent onClicked={() => {
                if (pageNumber > 1) {
                    props.onChanged(pageNumber - 1)
                    setPageNumber(pageNumber - 1)
                }
            }} />
            <ButtonComponent onClicked={() => {
                props.onChanged(pageNumber + 1)
                setPageNumber(pageNumber + 1)
            }} />
        </div>
    );
}

export default ChangePageComponent;