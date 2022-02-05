import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/login.module.scss';

type Data = {
  email: string;
  password: string;
}

export const Login= () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const register = async (event: FormEvent) => {
      event.preventDefault();
      const data: Data = {
        email,
        password
      }

    }


  return (
    <div className="App">
      <div className={styles.loginArea}>
        <h1>LOGIN</h1>
        <form onSubmit={register}>
          <section className={styles.localName}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email"  onChange={e => setEmail(e.target.value)}/>
          </section>
          <section className={styles.localPass}>
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
          </section>
          <span>
            <Link to="#">esqueci minha senha</Link>
            <button type='submit'>login</button>
          </span>
          <Link to="/register">cadastrar</Link>
        </form>
      </div>
    </div>
  );
}