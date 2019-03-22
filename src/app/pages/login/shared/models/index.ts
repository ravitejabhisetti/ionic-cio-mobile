export interface LoginState {
    loaded: boolean;
    loading: boolean;
    token: string;
}

export interface LoginModuleState {
    loginModule: LoginState;
}

export interface loginResponse {
    id_token: string;
}