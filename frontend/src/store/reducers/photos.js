export const GET_PHOTOS = 'GET_PHOTOS';
export const SAVE_PHOTO = 'SAVE_PHOTO';

const receivePhotos  = (photos) => {
    console.log('receive photos', photos)
    return {
        type: GET_PHOTOS,
        photos
    }
}

export const getPhotos = (userid) => {
    console.log('in get photos', userid)
    return async (dispatch) => {
        const res = await fetch(`/api/package/photos/${userid}`);
        const data = await res.json();
        dispatch(receivePhotos(data));
        console.log('DATA', data)
        return data;
    }
}

const initialState = {photos: []}

export default function reducer(state=initialState, action) {
    Object.freeze(state);
    switch(action.type) {
        case GET_PHOTOS:
            return {...state, photos: action.photos}
        default:
            return state
    }
}
