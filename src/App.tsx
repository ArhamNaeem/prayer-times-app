import Navbar from "./Navbar"
import PrayerTime from "./PrayerTime"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const client = new QueryClient();
  return (
    <>
      <div className="h-screen">
        <QueryClientProvider client = {client}>
          <Navbar />
          <PrayerTime />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App
