/**
 *
 * Asynchronously loads the component for DesignDetailView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
