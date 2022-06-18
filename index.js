var express = require("express")
const axios = require('axios').default
const index = express.Router()

// Route 1
index.get("/api/ping", (req, res, next) => {
    res.json(
        {
            "success": true
        }
    )
})

// Route 2
index.get("/api/posts", (req, res, next) => {
    // Handle Query Parameters
    var tags = req.query.tags
    var sortBy = req.query.sortBy || "id"
    var direction = req.query.direction || "asc"

    // for future updates to valid query parameters, can easily include in these arrays
    var sortByValues = ["id", "reads", "likes", "popularity"]
    var directionValues = ["desc", "asc"]
    var tagValues = ["science", "tech",]

    var isSortByValid = sortByValues.some((value) => value == sortBy)
    var isDirectionValid = directionValues.some((value) => value == direction)

    if (!tags) {
        res.status(400)
        res.json(
            {
                "error": "Tags parameter is required"
            }
        )
    }
    else if (!(tagValues.some((value) => tags.includes(value)))) {
        res.status(400)
        res.json(
            {
                "error": "Tags parameter is invalid"
            }
        )

    }
    else if (!isSortByValid) {
        res.status(400)
        res.json(
            {
                "error": "sortBy parameter is invalid"
            }
        )
    }
    else if (!isDirectionValid) {
        res.status(400)
        res.json(
            {
                "error": "direction parameter is invalid"
            }
        )
    }
    else {
        res.status(200)
        // performs a CONCURRENT request to the API, with all tags given
        var endpoints = []
        var splitTags = tags.split(",")

        splitTags.forEach((element) => {
            endpoints.push('https://api.hatchways.io/assessment/blog/posts?tag=' + element)
        })

        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            (data) => {
                // Sets cannot have duplicates, and ... spreads to array
                var processedData = [...new Set(data.map(object => object.data.posts))][0]
                var sortedData = []

                if (direction == "asc") {
                    sortedData = processedData.sort((a, b) => a[sortBy] - b[sortBy])
                }
                else {
                    sortedData = processedData.sort((a, b) => b[sortBy] - a[sortBy])
                }
                res.json(
                    {
                        "posts": processedData
                    }
                )
            },
        )
    }
})

module.exports = index 