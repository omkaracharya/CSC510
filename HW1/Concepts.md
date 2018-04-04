## Concepts
#### Additional concerns related to using REST APIs
* REST APIs are usually a collection of endpoints, where each endpoint represents a resource. So when a client needs data from multiple resources, it needs to perform multiple round-trips to a REST API to put together the data it needs.  
* In a REST API, there is no client request language. Clients do not have control over what data the server will return. There is no language through which they can do so. More accurately, the language available for clients is very limited.  
* One other big problem with REST APIs is versioning. If you need to support multiple versions, that usually means new endpoints. This leads to more problems while using and maintaining those endpoints and it might be the cause of code duplication on the server.  

#### RESTful architecture vs. GraphQL
Let us take an example of a view to represent **the hollywood celebrities**. This view displays **the person's name**, **nationality**, and **movies**. To get the list of all the celebrities, `JSON` data will look something like this:
```
{
  "data": {
    "celebrity": {
      "name": "Tom Cruise",
      "nationality": "American",
      "films": [
        { "title": "Mission Impossible" },
        { "title": "The Mummy" },
        { "title": "Top Gun" }
      ]
    }
  }
}
```
To get this celebrity, `REST`'s call will be:
```
GET - /celebrity/{id}
```
Now, to list all his **movies** and their details, multiple `REST` calls are needed:
```
GET - /films/1
GET - /films/2
GET - /films/3
```
`GraphQL` can avoid all this by making a **single round trip** to the server.

##### GraphQL Advantages:
`GraphQL` helps in eliminating the following problems which `REST API` fails to resolve:
* **The need to do multiple round trips to fetch data required by a view:** `GraphQL` can always fetch all the initial data required by a view with a single round-trip to the server. To do the same with a `REST API`, unstructured parameters and conditions need to be introduced which are hard to manage and scale.
* **Clients dependency on servers:** With `GraphQL`, the client speaks a request language which: 
    * Eliminates the need for the server to hardcode the shape or size of the data
    * Decouples clients from servers. 
This means we can maintain and improve clients separately from servers.
* **The bad front-end developer experience:** With `GraphQL`, developers express the data requirements of their user interfaces using a declarative language. They express what they need, not how to make it available. There is a tight relationship between what data is needed by the UI and the way a developer can express a description of that data in `GraphQL`.
