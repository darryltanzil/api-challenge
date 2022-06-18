# API Challenge

A REST API written using ExpressJS, Node.JS, Axios, and tested with Jest and Supertest.

## Installation

1. Install dependencies
```bash
npm install
```

2. Run the server (automatically on localhost port 3000)
```bash
npm start
```

## Use Case 
For every tag specified in the tags parameter, fetch the posts with that tag using
the Hatchways API (make a separate API request for every tag specified)

This API calls a certain company's API, fetches all posts with the specific tag, and returns them in the specified order (ascending or descending), and via likes, popularity, or id. 

## Features 
Some optimizations I made that are relevant to the challenge:
* runs multiple GET requests to the company's API in parallel instead of one at a time, in order to maximize efficiency.
* tested every API route using JEST and SuperTest, with edge cases
* error handles that return status 400 when user makes invalid request
* use of javascript Sets and ... to spread an array and remove all duplicates in **O(n)** time

To improve on this, one could create a caching system that would speed up the runtime of those calling the API. 



