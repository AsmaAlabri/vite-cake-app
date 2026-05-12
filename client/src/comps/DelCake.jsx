import { useState } from "react"
import axios from "axios"

export default function DelCake() {
    const [cakeCode, setCakeCode] = useState(null)
    const [message, setMessage] = useState()

    const handleDelete = async(e) => {
        try {
            e.preventDefault()
            const myResult = await axios.delete("http://localhost:7600/delCake/" + cakeCode)
            setMessage(myResult.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
             <div style={{marginTop: "50px"}}>
                <p className="display-4">DELETE CAKE</p>
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
                            <button className="btn btn-primary" onClick={(e) => handleDelete(e)}>Delete Cake</button>
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