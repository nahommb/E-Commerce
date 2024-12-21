
const userlogoutController = (req,res)=>{
    console.log('test')
    res.clearCookie('refreshToken', {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'None',
         // make sure this matches the path where the cookie was set
    });
   res.json({message:'cleared'})
}
const adminLogoutController = (req,res)=>{
    console.log('test')
    res.clearCookie('adminRefreshToken', {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'None', // make sure this matches the path where the cookie was set
    });
   res.json({message:'cleared'})
}
module.exports = {userlogoutController,adminLogoutController};