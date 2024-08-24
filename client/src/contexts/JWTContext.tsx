import React, {createContext, useReducer} from "react";
import {JWTContextType, ActionMap, AuthState, AuthUser} from "../types/auth";
import {isSessionExpired, setSession} from "../utils/auth";
import http from "../utils/http";
import {useNavigate, useLocation} from "react-router-dom";
import useAppDispatch from "../hooks/useAppDispatch";
import {setUser, unsetUser} from "../redux/slices/user/user";
import {route} from "../utils/url";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export type AuthActionTypes = {
    [SIGN_IN]: {
        user: AuthUser;
    };
    [SIGN_OUT]: undefined;
};

export const getInitialState = (): AuthState => {
    return {
        isAuthenticated: isSessionExpired(),
        isInitialized: false,
        user: null,
    };
};

export const JWTReducer = (
    state: AuthState,
    action: ActionMap<AuthActionTypes>[keyof ActionMap<AuthActionTypes>]
): AuthState => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
    }
};

const AuthContext = createContext<JWTContextType | null>(null);

type Props = {
    children: React.ReactElement;
};

function AuthProvider({children}: Props): React.ReactElement {
    const [state, dispatch] = useReducer(JWTReducer, getInitialState());
    const dispatchStore = useAppDispatch();
    const navigate = useNavigate();
    const {state: locationState}: any = useLocation();

    const signIn = async (username: string, password: string): Promise<any> => {
        const response = await http.post(`/auth/login`, {
            username,
            password,
        });
        if (response.status === 201) {
            const {access_token, token_expiration_date, data} =
                await response.json();
            setSession(access_token, token_expiration_date);
            dispatch({
                type: SIGN_IN,
                payload: {
                    user: data,
                },
            });
            dispatchStore(setUser(data));
            return navigate(locationState?.from || route("root"));
        } else {
            const {message} = await response.json();
            throw new Error(JSON.stringify({message, status: response?.status}));
        }
    };
    const signOut = async (): Promise<void> => {
        setSession(null, 0);
        dispatch({type: SIGN_OUT});
        dispatchStore(unsetUser());
    };
    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: "jwt",
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};
