import { Profile } from './profile.model';

export interface Post {
    username: string;
    picture: string;
    poster: Profile;
}