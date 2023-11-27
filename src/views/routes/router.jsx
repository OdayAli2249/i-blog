import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayoutComponent from '../components/layouts/root_layout_component';
import HomePage from '../pages/home_page';
import AuthPage from '../pages/auth_page';
import ArchivesPage from '../pages/archives_page';
import FeedsPage from '../pages/feeds_page';
import ModifyContentPage from '../pages/modify_content_page';
import SearchContentPage from '../pages/search_content_page';
import ChannelAboutPage from '../pages/channel_about_page';
import ChannelAdminsPage from '../pages/channel_admins_page';
import ChannelAdvertsPage from '../pages/channel_adverts_page';
import ChannelBlogsPage from '../pages/channel_blogs_page';
import ChannelCategoriesPage from '../pages/channel_categories_page';
import ChannelEventsPage from '../pages/channel_events_page';
import ChannelJoinRequestsPage from '../pages/channel_join_requests_page';
import ChannelPostsPage from '../pages/channel_posts_page';
import ChannelStoriesPage from '../pages/channel_stories_page';
import ChannelDetailsHeaderComponent from '../components/layouts/channel_details_header_component';
import ProfileDetailsLayoutComponent from '../components/layouts/profile_details_layout_component';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayoutComponent />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/profile/:id' element={<ProfileDetailsLayoutComponent />}>
                <Route path='my-channels' element={<ArchivesPage />} />
                <Route path='shares' element={<ArchivesPage />} />
                <Route path='saves' element={<ArchivesPage />} />
                <Route path='favorites' element={<ArchivesPage />} />
                <Route path='create-channel' element={<ArchivesPage />} />
                <Route path='update' element={<ArchivesPage />} />
            </Route>
            <Route path='/feeds' element={<FeedsPage />} />
            <Route path='/modify-content' element={<ModifyContentPage />} />
            <Route path='/search-content' element={<SearchContentPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/channel/:id' element={<ChannelDetailsHeaderComponent />}>
                <Route path='about' element={<ChannelAboutPage />} />
                <Route path='admins' element={<ChannelAdminsPage />} />
                <Route path='adverts' element={<ChannelAdvertsPage />} />
                <Route path='blogs' element={<ChannelBlogsPage />} />
                <Route path='categories' element={<ChannelCategoriesPage />} />
                <Route path='events' element={<ChannelEventsPage />} />
                <Route path='join-requests' element={<ChannelJoinRequestsPage />} />
                <Route path='posts' element={<ChannelPostsPage />} />
                <Route path='stories' element={<ChannelStoriesPage />} />
            </Route>
            <Route path='*' element={<></>} />
        </Route>
    )
)

export default router;