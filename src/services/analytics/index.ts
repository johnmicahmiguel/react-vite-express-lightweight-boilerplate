// Analytics service placeholder
// TODO: Integrate with Google Analytics, Mixpanel, or other analytics services

export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    console.log('Analytics track:', event, properties);
  },

  identify: (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics identify:', userId, traits);
  },

  page: (name: string, properties?: Record<string, any>) => {
    console.log('Analytics page:', name, properties);
  },
};