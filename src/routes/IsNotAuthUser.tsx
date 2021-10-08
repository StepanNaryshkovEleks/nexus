import {Redirect, Route} from 'react-router-dom';
import CNST from '../constants/app';
import {useStore} from "../store";


interface Props {
  component: React.ComponentType<any>;
  exact?: boolean;
  path?: string;
}

const IsNotAuthUser = ({component: Component, ...rest}: Props) => {
  const {user} = useStore();
  return (
    <Route
      {...rest}
      render={(props) =>
        !user.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={CNST.ROUTE.DASHBOARD} />
        )
      }
    />
  );
};

export default IsNotAuthUser;
