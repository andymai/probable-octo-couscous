/**
 *
 * Asynchronously loads the component for DesignListView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
