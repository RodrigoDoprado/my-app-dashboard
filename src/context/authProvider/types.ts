
export interface IUser {
    id?: string;
    avatar?: string;
    name?: string;
    email?: string;
    token?: string;
    menssage?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}