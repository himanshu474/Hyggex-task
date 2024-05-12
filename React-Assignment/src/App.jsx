import Navbar from "./components/repeated/Navbar"
import Icons from "./components/repeated/Icons"
import Faq from './components/FAQ'

function App() {
  

  return  (
    <div className="w-11/12 max-w-maxContent mx-auto">
      <div className="px-[6.4375rem]">
     <Navbar/>
     <div className="mt-20">
      <Icons/>
     </div>

     <div className='mt-[154px]'>
          <Faq/>
        </div>
      </div>
    </div>
  )
}

export default App
