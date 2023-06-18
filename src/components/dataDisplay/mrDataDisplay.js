import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./mrDataDisplay.css"

function MrDataDisplay() {
    const [data, setData] = useState({});
    const { company, id } = useParams("");
    let a = {};
    async function dataFetch() {
        const res = await fetch("/mrDataDisplay/" + company + "/" + id, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data1 = await res.json();
        // setData(data);
        if (res.status !== 200) {
            console.log("no data found");
        }
        else {
            setData(data1)

        }
    }
    useEffect(() => { dataFetch() }, [])         // 4/5/23 :- useState re-renders the function everytime when we try to set the value using the setState function. This may cause function to be called repeatedly . to avoid this situation , useEffect is used. useEffect takes two functions , the first function tells what to execute and second one tells when to execute.  
    console.log(data);
    if (Object.keys(data).length!==0) {
        return <div className="mrDataDisplay-Container">
            <div className="card" onclick="location.href='/dataAnalysis'">
        <div className="header" >
            {/* <!-- <img src="https://i.imgur.com/JRvRBCD.png" alt="logo"> --> */}
            <h2>
                SalesMan ID card
            </h2>
        </div>
        <div className="content">
             {/* <h3>SalesMan ID Card</h3>  */}
            <div className="row">
                <span className="label">Name:</span>
                <span className="value">
                {data["data"]["name"]} 
                </span>
            </div>
            <div className="row">
                <span className="label">Company:</span>
                <span className="value">
                {data["data"]["company"]}
                </span>
            </div>
            <div className="row">
                <span className="label">Email:</span>
                <span className="value">
                {data["data"]["email"]}
                </span>
            </div>
            <div className="row">
                <span className="label">Phone:</span>
                <span className="value">
                    {data["data"]["phoneNumber1"]}
                </span>
            </div>
            
            
        </div>
    </div>
            <div className="billDataDisplay">
                <table>
                    <tr className="tableHeading1">
                        <th>Party Name</th>
                        <th>Bill No</th>
                        <th>Bill Date</th>
                        <th>Bill Amount</th>
                    </tr>
                    {
                        data["data"]["bills"].map((e) => {
                            return <tr>
                                <td className="partyName1">
                                    {e["partyName"]}
                                </td>
                                <td>
                                    {e["billNo"]}
                                </td>
                                <td>
                                    {e["billDate"]}
                                </td>
                                <td>
                                    {e["billAmount"]}
                                </td>

                            </tr>
                        })
                    }
                </table>
            </div></div>
    }
    // return <h1>{indData["data"]}</h1>
}

export default MrDataDisplay;
