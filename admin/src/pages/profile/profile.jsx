import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import './profile.css';
import { Popup } from "../../components/popup/popup";
import { useSelector } from "react-redux";

export const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '' });
 
    const [showPopup, setShowPopup] = useState(false);
    
    const user = useSelector((state)=>state.authReducer.user)
   const profile = useSelector((state)=>state.profileReducer)
   console.log(profile.message)

 
    const handleOpenModal = (title,data) => {
       
        setModalContent({ title ,data});
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log('save')
    };

  useEffect(()=>{
     if(profile.message !==''){
        setShowPopup(true)
     }

  },[profile])

    return (
        <div className="p-8 w-full justify-between items-center">
            <div>
                <p className="text-lg font-bold">Full Name</p>
                <p className="text-light-purple">{user.first_name} {user.last_name}</p>
                <Button onClick={() => handleOpenModal('Change Name',{first_name:'lee',last_name:'mb'})}>Change</Button>
            </div>
            
            <div>
                <p className="text-lg font-bold">Email</p>
                <p className="text-light-purple">{user.email}</p>
                <Button onClick={() => handleOpenModal('Change Email',{email:'rrrr'})}>Change</Button>
            </div>
            <div>
                <p className="text-lg font-bold">Password</p>
                <Button onClick={() => handleOpenModal('Change Password',{currentPassword:'123456',newPassword:'654321'})}>Change Password</Button>
                <Popup isOpen={isModalOpen} onClose={handleCloseModal}  content={modalContent} />
            </div>
            <div>
                <p className="text-lg font-bold">Role</p>
                <p className="text-light-purple">{user.role}</p>
            </div>

            <div>
                <p className="text-lg font-bold">Created Date</p>
                <p className="text-light-purple">12-09-24</p>
            </div>
            {showPopup && (
          <div style={popupStyles}>
            <p>{profile.message}</p>
            <Button
              style={{ color: '#4caf50', marginTop: '13px' }}
              onClick={() => {
                setShowPopup(false)
                window.location.reload()
              }
              }
            >
              OK
            </Button>
          </div>
            )
            } 
         
        </div>
    );
};

const popupStyles = {
    position: 'fixed',
    height: '100px',
    width: '300px',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border:'2px solid #4caf50',
    color: '#4caf50',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    textAlign: 'center',
  };
