import { Button } from "@mui/material";
import { useState } from "react";
import './profile.css';
import { Popup } from "../../components/popup/popup";

export const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '' });

    const handleOpenModal = (title) => {
        setModalContent({ title });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-8 w-full justify-between items-center">
            <div>
                <p className="text-lg font-bold">Full Name</p>
                <p className="text-light-purple">Nahom Melese</p>
                <Button onClick={() => handleOpenModal('Change Name')}>Change</Button>
            </div>
            
            <div>
                <p className="text-lg font-bold">Email</p>
                <p className="text-light-purple">nahomjr17@gmail.com</p>
                <Button onClick={() => handleOpenModal('Change Email')}>Change</Button>
            </div>
            <div>
                <p className="text-lg font-bold">Password</p>
                <Button onClick={() => handleOpenModal('Change Password')}>Change Password</Button>
                <Popup isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
            </div>
            <div>
                <p className="text-lg font-bold">Role</p>
                <p className="text-light-purple">Admin</p>
            </div>

            <div>
                <p className="text-lg font-bold">Created Date</p>
                <p className="text-light-purple">12-09-24</p>
            </div>

          
         
        </div>
    );
};
