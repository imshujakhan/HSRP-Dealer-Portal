import { API_BASE } from './config';
import { saveToCache, getFromCache } from '../utils/cache';
import { logInfo, logWarning, logError } from '../utils/logger';

export const dealerService = {
  login: async (email, password) => {
    try {
      logInfo('Login attempt', { email });
      const cacheKey = 'dealers';
      let dealers = getFromCache(cacheKey);
      
      if (!dealers) {
        const res = await fetch(`${API_BASE}/dealers`);
        dealers = await res.json();
        saveToCache(cacheKey, dealers);
      }
      
      const safeEqual = (a, b) => {
        if (a.length !== b.length) return false;
        let result = 0;
        for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        return result === 0;
      };

      const dealer = dealers.find(d => safeEqual(d.email, email) && safeEqual(d.password, password));
      if (dealer) {
        const { password: _, ...dealerData } = dealer;
        logInfo('Login successful', { dealerId: dealer.dealerId });
        return { success: true, data: dealerData };
      }
      logWarning('Login failed - invalid credentials', { email });
      return { success: false, error: "Invalid credentials" };
    } catch (error) {
      logError('Login error', error);
      return { success: false, error: error.message };
    }
  },

  getDealerProfile: async (dealerId) => {
    const res = await fetch(`${API_BASE}/dealers`);
    const dealers = await res.json();
    const dealer = dealers.find(d => d.dealerId === dealerId);
    if (dealer) {
      const { password: _, ...dealerData } = dealer;
      return { success: true, data: dealerData };
    }
    return { success: false, error: "Dealer not found" };
  },
};
