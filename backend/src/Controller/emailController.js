import emailRecever from "../utility/emailRecever.js";


export const sendMailController = async (req, res)=>{

    let {subject, massage} = req.body;

    if(!subject || !massage){
        return res.status(404).json({massage : "All Field Required.."})
    }
    
    try {
        
         let data = await emailRecever(subject, massage);

         return res.status(201).json({
            massage : "Massage send Successfully...",
            result : data
         })

    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }



}