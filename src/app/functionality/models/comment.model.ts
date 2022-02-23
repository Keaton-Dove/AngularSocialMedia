import { Profile } from './profile.model';

export interface Comment {
    content: string;
    datePosted: string;
    poster: Profile;
}