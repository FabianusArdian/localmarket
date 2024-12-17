
import { apiService } from '../api';
import { API_ENDPOINTS } from '@/lib/config/api';
import type { RegisterFormValues } from '@/lib/validations/auth';
import type { User } from '@/lib/types/user';

export async function register(data: RegisterFormValues): Promise<User> {
  // Remove confirmPassword before sending to API
  const { confirmPassword, ...registerData } = data;
  
  // Send registration request to backend
  const response = await apiService.post<User>(
    API_ENDPOINTS.AUTH.REGISTER, 
    registerData
  );
  
  return response;
}
