export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const SIGNIN = 'SIGN_IN';
export const SIGNOUT = 'SIGN_OUT';

export interface User {
    id: string;
    name: string;
    email: string;
  }

interface AuthState {
    userToken: string | null;
    user: User | null;
}

type AuthAction =
  | { type: 'SIGN_IN'; token: string; user: User }
  | { type: 'SIGN_OUT' }
  | { type: 'RESTORE_TOKEN'; token: string };

export const initialState: AuthState = {
    userToken: null,
    user: null,
  };  

const AuthReducer = (prevState: AuthState, action: AuthAction): AuthState => {
    switch(action.type){
        case RESTORE_TOKEN:{
            return{
                ...prevState,
                userToken: action.token
            }
        }
        case SIGNIN:{
            return{
                ...prevState,
                userToken: action.token,
                user: action.user
            }
        }
        case SIGNOUT:{
            return{
                ...prevState,
                userToken: null,
                user: null
            }
        }
        default:
            return prevState;   
    }
}

export default AuthReducer