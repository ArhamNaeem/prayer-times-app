import Navbar from "./Main-Page/Navbar"
import MainPage from "./Main-Page/MainPage";
import PrayTracker from "./Track-Prayer/PrayTracker"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function App() {
  const client = new QueryClient();
  return (
    <>
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/track-prayer" element={<PrayTracker/>} />
            </Routes>
          </Router>
        </QueryClientProvider>
    </>
  );
}

export default App
