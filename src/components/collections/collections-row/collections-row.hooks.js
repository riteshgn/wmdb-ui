import { useState, useReducer } from 'react';

function _toInitialFilterState(filters, activeFilterId) {
    // changes the filters from an array to a dictionary format
    // this makes it easy to lookup the filters by id
    // and manipulate the state as required

    const state = filters.reduce((acc, filter) => {
        acc[filter.id] = {
            ...filter,
            isActive: (filter.id === activeFilterId)
        }

        return acc;
    }, {});

    return state;
}

function _cloneAndSetNewActive(oldState, toBeActivated) {
    // find the currently active filter
    const currentlyActive = Object.keys(oldState).find(filterId => oldState[filterId].isActive);

    // modify only the affected filters
    // so set initial value to the old state
    const newState = oldState;

    // clone the currently active filter and reset its active status
    newState[currentlyActive] = {
        ...oldState[currentlyActive],
        isActive: false
    }

    // clone the to-be-activated filter and set its active status
    newState[toBeActivated] = {
        ...oldState[toBeActivated],
        isActive: true
    }

    return newState;
}

function _filterReducer(state, action) {
    switch (action.type) {
        case 'activate_filter':
            return _cloneAndSetNewActive(state, action.filterId);

        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
}

export function useCategoryFilters(filters) {
    const [activeFilterId, setActiveFilterId] = useState(filters.length ? filters[0].id : "__nofilter__");
    const [state, dispatch] = useReducer(_filterReducer, _toInitialFilterState(filters, activeFilterId));

    function __activateFilter(filter) {
        dispatch({ type: 'activate_filter', filterId: filter.id });
        setActiveFilterId(filter.id);
    }

    return {
        filters: state,
        activeFilterId,
        activateFilter: __activateFilter
    };
}