const AdminAuth = (req, res, next) => {
    const token = "xyz";
    const isAuthorized = token === "xyz"; // This will always be false, adjust if needed
    if (!isAuthorized) {
        res.send("Admin is not authorized");
    } else {
        next();
    }
};
const userAuth=(req,res,next)=>{
    const tokenn="abc";
    const IsUserAuth = tokenn === "abc";
    if(!IsUserAuth){
        res.status(401).send("User is not logged in")

    }else{
        next()
    }
}

module.exports = {
    AdminAuth,userAuth
};
