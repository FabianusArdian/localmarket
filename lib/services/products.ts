"use client";

import { apiService } from './api';
import { API_ENDPOINTS } from '@/lib/config/api';
import type { Product } from '@/lib/types/product';

export const productService = {
  getProducts: async (filters?: Record<string, any>): Promise<Product[]> => {
    return apiService.get(API_ENDPOINTS.PRODUCTS.LIST, { params: filters });
  },

  getProduct: async (id: string): Promise<Product> => {
    return apiService.get(API_ENDPOINTS.PRODUCTS.DETAIL(id));
  },

  createProduct: async (data: Partial<Product>): Promise<Product> => {
    return apiService.post(API_ENDPOINTS.PRODUCTS.CREATE, data);
  },

  updateProduct: async (id: string, data: Partial<Product>): Promise<Product> => {
    return apiService.put(API_ENDPOINTS.PRODUCTS.UPDATE(id), data);
  },

  deleteProduct: async (id: string): Promise<void> => {
    return apiService.delete(API_ENDPOINTS.PRODUCTS.DELETE(id));
  },
};