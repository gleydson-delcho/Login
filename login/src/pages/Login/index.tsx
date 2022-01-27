import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/login.module.scss';

export const Login= () => {
  return (
    <div className="App">
      <div className={styles.loginArea}>
        <h1>LOGIN</h1>
        <form >
          <section className={styles.localName}>
            <label htmlFor="name">Usuários:</label>
            <input type="text" name="name" id="name" />
          </section>
          <section className={styles.localPass}>
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" />
          </section>
          <span>
            <Link to="#">esqueci minha senha</Link>
            <button>login</button>
          </span>
          <Link to="/register">cadastrar</Link>
        </form>
      </div>
    </div>
  );
}