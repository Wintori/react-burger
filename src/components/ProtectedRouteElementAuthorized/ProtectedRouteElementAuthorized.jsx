import { Navigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

export function ProtectedRouteElementAuthorized({ element }) {
    if(getCookie("accessToken")) {
        return <Navigate to="/" replace/>
    } else {
        return element
    }
}