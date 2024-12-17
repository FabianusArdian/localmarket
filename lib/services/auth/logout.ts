
import { apiService } from '../api';
import { API_ENDPOINTS } from '@/lib/config/api';
import { AUTH_CONFIG } from '@/lib/config/constants';

export async function logout(): Promise<void> {
  try {
    await apiService.post(API_ENDPOINTS.AUTH.LOGOUT);
  } finally {
    // Always clear local storage
    localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
    localStorage.removeItem(AUTH_CONFIG.USER_KEY);
  }
}
