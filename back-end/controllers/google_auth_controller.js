const passport = require("passport");



const googleLogin = async(req, res,next) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
};

const googleAuthCallback = (req, res, next) => {
    passport.authenticate("google", {
      failureRedirect: "/login", // Redirect to login if authentication fails
    })(req, res, () => {
      // On successful authentication
      res.redirect("/dashboard"); // Redirect to a protected route (or wherever needed)
    });
  };

// app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
//   );
   
//   app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", {
//       successRedirect: "/google_auth_success",
//       failureRedirect: "/login",
//     })
//   );
  
//   app.get("/google_auth_success", (req, res) => {

//     // give refresh token and save on db 
//     res.redirect('http://niyasportswear.netlify.app');
  
//     // res.send(req.user ? `Welcome ${req.user.displayName}` : "Please log in.");
//   });

  module.exports = {
    googleLogin,
    googleAuthCallback, 
  
  };