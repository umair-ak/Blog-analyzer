const _ = require("lodash");
function searchBlogs(allBlogs,userquery){
    let foundBlogs = [];
    
    allBlogs.forEach(blog => {

        let title = _.toLower(blog.title);
        if(title.includes(userquery)){
            foundBlogs.push(blog);
        }
    });

    return foundBlogs;
}

let M_search = _.memoize(searchBlogs);

module.exports = {
    M_search
}