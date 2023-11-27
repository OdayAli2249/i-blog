import React from 'react';
import './story_card_style.scss';
import InteractionSectionComponent from '../interaction_section_component';

function StoryCardComponent(props) {
    return (
        <div className='story-card-root' style={{ height: props.height }}
            onClick={() => {
                props.onClick();
            }}>
            <div className='story-card-content'>
                <div className='stacked-story-meta-row'>
                    <div className='story-picture'>

                    </div>
                    <div className='story-title-container'>
                        <h4 className='standard-text'>
                            {props.story.name}
                        </h4>
                        <h4 className='standard-text'>
                            {'++++++'}
                        </h4>
                    </div>

                </div>
                <div className='story-options-column'>
                    {!props.hideOptions &&
                        <div className={props.story.userContent && props.story.userContent.favorite ?
                            'active-story-option' : 'story-option'}
                            onClick={() => {
                                props.onFavorite();
                            }}>
                        </div>}
                    {!props.hideOptions &&
                        <div className={props.story.userContent && props.story.userContent.save ?
                            'active-story-option' : 'story-option'}
                            onClick={() => {
                                props.onSave();
                            }}>
                        </div>}
                    <div className='story-option'
                        onClick={() => {
                            props.onClick();
                        }}>

                    </div>
                </div>
                <div className='story-description-container'>
                    <h4 className='standard-text'>
                        {'+++++++++++++++++++++++++++++++++++++++++++++++++++++++++' +
                            '++++++++++++++++++++++++++++++++++++++'}
                    </h4>
                </div>
            </div>
            {props.view.list ?
                <h4 className='standard-text'>
                    {'++++++++++++++++++++'}
                </h4> : <></>}
            {props.view.list ?
                <h4 className='standard-text'>
                    {'++++++++++++++++++++++++++'}
                </h4> : <></>}
            {props.view.list ?
                <h4 className='standard-text'>
                    {'++++++++++'}
                </h4> : <></>}
            {props.view.list ?
                <h4 className='standard-text'>
                    {'+++++++++++++++'}
                </h4> : <></>}
            {props.view.list && !props.hideInteractions ?
                <InteractionSectionComponent onShowComments={() => props.onClick()} interactions={props.story.userContent} /> : <></>}
        </div>
    );
}

export default StoryCardComponent;