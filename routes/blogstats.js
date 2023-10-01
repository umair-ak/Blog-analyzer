require('dotenv').config();
const express = require("express");
const axios = require("axios");
const analyser = require("./../analysis");
const router = express.Router();

const blog_url = "https://intent-kit-16.hasura.app/api/rest/blogs";

function analyse(Blogs){
    console.log("Number of blogs fetched : "+analyser.totalNoOfBlogs(Blogs));
    
    console.log(analyser.longestBlog(Blogs));

    console.log("no of blogs containing word privacy : "+analyser.titlesWithPrivacy(Blogs));
    
    let uniqueTitles = analyser.findUinque(Blogs);
    
};


router.get("/",async (req,res)=>{
    try {
        const result = await axios.get(blog_url,{
            headers:{
                'x-hasura-admin-secret':process.env.KEY
            }
        });
        let  Blogs = result.data.blogs
        analyse(Blogs);
        
        res.send("<h1>data is fetched.</h1>");
        }catch (error) {
            console.log(error);
        }
    
});

module.exports = router;