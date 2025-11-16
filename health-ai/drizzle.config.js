module.exports = {
  schema: './config/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: { url: process.env.DATABASE_URL },
};
