import type { Options } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const presets: Config['presets'] = [
  [
    'classic',
    {
      blog: false,
      docs: {
        path: './src',
        routeBasePath: process.env.CI ? '/Library' : '/',
        sidebarPath: './sidebars.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
      theme: { customCss: './styles/custom.scss' },
    } satisfies Options,
  ],
];

export default presets;
