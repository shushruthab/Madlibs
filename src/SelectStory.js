import { Link } from "react-router-dom";
import './SelectStory.css';
const SelectStory = () => {
    return (
        <div className="SelectStory-container">
            <h3>Select Storyboard</h3>
            <Link to="/form" state={{story: "loved"}}>Love</Link><br />
            <Link to="/form" state={{story: "chased"}}>Chase</Link><br />
            <Link to="/form" state={{story: "bought"}}>Buy</Link><br />
        </div>
    )
}

export default SelectStory;