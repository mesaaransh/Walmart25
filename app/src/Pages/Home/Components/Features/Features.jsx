import { FaBrain, FaCartShopping } from "react-icons/fa6"
import Screen from "../Screen/Screen"
import "./Features.css"
import { RiVoiceAiFill } from "react-icons/ri"

export default function Features() {
  return (
    <div className="features">
        <div className="heading">
            <h2>Not Just a Cart. A Shopping Companion.</h2>
            <p>Smart Cart learns what you love. From your past picks to your present needs, it curates smarter choices every single time.</p>
        </div>

        <div className="featuresCont">
            <Screen>
                <div className="feature">
                    <div className="icon">
                        <FaBrain />
                    </div>
                    <div className="description">
                        <h3>Memory Powered Suggestions</h3>
                        <p>
                            Smart Cart remembers your past purchases, patterns, and preferences so every recommendation feels familiar, yet fresh.
                        </p>
                    </div>
                </div>
            </Screen>
            <Screen>
                <div className="feature">
                    <div className="icon">
                        <RiVoiceAiFill />
                    </div>
                    <div className="description">
                        <h3>Conversational Shopping</h3>
                        <p>Tell it what you need in your own words from "Quick dinner under ₹400" to "Snack pack for the road" Smart Cart listens and builds.</p>
                    </div>
                </div>
            </Screen>
            <Screen>
                <div className="feature">
                    <div className="icon">
                        <FaCartShopping />
                    </div>
                    <div className="description">
                        <h3>One-Click Bundles</h3>
                        <p>Get curated combos that match your lifestyle and budget. Everything you need, nothing you don't in just one tap.</p>
                    </div>
                </div>
            </Screen>
            <Screen>
                <div className="feature">
                    <div className="icon">
                        <FaCartShopping />
                    </div>
                    <div className="description">
                        <h3>Intent-Aware Recommendations</h3>
                        <p>Go beyond keyword matches. Whether it’s a birthday surprise or a wellness reset, Smart Cart understands your context and curates accordingly.</p>
                    </div>
                </div>
            </Screen>
        </div>
    </div>
  )
}
