const types = {
    SET_UPLOAD: 'main/SET_UPLOAD',
    SET_PROFILE: 'main/SET_PROFILE'
  };
  
  const init = {
    upload: {},
    profile: {}
  };
  
  export default function mainReducer(state = init, action) {
    const { type, payload } = action;
    if (type === types.SET_UPLOAD) {
      return { ...state, upload: payload };
    }
    if (type === types.SET_PROFILE) {
      return { ...state, profile: payload };
    }
    return state;
  }
  
  export const actions = {
    setUpload: (upload) => ({
      type: types.SET_UPLOAD,
      payload: upload,
    }),
    setProfile: (profile) => ({
      type: types.SET_PROFILE,
      payload: profile
    })
  };
  