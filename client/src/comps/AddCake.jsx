import { useState } from "react"
import axios from "axios"

export default function AddCake() {
    
    const [cakeCode, setCakeCode] = useState()
    const [cakeName, setCakeName] = useState()
    const [cakePrice, setCakePrice] = useState()
    const [cakeImage, setCakeImage] = useState()
    const [message, setMessage] = useState()

    const handleAddCake = async(e) => {
        try {
            e.preventDefault()
            const newCake = { cakeCode, cakeName, cakePrice, cakeImage }
            const myResult = await axios.post("http://localhost:7600/addCake", newCake)
            setMessage(myResult.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
             <div style={{marginTop: "50px"}}>
                <p className="display-4">ADD CAKE</p>
                <div className="col-4">
                    <form className="form-control p-4">
                        <div className="p-2">
                            <label>Cake Code</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={cakeCode}
                                onChange={(e) => setCakeCode(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <label>Cake Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={cakeName}
                                onChange={(e) => setCakeName(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <label>Cake Price</label>
                            <input 
                                type="number" 
                                className="form-control"
                                value={cakePrice}
                                onChange={(e) => setCakePrice(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <label>Cake Image</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={cakeImage}
                                onChange={(e) => setCakeImage(e.target.value)}
                            />
                        </div>
                        <div className="p-2">
                            <button className="btn btn-primary" onClick={(e) => handleAddCake(e)}>Add Cake</button>
                        </div>
                        <div className="p-2">
                            <p className="text text-success">{message}</p>
                        </div>
                    </form>
                </div>
             </div>            
        </>
    )
}