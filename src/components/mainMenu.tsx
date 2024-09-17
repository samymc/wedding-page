import { useNavigate } from "react-router-dom"
import "../App.css"

export const MainMenu:React.FC = () => {
    const navigate = useNavigate()

    return (
    <div className="menuBar">
        <div onClick={()=>{navigate("/history")}}>
            <p>Historia</p>
        </div>
        <div onClick={()=>{navigate("/details")}}>
            <p>Detalles</p>
        </div>
    </div>
    )
}