import React, { useEffect, useRef, useState } from 'react';
import './channel_posts_page_style.scss';
import PaginationComponent from '../components/core/pagination_components/pagination_component';
import { postsMiddleware } from '../../redux/middlewares/posts_middleware';
import PostCardComponent from '../components/cards/post_card_component';
import ButtonComponent from '../components/core/button_component';
import { deleteContentMiddleware, initialState } from '../../redux/middlewares/delete_content_middleware';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DialogComponent from '../components/core/dialog_components/dialog_component';
import ContentDetailsComponent from '../components/content_details_component';
import { postOperationsMiddleware } from '../../redux/middlewares/post_operations_middleware';

function ChannelPostsPage(props) {

    const [selectMod, setSelectMod] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.deleteContent);
    const channelState = useSelector((state) => state.channel);
    const [showContentDetailDialog, setShowContentDetailDialog] = useState({ post: null, show: false });
    const contentRef = useRef(null);
    const { id } = useParams();

    useEffect(() => {
        if (state.success) {
            contentRef.current.refresh();
            setSelectMod(false);
            setSelectedItems([]);
            dispatch(initialState())
        }
    }, [state])

    return (
        <div className='channel-posts-root'>
            {channelState.data && channelState.data.item && channelState.data.item.userChannel.role == 'admin' &&
                selectedItems.length == 0 && <div className='delete-content-floating-select-button'
                    onClick={() => {
                        setSelectMod(!selectMod);
                        setSelectedItems([]);
                    }} />}
            {selectedItems.length != 0 && <div className='delete-content-floating-row' >
                <ButtonComponent
                    label={'confirm' + (state.failure ? ' Error' : '') + (state.loading ? ' Loading..' : '')}
                    onClicked={() => {
                        dispatch(deleteContentMiddleware({
                            id,
                            selectedItems
                        }))
                    }} />
                <ButtonComponent
                    onClicked={() => {
                        setSelectMod(false);
                        setSelectedItems([]);
                    }} />
            </div>}
            <PaginationComponent
                ref={contentRef}
                initialView={{
                    grid: true,
                    list: false
                }}
                pageSize={9}                     // when start fetching data from I/O
                gridCardSize={'larg'}
                height='auto'                       // contatnt or auto
                width={'100%'}
                showView={true}
                showPages={true}
                fetchParams={{}}
                fetchData={postsMiddleware}
                selectedState={state => state.posts}
                itemBuilder={(ID, post, view) =>
                    <PostCardComponent
                        // height={'240px'}
                        onClick={() => setShowContentDetailDialog({ post: post, show: true })}
                        selectionMod={selectMod}
                        key={ID}
                        post={post}
                        view={view}
                        onItemSelected={() => {
                            if (!selectedItems.includes(post.id))
                                setSelectedItems([...selectedItems, post.id])
                            else {
                                let newSelectedItems = [...selectedItems];
                                let indexToRemove = selectedItems.indexOf(post.id);
                                if (indexToRemove !== -1) {
                                    newSelectedItems.splice(indexToRemove, 1);
                                }
                                setSelectedItems(newSelectedItems)
                            }
                        }}
                        onShare={() => {
                            dispatch(postOperationsMiddleware({
                                interaction: 'share',
                                contentId: post.id,
                                isActive: !post.userContent ? false : post.userContent.share
                            }))
                        }}
                        onFavorite={() => {
                            dispatch(postOperationsMiddleware({
                                interaction: 'favorite',
                                contentId: post.id,
                                isActive: !post.userContent ? false : post.userContent.favorite
                            }))
                        }}
                        onSave={() => {
                            dispatch(postOperationsMiddleware({
                                interaction: 'save',
                                contentId: post.id,
                                isActive: !post.userContent ? false : post.userContent.save
                            }))
                        }}
                        selected={selectedItems.includes(post.id)} />}
            />
            {showContentDetailDialog.show &&
                <DialogComponent
                    show={showContentDetailDialog.show}
                    height='93'
                    width='96'
                    onClose={() => {
                        setShowContentDetailDialog({ post: null, show: false });
                    }}>
                    <ContentDetailsComponent content={showContentDetailDialog.post}
                        contentSource={state => state.postOperations} />
                </DialogComponent>}
        </div>
    );
}

export default ChannelPostsPage;