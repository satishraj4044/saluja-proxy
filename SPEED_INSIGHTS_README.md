# Vercel Speed Insights Integration

This project has been configured with Vercel Speed Insights to track performance metrics and Core Web Vitals.

## What's Installed

- **Package**: `@vercel/speed-insights` v2.0.0
- **Integration Type**: Vanilla JavaScript / Static HTML

## Implementation

### 1. Public HTML Page (`public/index.html`)

A landing page has been created at `public/index.html` that includes:
- API documentation for the Saluja Proxy endpoints
- Vercel Speed Insights tracking script

The Speed Insights script is injected using the recommended inline snippet:

```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

### 2. JavaScript Module (`lib/speed-insights.js`)

For programmatic usage, a JavaScript module has been created that exports:
- `initSpeedInsights(options)` - Initialize Speed Insights with custom options
- Default export with `init` method

Usage example:
```javascript
import { initSpeedInsights } from './lib/speed-insights.js';

// Initialize with default settings
initSpeedInsights();

// Or with custom options
initSpeedInsights({
  debug: true,
  framework: 'vanilla'
});
```

## Viewing Analytics

1. Deploy this project to Vercel
2. Enable Speed Insights in your Vercel Dashboard:
   - Go to your project settings
   - Navigate to the "Speed Insights" tab
   - Enable the feature
3. Visit your deployed site
4. View metrics in the Vercel Dashboard under Speed Insights

## Configuration

The integration is configured to:
- Automatically track Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Only track in production (development mode is excluded)
- Work seamlessly with Vercel's deployment infrastructure

## Files Modified/Created

- ✅ `package.json` - Added `@vercel/speed-insights` dependency
- ✅ `public/index.html` - Created landing page with Speed Insights
- ✅ `lib/speed-insights.js` - Created JavaScript module for programmatic usage
- ✅ `vercel.json` - Updated to serve public directory
- ✅ `package-lock.json` - Updated with new dependency
- ✅ `SPEED_INSIGHTS_README.md` - This documentation file

## Requirements

- Vercel account
- Project deployed to Vercel
- Speed Insights enabled in Vercel Dashboard

## Additional Resources

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
- [Web Vitals Guide](https://web.dev/vitals/)
