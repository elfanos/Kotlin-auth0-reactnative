
export const callBackUri = () => {  return  '/api/spotify/callback/uri'; };

export const authenticationToken = ( code ) => {    return  '/api/spotify/token/' + code; };