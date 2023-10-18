import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "quest.rpgtable.sidecar",
  appName: "foundry-sidecar-client",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;
