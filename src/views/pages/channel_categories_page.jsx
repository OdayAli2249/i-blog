import React, { useState } from 'react';
import './channel_categories_page_style.scss';
import PaginationComponent from '../components/core/pagination_components/pagination_component';
import StoryCardComponent from '../components/cards/story_card_component';
import { postsMiddleware } from '../../redux/middlewares/posts_middleware';
import PostCardComponent from '../components/cards/post_card_component';
import EventCardComponent from '../components/cards/event_card_component';
import BlogCardComponent from '../components/cards/blog_card_component';
import AdvertCardComponent from '../components/cards/advert_card_component';
import ButtonComponent from '../components/core/button_component';
import { useParams } from 'react-router-dom';
import ContentDetailsComponent from '../components/content_details_component';
import DialogComponent from '../components/core/dialog_components/dialog_component';

function ChannelCategoriesPage(props) {

    const { id } = useParams();
    const [showContentDetailDialog, setShowContentDetailDialog] = useState({ id: null, show: false });

    return (
        <div className='channel-categories-root'>
            <div className='channel-category-row'>
                <h5 className='stadard-text'>+++++++</h5>
                <ButtonComponent type={'link'} to={'/channel/' + id + '/posts'} label={'+++++++'} />
            </div>
            <div className='channel-category-container'>
                <PaginationComponent
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
                    fetchData={postsMiddleware}
                    selectedState={state => state.posts}
                    itemBuilder={(ID, post, view) =>
                        <PostCardComponent
                            onClick={() => {
                                setShowContentDetailDialog({ show: true, id: post.id })
                            }}
                            height={'240px'}
                            key={ID}
                            post={post}
                            view={view} />}
                />
            </div>
            <div className='channel-category-row'>
                <h5 className='stadard-text'>+++++++</h5>
                <ButtonComponent type={'link'} to={'/channel/' + id + '/events'} label={'+++++++'} />
            </div>
            <div className='channel-category-container'>
                <PaginationComponent
                    initialView={{
                        grid: true,
                        list: false
                    }}
                    pageSize={3}                    // when start fetching data from I/O
                    gridCardSize={'larg'}
                    height='auto'                       // contatnt or auto
                    width={'100%'}
                    showView={false}
                    showPages={false}
                    fetchParams={{}}
                    fetchData={postsMiddleware}
                    selectedState={state => state.posts}
                    itemBuilder={(ID, post, view) =>
                        <EventCardComponent
                            onClick={() => {
                                setShowContentDetailDialog({ show: true, id: post.id })
                            }}
                            height={'240px'}
                            key={ID}
                            post={post}
                            view={view} />}
                />
            </div>
            <div className='channel-category-row'>
                <h5 className='stadard-text'>+++++++</h5>
                <ButtonComponent type={'link'} to={'/channel/' + id + '/stories'} label={'+++++++'} />
            </div>
            <div className='channel-category-container'>
                <PaginationComponent
                    initialView={{
                        grid: true,
                        list: false
                    }}
                    pageSize={3}                    // when start fetching data from I/O
                    gridCardSize={'larg'}
                    height='auto'                       // contatnt or auto
                    width={'100%'}
                    showView={false}
                    showPages={false}
                    fetchParams={{}}
                    fetchData={postsMiddleware}
                    selectedState={state => state.posts}
                    itemBuilder={(ID, post, view) =>
                        <StoryCardComponent
                            onClick={() => {
                                setShowContentDetailDialog({ show: true, id: post.id })
                            }}
                            height={'240px'}
                            key={ID}
                            post={post}
                            view={view} />}
                />
            </div>
            <div className='channel-category-row'>
                <h5 className='stadard-text'>+++++++</h5>
                <ButtonComponent type={'link'} to={'/channel/' + id + '/blogs'} label={'+++++++'} />
            </div>
            <div className='channel-category-container'>
                <PaginationComponent
                    initialView={{
                        grid: true,
                        list: false
                    }}
                    pageSize={3}                    // when start fetching data from I/O
                    gridCardSize={'larg'}
                    height='auto'                       // contatnt or auto
                    width={'100%'}
                    showView={false}
                    showPages={false}
                    fetchParams={{}}
                    fetchData={postsMiddleware}
                    selectedState={state => state.posts}
                    itemBuilder={(ID, post, view) =>
                        <BlogCardComponent
                            onClick={() => {
                                setShowContentDetailDialog({ show: true, id: post.id })
                            }}
                            height={'240px'}
                            key={ID}
                            post={post}
                            view={view} />}
                />
            </div>
            <div className='channel-category-row'>
                <h5 className='stadard-text'>+++++++</h5>
                <ButtonComponent type={'link'} to={'/channel/' + id + '/adverts'} label={'+++++++'} />
            </div>
            <div className='channel-category-container'>
                <PaginationComponent
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
                    fetchData={postsMiddleware}
                    selectedState={state => state.posts}
                    itemBuilder={(ID, post, view) =>
                        <AdvertCardComponent
                            onClick={() => {
                                setShowContentDetailDialog({ show: true, id: post.id })
                            }}
                            height={'240px'}
                            key={ID}
                            post={post}
                            view={view} />}
                />
            </div>
            {showContentDetailDialog.show &&
                <DialogComponent
                    show={showContentDetailDialog.show}
                    height='93'
                    width='96'
                    onClose={() => {
                        setShowContentDetailDialog({ id: null, show: false });
                    }}>
                    <ContentDetailsComponent contentId={showContentDetailDialog.id} />
                </DialogComponent>}
        </div>
    );
}

export default ChannelCategoriesPage;