require('dotenv').config();
const express = require("express");
const analyser = require("./../analysis");
const {MgetBlogs} = require("./../getblogs");
const _ = require("lodash");
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

let M_analyser = _.memoize(analyse);

router.get("/",async (req,res)=>{

    let result = await MgetBlogs(blog_url);
    
    if(result.length === 0){
        console.log("no blogs retrieved")
    }else{
        let  Blogs = result.data.blogs;    
        let response = M_analyser(Blogs);
        res.send(response);
    }
    
});

module.exports = router;