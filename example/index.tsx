import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import loadable from '@loadable/component'

// // import { Thing } from '../src';
const Thing = loadable(() => import('../src'));
// // const ExampleComponent = loadable(() => import('https://cdn.skypack.dev/gb-react-comp-test'))
// // import { ExampleComponent } from 'https://cdn.skypack.dev/gb-react-comp-test';
// const ExampleComponent = loadable(() => import(/* webpackIgnore: true */ 'https://cdn.skypack.dev/gb-react-comp-test'));


// import {ExampleComponent} from 'https://cdn.skypack.dev/gb-react-comp-test';
// const ExampleComponent = React.lazy(() => import('https://cdn.skypack.dev/gb-react-comp-test').then(comp => console.log(JSON.stringify(comp, null, 2))));
const ExampleComponent = React.lazy(() => import('../src'));

// const lodash = import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js');

// lodash.then(() => console.log(_.VERSION));
// let ExampleComponent;

// async function getComponent() {
//   // const confetti = await import (/* webpackIgnore: true */ 'https://cdn.skypack.dev/canvas-confetti');
//   ExampleComponent = await import (/* webpackIgnore: true */ 'https://cdn.skypack.dev/gb-react-comp-test');
// }




const App = () => {
  React.useEffect(() => {
    console.log('Hooks are working app');
    // getComponent();

  }, []);  
  
  return (
    <div>
      <Thing />
      <React.Suspense fallback={<div>Loading...</div>}>
        <ExampleComponent />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
