import React, { useEffect,useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllAccounts,deleteBankAccount } from "../Services/BankAccountService";


const BnakAccountLis=()=>{

    const [accounts,setAccounts]=useState([])
    const navigate =useNavigate(null)

    const {id} =useParams();

    useEffect(()=>getAllAccountsInfo(),[])

    const getAllAccountsInfo=()=>{
       getAllAccounts().then((res)=>{
        setAccounts(res.data);
        console.log(res.data)
    })
   
    .catch((error)=>console.log("error generated"))
    }

    const deleteAccount=(id)=>{ 
        deleteBankAccount(id)
        .then((res)=>{alert("account deleted")
        getAllAccountsInfo()})
        .catch((error)=>console.log(error))

    }


    const updateAccount=(id,account)=>{
        navigate(`/update/${id}`)
    }

    const accountInfo=(id)=>{
        navigate(`/info/${id}`)
    }


const addBankAccount=()=>{
    navigate("/add")
}
    return(
        <div className="container">
            <button type="button" className="btn btn-success" onClick={addBankAccount}>AddAccount</button>
            <table border={3}>
                <thead>
                    <th>Account Number</th>
                    <th>Account Holder  Name</th>
                    <th>Bank Name</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {accounts.map((account)=>(                        
                         <tr key={account.accountNum}>
                         <td>{account.accountNum}</td>
                         <td>{account.accountHolderName}</td>
                         <td>{account.bankName}</td>
                        <td>
                        <button className="btn btn-danger" onClick={()=>deleteAccount(account.accountNum)}>Delete</button>
                        <button className="btn btn-success" onClick={()=>updateAccount( account.accountNum)}>Update</button>
                        <button className="btn btn-info" onClick={()=>accountInfo(account.accountNum)}>Info</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default BnakAccountLis