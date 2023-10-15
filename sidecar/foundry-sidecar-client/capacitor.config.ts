import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'quest.rpgtable.sidecar',
  appName: 'foundry-sidecar-client',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
