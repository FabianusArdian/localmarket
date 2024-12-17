"use client";

import { apiService } from './api';
import { API_ENDPOINTS } from '@/lib/config/api';
import type { Seller } from '@/lib/types/seller';
import type { Product } from '@/lib/types/product';

export const sellerService = {
  getSellers: async (filters?: Record<string, any>): Promise<Seller[]> => {
    return apiService.get(API_ENDPOINTS.SELLERS.LIST, { params: filters });
  },

  getSeller: async (id: string): Promise<Seller> => {
    return apiService.get(API_ENDPOINTS.SELLERS.DETAIL(id));
  },

  getSellerProducts: async (id: string): Promise<Product[]> => {
    return apiService.get(API_ENDPOINTS.SELLERS.PRODUCTS(id));
  },

  updateProfile: async (data: Partial<Seller>): Promise<Seller> => {
    return apiService.put(API_ENDPOINTS.SELLERS.UPDATE_PROFILE, data);
  },
};