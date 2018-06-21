import React from "react";
import Loadable from 'react-loadable';

const LoadableMyPass = Loadable({
    loader: () => import('../views/MyPass'),
    loading() {
      return <div>Loading...</div>
    }
  });

  export default LoadableMyPass;