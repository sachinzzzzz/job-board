import jwt from "jsonwebtoken";
const isAuthenticated = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"user not authenticated",
                sucess:false
            });
        }
        const discode = await jwt.verify(token,process.env.SECRET_KEY);
        if(!discode){
            return res.status(401).json({
                message:"ivalid token",
                success:false 
            });
        }
        req.id = discode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;