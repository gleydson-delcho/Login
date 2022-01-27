import React from 'react';

import Styles  from '../../css/register.module.scss';

export const Register: React.FC = () => {
  return (

    <div className={Styles.registerForm}>
      <h2>Formulário de cadastro</h2>
      <form >
        <label htmlFor="name">Nome:</label>
        <input type="text" />

        <label htmlFor="email">E-mail:</label>
        <input type="text" />

        <label htmlFor="pass">Senha</label>
        <input type="password" />

        <label htmlFor="Repeatpass">Repetir senha</label>
        <input type="password" />

        <button>Enviar</button>
      </form>
    </div>

  );
}
