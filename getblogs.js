const _ = require("lodash");
const axios = require("axios");
async function getBlogs(blog_url){
    try {
        const result = await axios.get(blog_url,{
            headers:{
                'x-hasura-admin-secret':process.env.KEY
            }
        });
        return result;
            
        }catch (error) {
            console.log(error);
            return error;
        } 
}

let MgetBlogs = _.memoize(getBlogs);

module.exports = {
    MgetBlogs
};