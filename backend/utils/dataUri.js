import DataUriParser from "datauri/parser.js"
import path from "path"

const getDataUri = (file)=>{
    const parseer= new DataUriParser();
    const extName= path.extname(file.originalname).toString();
    return parseer.format(extName,file.buffer);
}

export default getDataUri;