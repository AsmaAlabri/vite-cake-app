import axios from "axios"
import { useEffect, useState } from "react"

export default function ShowCards() {
    const [myCakes, setMyCakes] = useState([])

    useEffect(() => {
        getCakes()
    }, [])

    const getCakes = async () => {
        try {
            const myData = await axios.get("http://localhost:7600")
            console.log(myData)
            setMyCakes(myData.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="container">
                <p className="display-4 mt-5">Show Cakes</p>
                <div className="row p-2">

                    {
                        myCakes.map((cake) => {
                            return (
                                <>
                                    <div className="col-3 p-1">
                                        <div className="card">
                                            <img src={cake.cakeImage} className="card-image-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{cake.cakeCode}</h3>
                                                <p className="card-text">{cake.cakeName}</p>
                                                <p className="card-text">{cake.cakePrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}