import type { Config } from '@docusaurus/types';

import plugins from './config/plugins';
import presets from './config/presets';
import themeConfig from './config/theme';

const organizationName = 'KingsChurchCambridge';
const projectName = 'Library';

const config: Config = {
  title: "Library | King's Church Cambridge",
  favicon: 'favicon.ico',
  url: process.env.CI
    ? 'https://kingschurchcambridge.github.io'
    : 'http://localhost:3000',
  baseUrl: process.env.CI ? `/${projectName}/` : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  markdown: { format: 'mdx' },
  plugins,
  presets,
  themeConfig,
  organizationName,
  projectName,
  deploymentBranch: 'main',
};

export default config;
