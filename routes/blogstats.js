require('dotenv').config();
const express = require("express");
const axios = require("axios");
const router = express.Router();

const blog_url = "https://intent-kit-16.hasura.app/api/rest/blogs";

router.get("/",async (req,res)=>{
    try {
        const data = await axios.get(blog_url,{
            headers:{
                'x-hasura-admin-secret':process.env.KEY
            }
        });
        console.log(data.data.blogs);
        }catch (error) {
            console.log(error);
        }
    
});

module.exports = router;