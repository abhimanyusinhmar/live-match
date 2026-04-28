import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'


function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 pl-4">
          <Header />

          <div className="mx-auto max-w-300 px-5 py-4">
            
          </div>
        </main>
      </div>
    </div>
  )
}


export default App
