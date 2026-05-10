import { useState } from "react"
import axios from "axios"

export default function EditCake() {

    const [cakeCode, setCakeCode] = useState()
    const [cakeName, setCakeName] = useState()
    const [cakePrice, setCakePrice] = useState()
    const [cakeImage, setCakeImage] = useState()
    const [message, setMessage] = useState(null)

    const [disabled, setDisabled] = useState(true)

    const handleSearch = async (e) => {
        try {
            e.preventDefault()
            const myResult = await axios.get("http://localhost:7600/searchCake/" + cakeCode)
            if (myResult.data == 0) {
                setMessage("Cake not found !")
                setDisabled(true)
            } else {
                setMessage(null)
                setCakeCode(myResult.data.cakeCode)
                setCakeName(myResult.data.cakeName)
                setCakePrice(myResult.data.cakePrice)
                setCakeImage(myResult.data.cakeImage)
                setDisabled(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleEditCake = async (e) => {
        try {
            e.preventDefault()
            const editCakeData = {
                cakeName,
                cakePrice,
                cakeImage
            }
            console.log(editCakeData)
            const myResult = await axios.put("http://localhost:7600/editCake/" + cakeCode, editCakeData)
            setMessage(myResult.data)
            setDisabled(true)
            setCakeName("")
            setCakePrice("")
            setCakeImage("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <p className="display-4">EDIT CAKE</p>
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
                            <button className="btn btn-info" onClick={(e) => handleSearch(e)}>Search</button>
                        </div>
                        <div className="p-2">
                            <p className="text text-success">{message}</p>
                        </div>
                        <div className="p-2">
                            <hr />
                        </div>

                        <div className="p-2">
                            <label>Cake Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={cakeName}
                                onChange={(e) => setCakeName(e.target.value)}
                                disabled={disabled}
                            />
                        </div>
                        <div className="p-2">
                            <label>Cake Price</label>
                            <input
                                type="number"
                                className="form-control"
                                value={cakePrice}
                                onChange={(e) => setCakePrice(e.target.value)}
                                disabled={disabled}
                            />
                        </div>
                        <div className="p-2">
                            <label>Cake Image</label>
                            <input
                                type="text"
                                className="form-control"
                                value={cakeImage}
                                onChange={(e) => setCakeImage(e.target.value)}
                                disabled={disabled}
                            />
                        </div>
                        <div className="p-2">
                            <button className="btn btn-primary" onClick={(e) => handleEditCake(e)} disabled={disabled}>Edit Cake</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}