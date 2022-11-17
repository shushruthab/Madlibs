import { useLocation, useNavigate } from "react-router-dom";
import './Story.css';
const Story = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {Noun, Noun2, Adjective, Color, story} = location.state;

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }
    
    return (
        <div className="story-container">
            <p>There was a {Color} {Noun} that {story} a {Adjective} {Noun2}</p>
            <button onClick={handleClick}>Restart</button>
        </div>
    )

}

export default Story;