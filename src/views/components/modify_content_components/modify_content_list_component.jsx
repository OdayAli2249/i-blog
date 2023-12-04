import React, { useRef } from 'react';
import './modify_content_list_style.scss';
import PaginationComponent from '../core/pagination_components/pagination_component';
import PostCardComponent from '../cards/post_card_component';
import BlogCardComponent from '../cards/blog_card_component';
import StoryCardComponent from '../cards/story_card_component';
import EventCardComponent from '../cards/event_card_component';
import AdvertCardComponent from '../cards/advert_card_component';
import { blogsMiddleware } from '../../../redux/middlewares/blogs_middleware';
import { advertsMiddleware } from '../../../redux/middlewares/adverts_middleware';
import { eventsMiddleware } from '../../../redux/middlewares/events_middleware';
import { postsMiddleware } from '../../../redux/middlewares/posts_middleware';
import { storiesMiddleware } from '../../../redux/middlewares/stories_middleware';
import ButtonComponent from '../core/button_component';
import ChangePageComponent from '../core/pagination_components/pagination_change_page_component';
import { useDispatch } from 'react-redux';
import { modifyContentMiddleware } from '../../../redux/middlewares/modify_content_middleware';

function ModifyContentListComponent(props) {

    const contentRef = useRef(null);
    const dispatch = useDispatch();

    return (
        <div className='modify-content-list-root'>
            <ChangePageComponent onChanged={(page) => contentRef.current.changePage(page)} />
            <PaginationComponent
                ref={contentRef}
                initialView={{
                    grid: true,
                    list: false
                }}
                pageSize={3}                     // when start fetching data from I/O
                gridCardSize={'larg'}
                height='auto'                       // contatnt or auto
                width={'100%'}
                showView={false}
                showPages={false}
                fetchParams={{}}
                fetchData={props.type == 'post' ? postsMiddleware : props.type == 'blog' ?
                    blogsMiddleware : props.type == 'advert' ? advertsMiddleware :
                        props.type == 'story' ? storiesMiddleware : props.type == 'event' ?
                            eventsMiddleware : null}
                selectedState={props.type == 'post' ? state => state.posts : props.type == 'blog' ?
                    state => state.blogs : props.type == 'advert' ? state => state.adverts :
                        props.type == 'story' ? state => state.stories : props.type == 'event' ?
                            state => state.events : null}
                itemBuilder={(ID, contentObject, view) => {
                    if (props.type == 'post')
                        return <PostCardComponent
                            hideOptions={true}
                            hideInteractions={true}
                            height={view.list ? '280px' : '200px'}
                            showModify={true}
                            onModifyClicked={() => {
                                dispatch(modifyContentMiddleware({ content: contentObject.content }))
                            }}
                            onClick={() => { }}
                            selectionMod={false}
                            key={ID}
                            post={contentObject}
                            view={view} />
                    if (props.type == 'blog')
                        return <BlogCardComponent
                            hideOptions={true}
                            hideInteractions={true}
                            height={view.list ? '280px' : '200px'}
                            onClick={() => { }}
                            selectionMod={false}
                            key={ID}
                            blog={contentObject}
                            view={view} />
                    if (props.type == 'story')
                        return <StoryCardComponent
                            hideOptions={true}
                            hideInteractions={true}
                            height={view.list ? '280px' : '200px'}
                            onClick={() => { }}
                            selectionMod={false}
                            key={ID}
                            story={contentObject}
                            view={view} />
                    if (props.type == 'event')
                        return <EventCardComponent
                            hideOptions={true}
                            hideInteractions={true}
                            height={view.list ? '280px' : '200px'}
                            onClick={() => { }}
                            selectionMod={false}
                            key={ID}
                            event={contentObject}
                            view={view} />
                    if (props.type == 'advert')
                        return <AdvertCardComponent
                            hideOptions={true}
                            hideInteractions={true}
                            height={view.list ? '280px' : '200px'}
                            onClick={() => { }}
                            selectionMod={false}
                            key={ID}
                            advert={contentObject}
                            view={view} />
                }
                }
            />
        </div>
    );
}

export default ModifyContentListComponent;