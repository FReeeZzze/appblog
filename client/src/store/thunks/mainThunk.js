import { actions } from '../reducers/mainReducer';
import { getCookie } from 'utils/cookiesUtils';
import { authKey } from 'constants/cookies';
import { Upload, User } from 'api';

export const uploadMedia = (file) => async dispatch => {
    try {
        const token = getCookie(authKey);
        const { result } = await Upload.uploadMedia(file, token);
        dispatch(actions.setUpload(result));
    } catch (e) {
        console.log(e.message)
    }
}

export const getMeProfile = (token) => async dispatch => {
    try {
        const { result } = await User.getMe(token)
        dispatch(actions.setProfile(result))
    } catch (e) {
        console.log(e.message)
    }
}
