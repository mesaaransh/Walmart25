import Navbar from '../Components/Navbar'
import Hero from './Components/Hero/Hero'
import "./Home.css"
import Screen from './Components/Screen/Screen'
import Features from './Components/Features/Features'

export default function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <Hero/>

            <Screen>
                <Features/>
            </Screen>
        </div>
    )
}
