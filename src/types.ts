export interface User {
  loginToken: string | null;
}

export interface UseAuth {
  user: User;
  onLogin: () => void;
  onLogout: () => void;
}
