import { useState } from "react";
import type { LoginRequest, LoginResponse, AuthState } from "../types/auth";
import { login as loginApi } from "../api/auth";

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    loading: false,
    error: null,
  });

const login = async (data: LoginRequest) => {
  console.log("useAuth.login вызван", data); // <- проверка входящих данных
  setState(prev => ({ ...prev, loading: true, error: null }));
  try {
    const res: LoginResponse = await loginApi(data);
    console.log("Login успешен", res); // <- сервер вернул данные
    setState({
      user: { login: res.login, role: res.role },
      token: res.token,
      loading: false,
      error: null
    });
  } catch (err: any) {
    console.error("Login ошибка", err); // <- ловим ошибки fetch
    setState(prev => ({ ...prev, loading: false, error: err.message }));
  }
};


  return { ...state, login };
}
