import './App.css'
import Header from './components/Header'
import Entry from './components/Entry.jsx'
import data from './data.js'

export default function App() {

  const entries = data.map(entry => {
    return (
      <Entry 
        key={entry.id}
        {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>
    </>
  )
}