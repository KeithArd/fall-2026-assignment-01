export type NetworkConfig = {
  serverUrl: string;
  port: number;
};

export type EnvironmentConfig = {
  environment: 'dev' | 'prod';
  timeout: number;
};

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  // defaults for missing fields
  const defaults: AppConfig = {
    serverUrl: 'http://localhost',
    port: 8080,
    environment: 'dev',
    timeout: 3000,
  };

  // created merged AppConfig object, use defaults for missing fields
  const merged: AppConfig = {
    serverUrl: userOverrides.serverUrl ?? defaults.serverUrl,
    port: userOverrides.port ?? defaults.port,
    environment: userOverrides.environment ?? defaults.environment,
    timeout: userOverrides.timeout ?? defaults.timeout,
  };

  return merged;
}
