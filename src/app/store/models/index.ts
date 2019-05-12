export interface AppState {
    modalData: ModalData;
    modalDataArray: any[];
}

export interface ModalData {
    modalItem: any;
    modalItemIndex: any;
}

export interface AppModuleState {
    AppModule: AppState;
}
