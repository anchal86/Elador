import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectEmail } from '../../redux/slice/authSlice'

const AdminOnlyRoute = ({children}) => {
    const email = useSelector(selectEmail)
    if(email === 'anchal_bhargava86@hotmail.com'){
        return children;
    }
    
    return null
}

export const AdminOnlyLink = ({children}) => {
    const email =  useSelector(selectEmail)
    if(email === 'anchal_bhargava86@hotmail.com'){
        return children;
    }else{
        
        return (
            <>
                <div className='mt-40'>
                    <h1>Permission Denied</h1>
                    <p>Only Authorized Personel Can View This Page</p>
                    <Link to="/"><button>Go to Home</button></Link>
                </div>
            </>
        )
    }
}

export default AdminOnlyRoute