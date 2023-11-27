import React, { useEffect, useRef, useState } from 'react';
import './archives_page_style.scss';
import SpaceComponent from '../components/core/space_component';
import PaginationComponent from '../components/core/pagination_components/pagination_component';
import { userSavesMiddleware } from '../../redux/middlewares/user_saves_middleware';
import DialogComponent from '../components/core/dialog_components/dialog_component';
import ContentDetailsComponent from '../components/content_details_component';
import PostCardComponent from '../components/cards/post_card_component';
import { useLocation, useSearchParams } from 'react-router-dom';
import { userFavoritesMiddleware } from '../../redux/middlewares/user_favorites_middleware';
import { userChannelsMiddleware } from '../../redux/middlewares/user_channels_middleware';
import { userSharesMiddleware } from '../../redux/middlewares/user_shares_middleware';
import BlogCardComponent from '../components/cards/blog_card_component';
import StoryCardComponent from '../components/cards/story_card_component';
import EventCardComponent from '../components/cards/event_card_component';
import AdvertCardComponent from '../components/cards/advert_card_component';

function ArchivesPage(props) {

    const [showContentDetailDialog, setShowContentDetailDialog] = useState({ content: null, show: false });
    const location = useLocation();
    const [archiveType, setArchiveType] = useState(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const pathSectors = location.pathname.split('/');
        if (pathSectors.length > 3)
            setArchiveType(pathSectors[3]);
    }, [])

    const [searchParams, setSearchParams] = useSearchParams();
    var contentType = searchParams.get('type');

    useEffect(() => {
        if (contentRef.current)
            contentRef.current.refresh({contentType});
    }, [contentType])

    return (
        <div className='archives-root'>
            <SpaceComponent height={'40px'} />
            <div className='archives-box'>
                <div className='archives-header'>

                </div>
                {archiveType && <PaginationComponent
                    ref={contentRef}
                    initialView={{
                        grid: true,
                        list: false
                    }}
                    pageSize={6}                     // when start fetching data from I/O
                    gridCardSize={'larg'}
                    height='auto'                       // contatnt or auto
                    width={'100%'}
                    showView={true}
                    showPages={true}
                    fetchParams={{ contentType }}
                    fetchData={archiveType == 'saves' ? userSavesMiddleware : archiveType == 'favorites' ?
                        userFavoritesMiddleware : archiveType == 'shares' ? userSharesMiddleware : archiveType == 'my-channels' ?
                            userChannelsMiddleware : null}
                    selectedState={archiveType == 'saves' ? state => state.userSaves : archiveType == 'favorites' ?
                        state => state.userFavorites : archiveType == 'shares' ? state => state.userShares :
                            archiveType == 'my-channels' ? state => state.userChannels : null}
                    itemBuilder={(ID, archive, view) => {
                        if (archive.content.name.slice(0, -1) == 'post')
                            return <PostCardComponent
                                hideOptions={true}
                                hideInteractions={true}
                                height={view.list ? '280px' : '200px'}
                                onClick={() => setShowContentDetailDialog({ content: archive.content, show: true })}
                                // selectionMod={selectMod}
                                selectionMod={false}
                                key={ID}
                                post={archive.content}
                                view={view}
                            // onItemSelected={() => {
                            //     if (!selectedItems.includes(post.id))
                            //         setSelectedItems([...selectedItems, post.id])
                            //     else {
                            //         let newSelectedItems = [...selectedItems];
                            //         let indexToRemove = selectedItems.indexOf(post.id);
                            //         if (indexToRemove !== -1) {
                            //             newSelectedItems.splice(indexToRemove, 1);
                            //         }
                            //         setSelectedItems(newSelectedItems)
                            //     }
                            // }}
                            // selected={selectedItems.includes(post.id)}
                            />
                        if (archive.content.name.slice(0, -1) == 'blog')
                            return <BlogCardComponent
                                hideOptions={true}
                                hideInteractions={true}
                                height={view.list ? '280px' : '200px'}
                                onClick={() => setShowContentDetailDialog({ content: archive.content, show: true })}
                                // selectionMod={selectMod}
                                selectionMod={false}
                                key={ID}
                                blog={archive.content}
                                view={view}
                            // onItemSelected={() => {
                            //     if (!selectedItems.includes(post.id))
                            //         setSelectedItems([...selectedItems, post.id])
                            //     else {
                            //         let newSelectedItems = [...selectedItems];
                            //         let indexToRemove = selectedItems.indexOf(post.id);
                            //         if (indexToRemove !== -1) {
                            //             newSelectedItems.splice(indexToRemove, 1);
                            //         }
                            //         setSelectedItems(newSelectedItems)
                            //     }
                            // }}
                            // selected={selectedItems.includes(post.id)}
                            />
                        if (archive.content.name.slice(0, -1) == 'story')
                            return <StoryCardComponent
                                hideOptions={true}
                                hideInteractions={true}
                                height={view.list ? '280px' : '200px'}
                                onClick={() => setShowContentDetailDialog({ content: archive.content, show: true })}
                                // selectionMod={selectMod}
                                selectionMod={false}
                                key={ID}
                                story={archive.content}
                                view={view}
                            // onItemSelected={() => {
                            //     if (!selectedItems.includes(post.id))
                            //         setSelectedItems([...selectedItems, post.id])
                            //     else {
                            //         let newSelectedItems = [...selectedItems];
                            //         let indexToRemove = selectedItems.indexOf(post.id);
                            //         if (indexToRemove !== -1) {
                            //             newSelectedItems.splice(indexToRemove, 1);
                            //         }
                            //         setSelectedItems(newSelectedItems)
                            //     }
                            // }}
                            // selected={selectedItems.includes(post.id)}
                            />
                        if (archive.content.name.slice(0, -1) == 'event')
                            return <EventCardComponent
                                hideOptions={true}
                                hideInteractions={true}
                                height={view.list ? '280px' : '200px'}
                                onClick={() => setShowContentDetailDialog({ content: archive.content, show: true })}
                                // selectionMod={selectMod}
                                selectionMod={false}
                                key={ID}
                                event={archive.content}
                                view={view}
                            // onItemSelected={() => {
                            //     if (!selectedItems.includes(post.id))
                            //         setSelectedItems([...selectedItems, post.id])
                            //     else {
                            //         let newSelectedItems = [...selectedItems];
                            //         let indexToRemove = selectedItems.indexOf(post.id);
                            //         if (indexToRemove !== -1) {
                            //             newSelectedItems.splice(indexToRemove, 1);
                            //         }
                            //         setSelectedItems(newSelectedItems)
                            //     }
                            // }}
                            // selected={selectedItems.includes(post.id)}
                            />
                        if (archive.content.name.slice(0, -1) == 'advert')
                            return <AdvertCardComponent
                                hideOptions={true}
                                hideInteractions={true}
                                height={view.list ? '280px' : '200px'}
                                onClick={() => setShowContentDetailDialog({ content: archive.content, show: true })}
                                // selectionMod={selectMod}
                                selectionMod={false}
                                key={ID}
                                advert={archive.content}
                                view={view}
                            // onItemSelected={() => {
                            //     if (!selectedItems.includes(post.id))
                            //         setSelectedItems([...selectedItems, post.id])
                            //     else {
                            //         let newSelectedItems = [...selectedItems];
                            //         let indexToRemove = selectedItems.indexOf(post.id);
                            //         if (indexToRemove !== -1) {
                            //             newSelectedItems.splice(indexToRemove, 1);
                            //         }
                            //         setSelectedItems(newSelectedItems)
                            //     }
                            // }}
                            // selected={selectedItems.includes(post.id)}
                            />
                    }
                    }
                />}
            </div>
            <SpaceComponent height={'20px'} />
            {showContentDetailDialog.show &&
                <DialogComponent
                    show={showContentDetailDialog.show}
                    height='93'
                    width='96'
                    onClose={() => {
                        setShowContentDetailDialog({ content: null, show: false });
                    }}>
                    <ContentDetailsComponent content={showContentDetailDialog.content}
                        contentSource={state => state.default} hideOptions={true} />
                </DialogComponent>}
        </div>
    );
}

export default ArchivesPage;