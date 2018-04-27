/**
 * Created by Rasmus on 2018-04-21.
 */
import { login } from '../states/actions/auth.action';
import HomeView from '../Components/Home/HomeView';
import LoginView from '../Components/LoginView'
import * as spotify from '../backend-api/spotify.api.constants';
import { spotifyTokens } from '../api/spotify/spotify.auth';
import { initialize } from '../states/actions/user.action';

export default { login, 
    HomeView, LoginView, spotify, spotifyTokens, initialize };

