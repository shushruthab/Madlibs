import { useState } from "react";
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import './MadlibsForm.css';
const MadlibsForm = () => {
    const [formData, setFormData] = useState({
        Noun: "",
        Noun2: "",
        Adjective: "",
        Color: ""
    })
    let navigate = useNavigate();
    const location = useLocation();
    const {story} = location.state;
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/story", {state: {...formData, story: story}})
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="Noun">Noun </label>
            <input 
            id="Noun" 
            name="Noun"
            type="text" 
            placeholder="Noun" 
            value={formData.Noun}
            onChange={handleChange}
            /><br />
            <label htmlFor="Noun2">Noun2 </label>
            <input 
            id="Noun2" 
            name="Noun2"
            type="text" 
            placeholder="Noun2" 
            value={formData.Noun2}
            onChange={handleChange}
            /><br />
            <label htmlFor="Adjective">Adjective </label>
            <input 
            id="Adjective" 
            name="Adjective"
            type="text" 
            placeholder="Adjective" 
            value={formData.Adjective}
            onChange={handleChange}
            /><br />
            <label htmlFor="Color">Color </label>
            <input 
            id="Color" 
            name="Color"
            type="text" 
            placeholder="Color" 
            value={formData.Color}
            onChange={handleChange}
            /><br />
            <button>Create a Story</button>
        </form>
        </div>
    )
}

export default MadlibsForm;