import { useState } from "react";
import { useDispatch } from "react-redux";
import './popup.css'
import { changePassword } from "../../context/redux/profile/profileAction";
export const Popup = ({isOpen,onClose,content})=>{
 

  const [currentPassword,setCurrentPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const [first_name,setFirst_name] = useState('')
  const [last_name,setLast_name] = useState('')

  const [email,setEmail] = useState('')

  const dispatch = useDispatch()
  
 const onSave = (e)=>{ 
  e.preventDefault()
  if(content.title==='Change Password'){
    if(currentPassword && newPassword && confirmPassword){
      if(newPassword===confirmPassword){
        dispatch(changePassword({currentPassword,newPassword}))
      }
    }
  }
  if(content.title==='Change Name'){
    if(first_name && last_name){
      dispatch(changeName({first_name,last_name}))
    }
  if(content.title==='Change Email'){
    if(email){
      dispatch(changeEmail({email}))
    }
  }
 }
 onClose()
 }
    return <form>        
              {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{content.title}</h2>
            {content.title==='Change Name'?<div><input className="input-field m-2" placeholder="First Name" required onChange={(e)=>setFirst_name(e.target.value)}/><br/>
            <input className="input-field m-2" placeholder="Last Name" required onChange={(e)=>setLast_name(e.target.value)}/><br/></div>:(
                content.title==='Change Email'?<div>
                <input className="input-field m-2" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input className="input-field m-2" placeholder="Verfication Code"/><br/>
                {/* <button className="m-3" onClick={onClose}>Save</button> */}
                </div>:(
                    content.title==='Change Password'?<div>
                    <input className="input-field m-2" placeholder="Current Password" required onChange={(e)=>setCurrentPassword(e.target.value)}/><br/>
                    <input className="input-field m-2" placeholder="New Password" required onChange={(e)=>setNewPassword(e.target.value)}/><br/>
                    <input className="input-field m-2" placeholder="Confirm Password" required onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
                    {/* <button className="m-3" onClick={onClose}>Save</button> */}
                    </div>:null
                )
            )}
         
            {content.title === 'Change Email' || content.title === 'Change Name' || content.title==='Change Password'?
            <div>
            <button type="submit" className="mt-3" onClick={onSave}>Save</button>
            <button onClick ={onClose} className="ml-5">Cancel</button>
            </div>:
            <div>
            <button  className="mt-4" onClick={onClose}>Ok</button>
            </div>}
          </div>
        </div>
      )}
    </form>
}