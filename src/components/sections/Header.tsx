import { Container } from "../Container"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();

  function redirect() {
    navigate('/work')
  }

  return (
    <header className=" sticky top-0 z-50">
      <Container>
        <div className=' text-[#FDF2E6] flex justify-between text-xl'>
          <h1 className='font-[font1] flex items-center'>KevinWalton.</h1>
          <div className="p-2">
            <h1 onClick={redirect} className='uppercase underline font-[font1]'>About</h1>
            <h1 className='uppercase underline font-[font1]'>Work</h1>
            <h1 className='uppercase underline font-[font1]'>Contact</h1>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header