import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Instruments from './components/instruments';
import Quotes from './components/quotes';

const components = [
  { path: '/', element: <Instruments /> },
  { path: '/quotes/:instrument', element: <Quotes /> },
];
export default function App() {
  return (
    <Router>
      <AppInternal />
    </Router>
  );
}

const AppInternal = () => {
  let routes = useRoutes(components);
  return routes;
};
