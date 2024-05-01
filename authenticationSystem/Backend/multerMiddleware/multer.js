import multer from "multer";
const storage=multer.diskStorage({
    destination:function (req,file,cb){
     cb(null,"./upload");
    },
    filename:function (req,file,cb){
        console.log(file);
        cb(null,Date.now()+"-"+file.originalname);
    }
})
// const imageFilter=(req,file,cb)=>{
//     if(file.mimetype.startsWith("image/")){
//         cb(null,true)//accept the file 
//     }
//     else{
//         let error=new Error("only image file can be uploaded");
//         cb(error,false)//create instance of error and error message
//         console.log(error)
//     }
// }
const checkData=multer({
    storage:storage,
}).single("profile")
export default checkData;