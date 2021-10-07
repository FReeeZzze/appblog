import React, { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { getMeProfile } from 'store/thunks/mainThunk';
import { getCookie } from 'utils/cookiesUtils';
import { authKey } from 'constants/cookies';

const Profile = () => {
    const { profile } = useSelector((state) => state.main);
    const auth = useContext(AuthContext);
    const dispatch = useDispatch();

    const handleLogout = () => {
        auth.logout();
    }

    React.useEffect(() => {
        const token = getCookie(authKey);
        if (token) {
            dispatch(getMeProfile(token))
        }
    }, [dispatch])

    return (
        <div className="d-flex ml-auto justify-content-end align-items-center">
            <div className="display-6 mr-3 ml-5">
                {Object.keys(profile).length > 0 && profile.name}
            </div>
            <button 
                className="btn btn-primary" 
                onClick={handleLogout}
            >
                Выйти
            </button>
        </div>
    )
}

export default Profile;