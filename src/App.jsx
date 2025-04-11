import { Toaster } from 'react-hot-toast';
import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import DarkModeProvider from './Context/DarkModeContext';
const queryClient = new QueryClient()

function App() {
  return (
    < DarkModeProvider>
      <div className='flex flex-col'>
        <Header />
        <div className='container  grid grid-cols-4 grid-rows-[auto_1fr] gap-4 h-screen'>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <ComponentA />
            <ComponentB />
          </QueryClientProvider>
        </div>
      </div>
    </DarkModeProvider>

  )
}

export default App
