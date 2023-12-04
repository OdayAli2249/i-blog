import React, { useState } from 'react';
import './modify_content_page_style.scss';
import DrawingCanvas from '../components/canvas_component';
import ParagraphDashboardWrapperComponent from '../components/modify_content_components/paragraph_dashboard_wrapper_component';
import TabBarComponent from '../components/core/tab_bar_component';
import ModifyContentListComponent from '../components/modify_content_components/modify_content_list_component';
import ParagraphListComponent from '../components/modify_content_components/paragraph_list_component';
import FutureEventsComponent from '../components/modify_content_components/future_events_component';

function ModifyContentPage(props) {

    const [tab, setTab] = useState(0);

    return (
        <div className='modify-content-root'>
            <div className='modify-content-top-bar'>
                <TabBarComponent items={['posts', 'blogs', 'stories', 'events', 'adverts']} />
            </div>
            <div className='modify-content-side-bar'>
                <ParagraphDashboardWrapperComponent />
            </div>
            <div className='modify-content-row'>
                <div className='modify-content-column'>
                    <div className='modify-content-top-bar-place-holder'>

                    </div>
                    <div className='modify-content-body'>
                        <div className='modify-content-item'>
                            <ModifyContentListComponent type={'post'} />
                        </div>
                        <div className='modify-content-item'>
                            <TabBarComponent items={['canvas', 'control panel', 'meta data', 'events']}
                                onChanged={(tab) => setTab(tab)} />
                            <ParagraphListComponent hidden={tab == 1 ? false : true} />
                            <FutureEventsComponent hidden={tab == 3 ? false : true} />
                        </div>
                        <div className='modify-content-item'>

                        </div>
                    </div>
                </div>
                <div className='modify-content-side-bar-place-holder'>

                </div>
            </div>
        </div>
    );
}

export default ModifyContentPage;