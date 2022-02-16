import React, {useContext} from 'react';
import { authContext } from '../../contexts/Auth';

const ProtectdLayout = ({children}: {children: JSX.Element}) => {
  const auth = useContext(authContext);

  if(auth.user?.auth !== true) {
    return (
      <h1>You don't have acess | Acess denied</h1>
    )
  }

  return children;
}

export default ProtectdLayout;