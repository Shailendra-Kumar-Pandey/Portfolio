import emailRecever from "../utility/emailRecever.js";


export const sendMailController = async (req, res)=>{

    let {name, email, massage} = req.body;

    // if(!name || !email || !massage){
    //     return res.status(404).json({massage : "All Field Required.."})
    // }
    
    try {
        
        let subject = name + " " + email;
        let data = await emailRecever(subject, massage);

         return res.status(201).json({
            massage : "Massage send Successfully...",
            result : data
         })

    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }



}