import React from 'react';
import './advert_card_style.scss';
import ButtonComponent from '../core/button_component';
import InteractionSectionComponent from '../interaction_section_component';

function AdvertCardComponent(props) {
    return (
        <div className='advert-card-root' style={{ height: props.height }}>
            {props.view.list ?
                <ButtonComponent /> : <></>}
            <div className='advert-card-content'>
                <div className='advert-meta-row'>
                    <div className='advert-picture'>

                    </div>
                    <div className='advert-description-container'>
                        <h4 className='standard-text'>
                            {props.advert.name+' +++++++++++++++++++++++++++++++++++++++++++++++++++++++++' +
                                '++++++++++++++++++++++++++++++++++++++'}
                        </h4>
                    </div>

                </div>
                {props.view.list ? <div className='advert-title-container'>
                    <h4 className='standard-text'>
                        {'+++++++++++++'}
                    </h4>
                </div> : <></>}
                <div className='advert-options-column'>
                    {!props.hideOptions &&
                        <div className={props.advert.userContent && props.advert.userContent.favorite ?
                            'active-advert-option' : 'advert-option'}
                            onClick={() => {
                                props.onFavorite();
                            }}>
                        </div>}
                    {!props.hideOptions &&
                        <div className={props.advert.userContent && props.advert.userContent.save ?
                            'active-advert-option' : 'advert-option'}
                            onClick={() => {
                                props.onSave();
                            }}>
                        </div>}
                    <div className='advert-option' onClick={() => {
                        props.onClick();
                    }}>

                    </div>
                </div>
            </div>
            {props.view.list && !props.hideInteractions ?
                <InteractionSectionComponent onShowComments={() => props.onClick()} interactions={props.advert.userContent} /> : <></>}
        </div>
    );
}

export default AdvertCardComponent;