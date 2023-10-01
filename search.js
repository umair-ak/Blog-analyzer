const { toLower } = require("lodash");
function searchBlogs(allBlogs,userquery){
    let foundBlogs = [];
    
    allBlogs.forEach(blog => {

        let title = toLower(blog.title);
        if(title.includes(userquery)){
            foundBlogs.push(blog);
        }
    });

    return foundBlogs;
}

module.exports = {
    searchBlogs
}