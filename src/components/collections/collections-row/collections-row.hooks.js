import { useState, useReducer } from 'react';

function _toInitialFilterState(filters, activeFilterId) {
    const state = filters.reduce((acc, filter) => {
        acc[filter.id] = {
            ...filter,
            isActive: (filter.id === activeFilterId)
        }

        return acc;
    }, {});

    return state;
}

function _cloneAndSetActive(oldState, newActive) {
    // clone the state
    const newState = { ...oldState };
    // find the currently active filter
    const currentlyActive = Object.keys(newState).find(filterId => newState[filterId].isActive);

    // switch active filter
    newState[currentlyActive].isActive = false;
    newState[newActive].isActive     = true;

    return newState;
}

function _filterReducer(state, action) {
    switch (action.type) {
        case 'activate_filter':
            return _cloneAndSetActive(state, action.filterId);

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