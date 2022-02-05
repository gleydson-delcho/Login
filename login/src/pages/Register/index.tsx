import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../../css/register.module.scss';
import { api } from '../../services/api';

type Values = {
  name: string;
  email: string;
  password: string;
}

export const Register: React.FC = () => {

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isNotCreate, setIsNotCreate] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwordPass, setPasswordPass] = useState<string>('');
  const [repeatPass, setRepeatPass] = useState<string>('');

  const register = async (event: FormEvent) => {
    event.preventDefault();

    const password = passwordPass;
    if (passwordPass === repeatPass) {
      const registerValues: Values = {
        name,
        email,
        password
      }
      
      setIsActive(true);
      await api.post("/users", registerValues);
      setTimeout(() => {
        setIsActive(false)
        navigate('/')
      }, 2000);
      }else {

        setIsNotCreate(true);
        setTimeout(() => {
          setIsNotCreate(false)
        }, 2000);
      }
    
  }

  return (

    <>
      {
        isActive &&
        <div className={Styles.success}>
          <p>Salvo com sucesso!</p>
        </div>
      }
      {
        isNotCreate &&
        <div className={Styles.error}>
          <p>Os dados não foram salvos!</p>
        </div>
      }
      <div className={Styles.registerForm}>
        <h2>Formulário de cadastro</h2>
        <form onSubmit={register}>
          <label htmlFor="name">Nome:</label>
          <input name="name" type="text" required onChange={e => { setName(e.target.value) }} />

          <label htmlFor="email">E-mail:</label>
          <input name="email" type="text" required onChange={e => { setEmail(e.target.value) }} />

          <label htmlFor="pass">Senha</label>
          <input name="password" type="password" required onChange={e => { setPasswordPass(e.target.value) }} />

          <label htmlFor="Repeatpass">Repetir senha</label>
          <input name="repeatPassword" type="password" required onChange={e => { setRepeatPass(e.target.value) }} />

          <button type="submit" onClick={() => register}>Cadastrar</button>
        </form>
      </div>
    </>

  );
}
