import axios from "axios"
import { useEffect, useState } from "react"

export default function Show() {
    const [myCakes, setMyCakes] = useState([])

    useEffect(() => {
        getCakes()
    }, [myCakes])

    const getCakes = async () => {
        try {
            const myData = await axios.get("https:/cake-app-server-vm08.onrender.com//activity")
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
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCakes.map((cake) => {
                                //if (cake.cakePrice == 0) {
                                    return (
                                        <>
                                            <tr>
                                                <td>{cake.cakeCode}</td>
                                                <td>{cake.cakeName}</td>
                                                <td>{cake.cakePrice}</td>
                                                <td><img src={cake.cakeImage} style={{ height: "60px" }} /></td>
                                            </tr>
                                        </>
                                    )
                                //}

                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
