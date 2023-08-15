exports.getConfig = () => {
  return {
    port: process.env.PORT || 3000,
    allowedCorsOrigin: process.env.ALLOWED_CORS_ORIGIN,
    dbUrl: process.env.MONGODB_URI,
    bcryptCostFactor: parseInt(process.env.BCRYPT_COST_FACTOR) || 8,
  };
};
