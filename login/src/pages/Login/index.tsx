import { FormEvent, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/Auth';
import styles from '../../css/login.module.scss';


export const Login = () => {

  const navigate = useNavigate();
  const { signIn, user, isAuthenticated } = useContext(authContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await signIn({ email, password })
    } catch (error) {
      return (new Error("Algo deu errado!"))
    }
    navigate("/login")    
  }

  return (
    <div className="App">
      <div className={styles.loginArea}>
        <h1>LOGIN</h1>
        <form onSubmit={register}>
          <section className={styles.localName}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} />
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