import './App.css'
import Navbar from './Navbar'
import SideNav from './SideNav'
import Body from './Body'

function App() {
  return (
    <>
     <Navbar />
     <div className="body">
        <SideNav />
        <Body />
     </div>
    </>

  )
}
export default App
