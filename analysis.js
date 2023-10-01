const _ = require("lodash");

// returns the total number of blogs.
function totalNoOfBlogs(allBlogs){
    return _.size(allBlogs);
}

// Find the longest title among all the blogs.
function longestBlog(allBlogs){
    let longest = "";
    
    allBlogs.forEach(blog => {
        let title = blog.title;
        if(_.size(title)>_.size(longest)){
            longest = title;
        }        
    });
    return longest;
}

// function to determine the number of blogs that contain the word privacy 
function titlesWithPrivacy(allBlogs){
    let count = 0;

    allBlogs.forEach(blog => {
        let title = _.lowerCase(blog.title);

        if(title.includes("privacy")){
            count++;
        }
    });
    return count;
}

// return an array that contain all the unique blog titles.
function findUinque(allBlogs){

    let titlesArr = []
    
    allBlogs.forEach(blog => {
        let title = _.lowerCase(blog.title);
        titlesArr.push(title);
    });

    return Array.from(new Set(titlesArr));
}

module.exports = {
    totalNoOfBlogs,
    longestBlog,
    titlesWithPrivacy,
    findUinque,
};