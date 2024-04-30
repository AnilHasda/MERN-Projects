import bcryptjs from "bcryptjs";
export default async function chechkData(doc,next){
    try{
if(!doc.isModified("password")){
    return next();
}
else{
let hashedPassword=await bcryptjs.hash(doc.password,10);
doc.password=hashedPassword;
return next();
}
    }
    catch(error){
    return next(error);
    }
}