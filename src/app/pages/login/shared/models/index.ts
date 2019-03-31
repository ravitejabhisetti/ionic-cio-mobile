export interface LoginState {
    loaded: boolean;
    loading: boolean;
    token: string;
}

export interface LoginModuleState {
    loginModule: LoginState;
}

export interface LoginResponse {
    id_token: string;
}
