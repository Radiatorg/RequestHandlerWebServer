export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  login: string;
  role: string;
}

export interface AuthState {
  user: { login: string; role: string } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
