const config = {
  BASE_URL: process.env.REACT_APP_API_URL || '',
  IsDevelopment: ['dev'].includes(process.env.REACT_APP_NODE_ENV)
};

export default config;
