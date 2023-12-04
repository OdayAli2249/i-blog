import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/posts_reducer';
import { commentReducer } from './reducers/comments_reducer';
import { channelReducer } from './reducers/channel_reducer';
import { deleteContentReducer } from './reducers/delete_content_reducer';
import { advertOperationsReducer } from './reducers/advert_operations_reducer';
import { blogOperationsReducer } from './reducers/blog_operations_reducer';
import { eventOperationsReducer } from './reducers/event_operations_reducer';
import { postOperationsReducer } from './reducers/post_operations_reducer';
import { storyOperationsReducer } from './reducers/story_operations_reducer';
import { storiesReducer } from './reducers/stories_reducer';
import { blogsReducer } from './reducers/blogs_reducer';
import { eventsReducer } from './reducers/events_reducer';
import { advertsReducer } from './reducers/adverts_reducer';
import { joinRequestsReducer } from './reducers/join_requests_reducer';
import { userChannelsReducer } from './reducers/user_channels_reducer';
import { userSharesReducer } from './reducers/user_shares_reducer';
import { userSavesReducer } from './reducers/user_saves_reducer';
import { userFavoritesReducer } from './reducers/user_favorites_reducer';
import { defaultReducer } from './reducers/default_reducer';
import { userReducer } from './reducers/user_reducer';
import { futureEventsReducer } from './reducers/future_events_reducer';
import { modifyContentReducer } from './reducers/modify_content_reducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    stories: storiesReducer,
    blogs: blogsReducer,
    events: eventsReducer,
    adverts: advertsReducer,
    comments: commentReducer,
    channel: channelReducer,
    deleteContent: deleteContentReducer,
    advertOperations: advertOperationsReducer,
    blogOperations: blogOperationsReducer,
    eventOperations: eventOperationsReducer,
    postOperations: postOperationsReducer,
    storyOperations: storyOperationsReducer,
    joinRequests: joinRequestsReducer,
    userChannels: userChannelsReducer,
    userShares: userSharesReducer,
    userSaves: userSavesReducer,
    userFavorites: userFavoritesReducer,
    default: defaultReducer,
    user: userReducer,
    futureEvents: futureEventsReducer,
    modifyContent: modifyContentReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

