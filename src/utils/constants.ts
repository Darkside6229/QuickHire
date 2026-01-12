/**
 * Application-wide constants
 */

export const APP_NAME = 'QuickHire';
export const APP_DESCRIPTION = 'Hire the best freelancer for any job online';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FIND_WORK: '/findwork',
  HIRE: '/hire',
} as const;

export const STORAGE_KEYS = {
  USER_PREFERENCES: 'quickhire_user_preferences',
  SEARCH_HISTORY: 'quickhire_search_history',
  THEME: 'quickhire_theme',
} as const;

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;
