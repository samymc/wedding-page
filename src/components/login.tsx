import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from './button';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const [error, setError] = useState('');

  // Maneja el cambio de la contraseña
  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Maneja el cambio del reCAPTCHA
  const handleCaptchaChange = (value:any) => {
    if (value) {
      setCaptchaValid(true);
      setError('');
    } else {
      setCaptchaValid(false);
    }
  };

  // Validación y envío del formulario
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!captchaValid) {
      setError('Por favor, completa el reCAPTCHA.');
      return;
    }

    if (password === '') {
      setError('Por favor, ingresa tu contraseña.');
      return;
    }

    // Aquí podrías agregar la lógica para enviar la contraseña a tu backend
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {/* reCAPTCHA de Google */}
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="TU_SITE_KEY_AQUÍ"
            onChange={handleCaptchaChange}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <Button type="submit">Iniciar sesión</Button>
      </form>
    </div>
  );
};

export default Login;