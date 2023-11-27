import React from 'react';
import './blog_card_style.scss';
import ButtonComponent from '../core/button_component';
import InteractionSectionComponent from '../interaction_section_component';

function BlogCardComponent(props) {
    return (
        <div className='blog-card-root' style={{ height: props.height }}>
            {props.view.list ?
                <div className='blog-meta-row'>
                    <div className='blog-picture'>

                    </div>
                    <div className='blog-description-container'>
                        <h4 className='standard-text'>
                            {props.blog.name}
                        </h4>
                        <h4 className='standard-text'>
                            {'++++++'}
                        </h4>
                    </div>

                </div> : <></>}
            <div className='blog-card-content'>
                {!props.view.list ?
                    <div className='stacked-blog-meta-row'>
                        <div className='blog-picture'>

                        </div>
                        <div className='blog-description-container'>
                            <h4 className='standard-text'>
                                {props.blog.name}
                            </h4>
                            <h4 className='standard-text'>
                                {'++++++'}
                            </h4>
                        </div>

                    </div> : <></>}
                <div className='blog-options-column'>
                    {!props.hideOptions &&
                        <div className={props.blog.userContent && props.blog.userContent.favorite ?
                            'active-blog-option' : 'blog-option'}
                            onClick={() => {
                                props.onFavorite();
                            }}>
                        </div>}
                    {!props.hideOptions &&
                        <div className={props.blog.userContent && props.blog.userContent.save ?
                            'active-blog-option' : 'blog-option'}
                            onClick={() => {
                                props.onSave();
                            }}>
                        </div>}
                    <div className='blog-option' onClick={() => {
                        props.onClick();
                    }}>

                    </div>
                </div>
            </div>
            {props.view.list ?
                <h4 className='standard-text'>
                    {'++++++++++'}
                </h4> : <></>}
            {props.view.list && !props.hideInteractions ?
                <InteractionSectionComponent onShowComments={() => props.onClick()} interactions={props.blog.userContent} /> : <></>}
        </div>
    );
}

export default BlogCardComponent;