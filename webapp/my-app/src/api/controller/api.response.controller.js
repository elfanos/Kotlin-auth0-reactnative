/**
 * Created by Rasmus on 2018-05-06.
 */
export const responseResolvedAsJson = ( response ) => {
    if(!response.ok){
        return Promise.reject(response.statusText).json();
    }else{
        return response.json();
    }
};