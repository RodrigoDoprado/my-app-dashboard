
export interface IUser {
    id?: number;
    img?: string;
    firstName?: string;
    lastName?: string;
    email?: any;
    token?: string;
    menssage?: string;
    password?: any;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}