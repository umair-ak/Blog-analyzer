require('dotenv').config();
const express = require("express");
const axios = require("axios");
const { toLower } = require('lodash');
const router = express.Router();
const searcher = require("./../search");

const blog_url = "https://intent-kit-16.hasura.app/api/rest/blogs";

router.get("/",async (req,res)=>{
    try {
        const result = await axios.get(blog_url,{
            headers:{
                'x-hasura-admin-secret':process.env.KEY
            }
        });

        let  Blogs = result.data.blogs;
        let userquery = toLower(req.query.query);

        let found = searcher.searchBlogs(Blogs,userquery);
        
        res.send(JSON.stringify(found));

        }catch (error) {
            console.log("Error while retriving the data");
            console.log(error);
        }
    
});

module.exports = router;