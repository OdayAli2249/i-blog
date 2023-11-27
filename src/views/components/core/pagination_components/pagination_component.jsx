import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './pagination_component.scss'
import PaginationBodyComponent from './pagination_body_component';
import PaginationViewComponent from './pagination_view_component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faAdd } from '@fortawesome/free-solid-svg-icons';
import SpaceComponent from '../space_component';
import ShimmerCardComponent from '../state_components/shimmer_card_component';
import ErrorComponent from '../state_components/error_component';
import NoDataComponent from '../state_components/no_data_component';
import { useDispatch, useSelector } from 'react-redux';


const PaginationComponent = forwardRef((props, ref) => {

    const state = useSelector(props.selectedState);

    const pagesRef = useRef(null);
    const [filterData, setFilterData] = useState({ ...props.fetchParams, offset: 0, limit: props.pageSize });
    const dispatch = useDispatch();

    const refresh = (refreshParams) => {
        var newFilterData = { ...filterData, ...refreshParams, offset: 0, pageNumber: 0, byRefresh: true };
        setFilterData(newFilterData);
        dispatch(props.fetchData(newFilterData))
        pagesRef.current.reset()
    };

    const changePage = (pageNumber) => {
        setFilterData({
            ...filterData,
            offset: (pageNumber - 1) * props.pageSize,
            limit: props.pageSize
        });
        dispatch(props.fetchData({
            ...filterData,
            offset: (pageNumber - 1) * props.pageSize,
            limit: props.pageSize
        }));
    }

    React.useImperativeHandle(ref, () => ({
        refresh,
        changePage
    }));

    const [view, setView] = useState(
        props.initialView
    );

    return (
        <div className='pagiantion-component-root'
            style={{ width: props.width }}
            id={props.id}>
            {props.showView ?
                <PaginationViewComponent
                    initialView={view}
                    onViewChanged={(view) => {
                        setView(view)
                        console.log(view)
                    }} /> : <></>}
            <PaginationBodyComponent
                ref={pagesRef}
                onIndicecsChanged={(pageNumber) => {
                    setFilterData({
                        ...filterData,
                        offset: (pageNumber - 1) * props.pageSize,
                        limit: props.pageSize
                    });
                    dispatch(props.fetchData({
                        ...filterData,
                        offset: (pageNumber - 1) * props.pageSize,
                        limit: props.pageSize
                    }));
                }}
                view={view.list || state.failure ||
                    (state.data != null && state.data.items != null && state.data.items.length == 0) ? 'list' : 'grid'}
                gridCardSize={props.gridCardSize}
                height={props.height}                      // constant or auto
                showPages={props.showPages}>
                {state.failure ? <ErrorComponent message={state.failure.message} onRetry={() => {
                    dispatch(props.fetchData(filterData));
                }} /> :
                    state.data && state.data.items.length == 0 ? <NoDataComponent /> :
                        Array.from({
                            length:
                                state.data && state.data.items ? Math.min(props.pageSize, state.data.items.length)
                                    : props.pageSize
                        },
                            (_, index) => index).map((index) =>
                                view.list ? <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                    {state.loading ? <ShimmerCardComponent type={'list'} /> :
                                        props.itemBuilder(null, state.data.items[index], view)}
                                    <SpaceComponent height={'10px'} />
                                </div> : state.loading ? <ShimmerCardComponent key={index} type={'grid'} /> :
                                    props.itemBuilder(index, state.data.items[index], view)
                            )
                }
            </PaginationBodyComponent>
        </div>
    );
})

export default PaginationComponent;