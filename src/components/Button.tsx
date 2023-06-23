import { FaArrowRight } from 'react-icons/fa';

export default function Button({children}: {children: React.ReactNode}) {
  return(
    <button 
    className="
    flex items-center gap-3 py-3 px-8 rounded-xl
    text-base uppercase
    ease-out duration-200 hover:scale-95
    bg-red-500 text-white
    ">
      {children} <FaArrowRight />
    </button>
  )
}