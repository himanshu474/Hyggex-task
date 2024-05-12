import logo from '../../assets/images/log_.svg'
import LogoTxt from '../../assets/images/logo_text.svg'
import Add from '../../assets/images/add_btn.svg'

const FlashCard = () => {
  return (
    <div className='flex justify-between items-center font-inter'>
        <div className='flex gap-x-5'>
            <img className="bg-blend-multiply"
             src={logo} alt="logo icon"/>
        </div>
        <div>
            <p className='mb-[10.63px] font-bold text-xs text-[#696671'>Published By</p>
            <img src={LogoTxt} alt="icon"/>
        </div>
        <div className='flex items-center gap-x-2 hover:scale-105 cursor-pointer transition-all duration-200 active:scale-95'>
            <img src={Add} alt="Add icon"/>
            <p className=' bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent text-[1.75rem] font-semibold leading-9'>Create FlashCard</p>
        </div>
    </div>
  )
}

export default FlashCard