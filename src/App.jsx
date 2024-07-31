import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <Outlet />
    </HelmetProvider>
  );
}

export default App;
