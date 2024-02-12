import React, { useState } from 'react';
import './search_content_page_style.scss';
import SearchControlComponent from '../components/core/input_components/controls/search_control_component';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FiltersPopUp from '../components/pop_up_component';
import MultipleSelectionComponent from '../components/core/multiple_selection_component';
import ButtonComponent from '../components/core/button_component';
import { postsMiddleware } from '../../redux/middlewares/posts_middleware';
import PaginationComponent from '../components/core/pagination_components/pagination_component';
import AdvertCardComponent from '../components/cards/advert_card_component';
import BlogCardComponent from '../components/cards/blog_card_component';
import PostCardComponent from '../components/cards/post_card_component';
import StoryCardComponent from '../components/cards/story_card_component';
import EventCardComponent from '../components/cards/event_card_component';
import DialogComponent from '../components/core/dialog_components/dialog_component';
import ContentDetailsComponent from '../components/content_details_component';
import PopUpComponent from '../components/pop_up_component';

function SearchContentPage(props) {

    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const navigator = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const type = searchParams.get('type');

    return (
        <div className='search-content-root'>
            <div className='search-content-top-bar'>
                <div className='search-content-top-bar-first-section'>
                    <div className='search-content-top-bar-filters-container'>
                        <div className='search-content-top-bar-filters'>
                            {showOptionsPopUp === true && <PopUpComponent />}
                            <div className="filters-button" onClick={() => setShowOptionsPopUp(!showOptionsPopUp)}></div>
                            <SearchControlComponent show={true} onSearchClicked={(query) => { }} />
                        </div>
                    </div>
                </div>
                <div className='search-content-top-bar-second-section'></div>
            </div>
            <div className='search-content-side-bar'>
                <MultipleSelectionComponent key={'first'} selectedOption={category} title={'+++++'} options={['++++', '++++++', '++++', '+++++++']}
                    onOptionClicked={option => navigator('/search-content?type=' + type + '&category=' + option)} />
                <div className='divider'></div>
                <MultipleSelectionComponent key={'second'} selectedOption={type} title={'+++++'} options={['++++', '++++++', '++++', '+++++++']}
                    onOptionClicked={option => navigator('/search-content?type=' + option + '&category=' + category)} />
                <div className='divider'></div>
                <ButtonComponent
                    onClicked={() => navigator('/search-content?type=0&category=0')}
                />
            </div>
            <div className='search-content-body'>
                <div className='search-content-row'>
                    <div className='search-content-list-container'>
                        <PaginationComponent
                            initialView={{
                                grid: true,
                                list: false
                            }}
                            pageSize={8}                     // when start fetching data from I/O
                            gridCardSize={'larg'}
                            height='auto'                       // contatnt or auto
                            width={'100%'}
                            showView={true}
                            showPages={true}
                            fetchParams={{ type, category }}
                            fetchData={postsMiddleware}
                            selectedState={state => state.posts}
                            itemBuilder={(ID, post, view) =>
                                <StoryCardComponent
                                    // height={'240px'}
                                    key={ID}
                                    story={post}
                                    view={view} />}
                        />
                    </div>
                    <div className='search-content-side-bar-place-holder'>

                    </div>
                </div>
            </div>
            <DialogComponent
                show={false}
                height='93'
                width='96'
                onClose={() => { }}>
                {/* <ContentDetailsComponent /> */}
            </DialogComponent>
        </div>
    );
}

export default SearchContentPage;