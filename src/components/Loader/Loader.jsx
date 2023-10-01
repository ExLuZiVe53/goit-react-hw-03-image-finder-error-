// export const Loader = () => {
//   return <p>LOADING ...</p>;
// };


import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 800 800"
    backgroundColor="#858080"
    foregroundColor="#ecebeb"
    
    {...props}
  >
    <rect x="100" y="100" rx="3" ry="3"   width="90" height="90" />
    <rect x="100" y="0" rx="3" ry="3"     width="90" height="90" />
    <rect x="0" y="200" rx="3" ry="3"     width="90" height="90" />
    <rect x="0" y="100" rx="3" ry="3"     width="90" height="90" />
    <rect x="200" y="100" rx="3" ry="3"   width="90" height="90" />
    <rect x="100" y="200" rx="3" ry="3"   width="90" height="90" />
    <rect x="200" y="200" rx="3" ry="3"   width="90" height="90" />
    <rect x="200" y="0" rx="3" ry="3"     width="90" height="90" />
    <rect x="300" y="100" rx="3" ry="3"   width="90" height="90" />
    <rect x="300" y="200" rx="3" ry="3"   width="90" height="90" />
    <rect x="0" y="0" rx="3" ry="3"       width="90" height="90" />
    <rect x="300" y="0" rx="3" ry="3"     width="90" height="90" />
  </ContentLoader>
);

export default Loader;