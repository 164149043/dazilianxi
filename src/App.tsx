import Header from './components/Header'
import TypingPractice from './components/TypingPractice'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <TypingPractice />
      </main>
      <Footer />
    </div>
  )
}

export default App
