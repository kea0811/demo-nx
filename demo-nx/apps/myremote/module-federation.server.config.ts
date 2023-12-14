import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'myremote',
  exposes: {
    './Module': 'apps/myremote/src/remote-entry.ts',
  },
};

export default config;
