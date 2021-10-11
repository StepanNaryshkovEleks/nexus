const baseUrl =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ?
    'http://localhost:8010/proxy/' :
    process.env.ENV_BACKEND_PATH;

export default {
  baseUrl,
};
