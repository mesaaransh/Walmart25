import { FaPlay } from "react-icons/fa6"
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero'>
        <h1>
          Think Less. Get <span>More.</span> <br /> Shop <span>Smart</span> with Walmart!
        </h1>

        <p>Tell us what you need, and we'll build your cart. <br /> Fast, easy, and tailored just for you.</p>

        <button>
          <div>
            <FaPlay/>
          </div>
          View Demo
        </button>
    </div>
  )
}
