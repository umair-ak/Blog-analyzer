const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const blog_stat_router = require("./routes/blogstats");
const blog_search_router = require("./routes/blogsearch");

app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/blog-stats",blog_stat_router);
app.use("/api/blog-search",blog_search_router);


app.listen(3000,function(){
    console.log("everything is working fine");
});