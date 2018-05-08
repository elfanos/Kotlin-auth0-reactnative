
export const callBackUri = () => {  return  '/api/spotify/callback/uri'; };

export const authenticationToken = ( code ) => {    return  '/api/spotify/token/' + code; };

export const currentUserData = ( accessToken ) => { return '/api/spotify/user/' + accessToken; };