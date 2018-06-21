import React from "react";
import Loadable from 'react-loadable';

const LoadableLoginpage = Loadable({
    loader: () => import('../views/Loginpage'),
    loading() {
      return <div>Loading..</div>
    }
  });

  export default LoadableLoginpage;