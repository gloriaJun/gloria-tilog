import { GatsbyNode } from 'gatsby';
import path from 'path';

export const createWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        icons: path.resolve(__dirname, '../icons'),
      },
    },
  });
};
