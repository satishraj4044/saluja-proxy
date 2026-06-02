/**
 * Vercel Speed Insights integration for vanilla JavaScript/Node.js
 * 
 * This module provides the Speed Insights functionality for the Saluja Proxy project.
 * It can be used in both browser and server contexts.
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * Initialize Vercel Speed Insights
 * Call this function to start tracking performance metrics
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.debug - Enable debug mode (default: false)
 * @param {string} options.framework - Framework name for better tracking
 * @returns {void}
 */
export function initSpeedInsights(options = {}) {
  const {
    debug = false,
    framework = 'vanilla',
  } = options;

  if (typeof window === 'undefined') {
    // Server-side - no action needed
    if (debug) {
      console.log('[Speed Insights] Server-side environment detected, skipping initialization');
    }
    return;
  }

  // Client-side initialization
  try {
    injectSpeedInsights({
      framework,
      debug,
    });
    
    if (debug) {
      console.log('[Speed Insights] Successfully initialized');
    }
  } catch (error) {
    console.error('[Speed Insights] Initialization error:', error);
  }
}

/**
 * Default export for convenience
 */
export default {
  init: initSpeedInsights,
};
