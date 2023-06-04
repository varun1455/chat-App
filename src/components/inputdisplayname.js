import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Username = () => {

    let navigate = useNavigate();

    const [error, setError] = useState("")
    const [data, setData] = useState({ name:""})

    const handleChange = e => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const validation = () => {
        if(!data.name){ 
            setError("Please enter your name.")
            return false
        }
       
        setError("")
        return true
    }

    const handleSubmit = e => {
        e.preventDefault()
        const isValid = validation()
        if(isValid){
            navigate("/chat", { state: data });
        }
    }

    return (
        <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <h2 className="text-warning mb-4">Enter your Display Name</h2>
                </div>
                <div className="form-group mb-4">
                    <input type="name" className="form-control bg-light" name="name" placeholder="Enter name" onChange={handleChange} />
                </div>
                
                <button type="submit" className="btn btn-warning w-100 mb-2">Submit</button>
                {error ? <small className="text-danger m-auto">{error}</small> : "" }
            </form>
        </div>
    )
}

export default Username