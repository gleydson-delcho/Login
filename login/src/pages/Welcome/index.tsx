import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/Auth';

// user.token estará disponível para ser utilizado apartir do componente authContext.

const Welcome: React.FC = () => {
  const { logout, user } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <>
    <h1>Bem vindo {user?.user.name}!</h1>
    <p>Parabéns você fez login!</p>
    <a href="/" onClick={handleLogout}>Logout</a>
    </>
  );
}

export default Welcome;