import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { UserQuery, useUserQuery } from '../generated/graphql';
import { numberBetween } from '../utils/numberBetween';

export const UserContext = createContext<UserQuery['user_by_pk']>(null);

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};

export const UserProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<UserQuery['user_by_pk']>(
    localStorage.getItem('currentUser') &&
      JSON.parse(localStorage.getItem('currentUser')!),
  );
  const { current: currentUserId } = useRef(numberBetween(1, 20));
  const { refetch } = useUserQuery({
    variables: {
      currentUserId,
    },
  });
  useEffect(() => {
    if (!user) {
      refetch().then(({ data }) => {
        setUser(data.user_by_pk);
      });
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
