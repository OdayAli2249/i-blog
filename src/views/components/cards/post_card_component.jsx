import React from 'react';
import './post_card_style.scss';
import InteractionSectionComponent from '../interaction_section_component';

function PostCardComponent(props) {
    return (
        <div className='post-card-root' style={{ height: props.height }} >
            {props.selectionMod ?
                props.selected ? <div className='post-card-selected' /> :
                    <div className='post-card-unselected' /> : <></>}
            {props.view.list ?
                <div className='post-meta-row'>
                    <div className='post-picture'>

                    </div>
                    <div className='post-description-container'>
                        <h4 className='standard-text'>
                            {props.post.name}
                        </h4>
                        <h4 className='standard-text'>
                            {'++++++'}
                        </h4>
                    </div>

                </div> : <></>}
            {props.view.list ?
                <h4 className='standard-text'>
                    {'++++++++++++++++++++++++++++++++++++' +
                        '++++++++++++++++++++++++++++++++++++' +
                        '++++++++++++++++++++++++++++++++++++' +
                        '++++++++++++++++++++++++++++++++++++'}
                </h4> : <></>}
            <div className='post-card-content'>
                {!props.view.list ?
                    <div className='stacked-post-meta-row'>
                        <div className='post-picture'>

                        </div>
                        <div className='post-description-container'>
                            <h4 className='standard-text'>
                                {props.post.name}
                            </h4>
                            <h4 className='standard-text'>
                                {'++++++'}
                            </h4>
                        </div>

                    </div> : <></>}
                {(!props.selectionMod) &&
                    <div className='post-options-column'>
                        {!props.hideOptions &&
                            <div className={props.post.userContent && props.post.userContent.favorite ?
                                'active-post-option' : 'post-option'}
                                onClick={() => {
                                    props.onFavorite();
                                }}>
                            </div>}
                        {!props.hideOptions &&
                            <div className={props.post.userContent && props.post.userContent.save ?
                                'active-post-option' : 'post-option'}
                                onClick={() => {
                                    props.onSave();
                                }}>
                            </div>}
                        <div className='post-option'
                            onClick={() => {
                                if (props.selectionMod)
                                    props.onItemSelected()
                                else
                                    props.onClick();
                            }}>

                        </div>
                    </div>}
            </div>
            {props.view.list && !props.hideInteractions ?
                <InteractionSectionComponent onShowComments={() => props.onClick()} interactions={props.post.userContent} /> : <></>}
        </div>
    );
}

export default PostCardComponent;