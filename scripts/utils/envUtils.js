const stringifyEnvVars = (envVars) => {
  return {
    'process.env': Object.keys(envVars).reduce((env, key) => {
      // eslint-disable-next-line no-param-reassign
      env[key] = JSON.stringify(envVars[key]);
      return env;
    }, {}),
  };
};

module.exports = { stringifyEnvVars };
