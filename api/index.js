const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app=express()
app.use(express.json())
app.use(cors())


async function logUserIn(urun) {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            //url: `http://localhost:8808/hptable/select/${mukellef}`,
            url: `https://sap.ndbstr.com:1081/sap/opu/odata/sap/ZED_LEARNING_PR_MATERIAL_SRV/MaterialSet(IMatnr='${urun}')`,
            headers: {
                'Content-Type': 'application/json'
             },
            auth: {
                username: 'D_EDEMIRHAN',
                password: 'Sap2023!',
              },
            };
  
      const response = await axios(config);
  
      return response.data;
    } catch (err) {
      return "ürün listede yok";
    }
  }
app.get("/",(req,res)=>{
    res.json("started SAP backend")
})

app.get("/sap/urunler/:urunid",async(req,res)=>{
    const {urunid} = req.params;
    await logUserIn(urunid).then((data)=>{
        
        res.status(200).json({searched:urunid,list:JSON.parse(data.d.ERecs),code:"success"})
    }).catch((err)=> res.json({searched:urunid,list:[],code:"error"})
    )
})

app.listen(process.env.PORT || 3300,()=>{
    console.log("SAP running !")
});