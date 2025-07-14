import "./Screen.css"

export default function Screen({children}) {
  return (
    <div className="glass">
        <div className="content">
          {children}
        </div>
    </div>
  )
}
