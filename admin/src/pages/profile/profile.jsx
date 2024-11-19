import { Button } from "@mui/material"

export const Profile = ()=>{

    return <div className="p-8 w-full  justify-between items-center">
        <div>
            <p className="text-lg font-bold">Full Name</p>
            <p className="text-light-purple">Nahom Melese</p>
            <Button>Change</Button>
        </div>
        <div>
            <p className="text-lg font-bold">Email</p>
            <p className="text-light-purple">nahomjr17@gmail.com</p>
            <Button>Change</Button>
        </div>
        <div>
            <p className="text-lg font-bold">Role</p>
            <p className="text-light-purple">Admin</p>
        </div>
        <div>
            <p className="text-lg font-bold">Created Date</p>
            <p className="text-light-purple">12-09-24</p>
            <Button>Change</Button>
        </div>
         <div>
            <p className="text-lg font-bold">Password</p>
             <Button>Change Password</Button>
         </div>
       
    </div>
}