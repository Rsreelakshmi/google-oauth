import React from "react";
import Loadable from 'react-loadable';

const LoadableHomepage = Loadable({
    loader: () => import('../views/Homepage'),
    loading() {
      return <div>Loading...</div>
    }
  });

  export default LoadableHomepage;