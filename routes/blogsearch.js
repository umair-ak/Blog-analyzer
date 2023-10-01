require('dotenv').config();
const express = require("express");
const _ = require("lodash");
const router = express.Router();
const {M_search} = require("./../search");
const {MgetBlogs} = require("./../getblogs");

const blog_url = "https://intent-kit-16.hasura.app/api/rest/blogs";

router.get("/", async (req,res)=>{
    let result = await MgetBlogs(blog_url);

    if(result.length!= 0){

        let  Blogs = result.data.blogs;
        let userquery = _.toLower(req.query.query);
        
        let found = M_search(Blogs,userquery);
        
        if(found.length === 0){
            res.send(JSON.stringify({searchResult:"No blogs Found"}));
        }else{
            res.send(JSON.stringify(found));
        }   
    }else{
        res.send(JSON.stringify({searchResult:"No blogs available"}));
    }
});

module.exports = router;