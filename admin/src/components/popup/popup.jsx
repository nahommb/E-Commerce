import { useState } from "react";
import './popup.css'
export const Popup = ({isOpen,onClose,content})=>{

  
    return <>
              {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{content.title}</h2>
            {content.title==='Change Name'?<div><input className="input-field m-2" placeholder="First Name"/><br/>
            <input className="input-field m-2" placeholder="Last Name"/><br/></div>:(
                content.title==='Change Email'?<div>
                <input className="input-field m-2" placeholder="Email"/><br/>
                <input className="input-field m-2" placeholder="Verfication Code"/><br/>
                </div>:(
                    content.title==='Change Password'?<div>
                    <input className="input-field m-2" placeholder="Current Password"/><br/>
                    <input className="input-field m-2" placeholder="New Password"/><br/>
                    </div>:null
                )
            )}
         
            <button onClick={onClose}>Save</button>
          </div>
        </div>
      )}
    </>
}