import { AppActions } from '../actions';
import { AppState } from '../models';

const initialState: AppState = {
    modalDataArray: [],
    modalData: {
        modalItem: null,
        modalItemIndex: null
    }
};

export function AppReducers(state: AppState = initialState, action: AppActions.All) {
    switch (action.type) {
        case AppActions.UPDATE_MODAL_DATA:
            const localModalData = { modalItem: action.payload.modalObject, modalItemIndex: action.payload.modalDataIndex };
            console.log('local object to check---', localModalData);
            console.log('assign check---', Object.assign({}, state, { modalData: localModalData }));
            return Object.assign({}, state, { modalData: localModalData });
        case AppActions.UPDATE_MODAL_DATA_ARRAY:
            return Object.assign({}, state, { modalDataArray: action.payload });
        default:
            return state;
    }
}
