import { getModalData } from './../reducers/index';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppModuleState } from '../models';
import { AppActions } from '../actions';
import { getModalDataItem } from '../reducers';

@Injectable()
export class UserCommonService {
    constructor(private store: Store<AppModuleState>) { }

    updateModalData(modalData, modalDataIndex) {
        console.log('modal data is---', modalData);
        console.log('index to che k is---', modalDataIndex);
        this.store.dispatch(new AppActions.UpdateModalData({ modalObject: modalData, modalDataIndex: modalDataIndex }));
    }

    updateModalDataArray(dataArray) {
        this.store.dispatch(new AppActions.UpdateModalDataArray(dataArray));
    }

    getModalDataItem() {
        return this.store.select(getModalDataItem);
    }

    getModalData() {
        return this.store.select(getModalData);
    }
}
