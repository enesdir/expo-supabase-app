import {useEffect} from 'react';
import {supabase} from '../utils/supabase';
import {useSelector, useDispatch} from '../stores';
import {setUser, clearUser} from '../stores/userSlice';

export const useAuthState = () => {
  const user = useSelector(state => state.user.user);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    const {data: authListener} = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        console.log(session);
        dispatch(
          setUser({
            uid: session.user.id,
          }),
        );
      } else {
        console.log('hook:hata');
        dispatch(clearUser());
      }
    });
    return () => {
      authListener?.unsubscribe();
    };
  }, []);
  return {
    user,
  };
};
