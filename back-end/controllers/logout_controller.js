
const logoutController = (req,res)=>{
    console.log('test')
    res.clearCookie('refreshToken', {
        httpOnly: true,
        path: '/', // make sure this matches the path where the cookie was set
    });
   res.json({message:'cleared'})
}

module.exports = logoutController;