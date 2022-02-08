import {User} from '@supabase/supabase-js';
import {Profile} from './Profile';

export type UserWithProfile = User & {profile: Profile};
