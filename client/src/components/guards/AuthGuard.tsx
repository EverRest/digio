import * as React from "react";
import {Navigate} from "react-router-dom";
import {isSessionExpired} from "../../utils/auth";

interface AuthGuardType {
    children: React.ReactNode;
}

/* istanbul ignore next */
function AuthGuard({children}: AuthGuardType): React.ReactElement {
    if (isSessionExpired()) {
        window.localStorage.removeItem("tokenExpirationDate");
        window.localStorage.removeItem("accessToken");
        return (
            <Navigate to={`/auth/sign-in`} state={{from: location.pathname}}/>
        );
    }
    return <>{children}</>;
}

export default AuthGuard;
