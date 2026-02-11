import { PrebuiltImagePackaging, WebService, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const app = new WebService({
    packaging: new PrebuiltImagePackaging({
      image: 'louislam/uptime-kuma:1'
    }),
    resources: {
      cpu: 0.5,
      memory: 1024
    },
    environment: { UPTIME_KUMA_PORT: '3000' }
  });

  return {
    resources: { app }
  };
});
