import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logout } from '../../context/redux/auth/authAction'
export const Logout = ()=>{

  const dispatch = useDispatch()
  const handleLogout = ()=>{
   dispatch(logout())
   window.location.href = '/'
  }


    return <div className="flex justify-center items-center h-8/12">
    <div className="bg-white-smoke p-10 rounded-xl text-light-purple w-4/12 flex justify-center items-center">
        <div>
        <p className="text-2xl p-2 pl-14">Logout</p>
        <p className='p-2'>Are You Sure Want Logout</p> 
        <Button style={{color:'green',paddingLeft:'40%',paddingRight:'40%'}} onClick={handleLogout}>yes</Button>
        </div>
       
    </div>
      
    </div>
}