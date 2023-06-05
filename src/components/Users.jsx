import { render } from "@testing-library/react";
import axios from "axios";
import { Component, useState } from "react";

const Users = () =>{

    const [user , setuser] = useState([])


    async function ComponentDidmount(){

        const response = await axios.get('https://reqres.in/api');
        ({setuser : response })
    }

    
    return(
           <div>
            <button className=" m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">create</button>
            <div>
                {
                    user.map((user) =>{
                        return(
                            <div>
                                <img src="{user.avatar}" alt="" />
                                <h4>{user.first_name} {user.last_name} </h4>
                                <h5>{user.email}</h5>

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

    function handeleCreate(user){
        
    }

    function handeleUpdate(user){
        
    }
} 
export default Users;