"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { apiUserData } from "../redux/slice";


export default function Page() {
    const dispatch = useDispatch()
    const data = useSelector((data) => data.userData.userApiData)
    useEffect(()=> {
        dispatch(apiUserData())
    },[])
    return(
        <div>
            API Users List
            {
                data.length && data.map((item) => (
                    <h3 key={item.id}>{item.name}</h3>
                ))
            }
        </div>
    )
}