
import { apiService } from '../api';
import { API_ENDPOINTS } from '@/lib/config/api';
import { AUTH_CONFIG } from '@/lib/config/constants';
import type { LoginFormValues } from '@/lib/validations/auth';
import type { AuthResponse } from './types';

export async function login(data: LoginFormValues): Promise<AuthResponse> {
  // Send login request to backend
  const response = await apiService.post<AuthResponse>(
    API_ENDPOINTS.AUTH.LOGIN, 
    data
  );
  
  // Store auth data in localStorage
  if (response.token) {
    localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, response.token);
    localStorage.setItem(AUTH_CONFIG.USER_KEY, JSON.stringify(response.user));
  }
  
  return response;
}
