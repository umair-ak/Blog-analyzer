require('dotenv').config();
const express = require("express");
const axios = require("axios");
const analyser = require("./../analysis");
const router = express.Router();

const blog_url = "https://intent-kit-16.hasura.app/api/rest/blogs";

function analyse(Blogs){
    
    let obj = {
        totalNoOfBlogs : analyser.totalNoOfBlogs(Blogs),
        longestBlog : analyser.longestBlog(Blogs),
        titlesWithPrivacy : analyser.titlesWithPrivacy(Blogs),
        uniqueTitle : analyser.findUinque(Blogs)
    }
    
    return JSON.stringify(obj);

};


router.get("/",async (req,res)=>{
    try {
        const result = await axios.get(blog_url,{
            headers:{
                'x-hasura-admin-secret':process.env.KEY
            }
        });
        let  Blogs = result.data.blogs;
        let response = analyse(Blogs);
        
        res.send(response);

        }catch (error) {
            console.log(error);
        }
    
});

module.exports = router;