import jwt from "jsonwebtoken";
const checkLogin=(req,resp,next)=>{
    let token=req.cookies.token;
    if(!token){
        // resp.send("please login or register to get token")
        resp.redirect("http://localhost:5173/login");

    }
    else{
        try{
        let decoded=jwt.verify(token,process.env.SECRET_KEY);
        console.log(decoded.user);
        next();
    }
catch(error){
    resp.send("unauthorized token")
}
    }
}
export default checkLogin;