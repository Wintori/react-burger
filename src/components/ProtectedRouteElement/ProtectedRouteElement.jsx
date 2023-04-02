import { Navigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

export function ProtectedRouteElement({ element }) {
    if(!getCookie("accessToken")) {
        return <Navigate to="/login" replace/>
    } else {
        return element
    }
}