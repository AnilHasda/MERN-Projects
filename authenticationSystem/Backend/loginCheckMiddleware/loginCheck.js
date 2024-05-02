import jwt from "jsonwebtoken";
const checkLogin=(req,resp,next)=>{
    let token=req.cookies.token;
    if(!token){
        // resp.send("please login or register to get token")
        // resp.redirect("http://localhost:5173/login");
        resp.json({message:"no token available",req})

    }
    else{
        try{
        let decoded=jwt.verify(token,process.env.SECRET_KEY);
        console.log(decoded.user);
        next();
    }
catch(error){
    req.errorMessage="unauthorized token";
    resp.json({message:"unauthorized token"})
}
    }
}
export default checkLogin;