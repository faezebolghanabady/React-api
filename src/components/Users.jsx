import { render } from "@testing-library/react";
import axios from "axios";
import { Component, useState , useEffect } from "react";

const Users = () =>{

  
    const [users , setusers] = useState([])

    useEffect(() =>{
        
    } , [users])


    async function ComponentDidmount(){

        const response = await axios.get('https://reqres.in/api');
        ({setusers : response })
    }

    
    return(
           <div>
            <button className=" m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">create</button>
            <div>
                {
                    users.map((user) =>{
                        return(
                            <div>
                                <img src="{users.avatar}" alt="" />
                                <h4>{users.first_name} {users.last_name} </h4>
                                <h5>{users.email}</h5>

                            <div className="grid grid-rows-3 grid-flow-col gap-4">
                                <div className="row-span-3">
                                <button className=" m-5 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">update</button>
                                </div>

                                <div clas>
                                <button className=" m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">delet</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
           </div>
    )

    function handeleDelet(){

    }

    function handeleCreate(users){
        
    }

    function handeleUpdate(users){
        
    }
} 
export default Users;