import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from './app/App.tsx';
import User from './pages/User/User';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Trip from './pages/Trip/Trip';
import ScrollToTop from './components/ScrollToTop';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');

  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:tripRoute/:date" element={<Search />} />
          <Route path="trip/:tripId" element={<Trip />} />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
