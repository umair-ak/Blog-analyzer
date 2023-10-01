
# Blog analyzer and Search tool 

A middle ware that analyzes the data retrieved from a third-party blog API which is given below and provides insightful statistics to clients.

A blog search endpoint is also implemented.


```http
Third party api used :

curl --request GET \
  --url https://intent-kit-16.hasura.app/api/rest/blogs \
  --header 'x-hasura-admin-secret: 32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6
```



## Tech Stack


**Backend:** NodeJs, Express.Js



## API 

#### Get analysis of the blogs that are fetched. 

```http
  GET /api/blogs-stats
```

The api would return the following details in a json format.

* The total number of blogs fetched.

* The blog with the longest title.

* The number of blogs with titles containing the word "privacy."

* An array of unique blog titles (no duplicates).



#### Get item

```http
  GET /api/blog-search?query=privacy
```

This api would return all the blogs in which the title matchs or contains the word in the query.




## Optimizations

A caching mechanism using Lodash's memoize function to store the analytics results and search results for a certain period. If the same requests are made within the caching period, return the cached results instead of re-fetching and re-analyzing the data


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`KEY` : 32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6




## Lessons Learned

During the course of this project, I had the opportunity to learn about caching mechanism using Lodash. 

I discovered how caching can significantly improve the performance of a system by storing frequently accessed data in a ‘cache’ for quick retrieval. 


## Feedback

If you have any feedback, please reach out to me at uak1911@gmail.com

