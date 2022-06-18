const index = require("../index") 
const request = require("supertest") 
const express = require("express") 
const app = express() 

app.use(express.urlencoded({ extended: false })) 
app.use("/", index) 

test("Route 1 works", done => {
  request(app)
    .get("/api/ping")
    .expect("Content-Type", /json/)
    .expect({"success": true})
    .expect(200, done) 
}) 

test("Route 2: attempt with one tag", done => {
  request(app)
    .get("/api/posts?tags=science")
    .expect("Content-Type", /json/)
    .expect({"posts":[{"author":"Elisha Friedman","authorId":8,"id":4,"likes":728,"popularity":0.88,"reads":19645,"tags":["science","design","tech"]},{"author":"Zackery Turner","authorId":12,"id":6,"likes":387,"popularity":0.83,"reads":50062,"tags":["science","startups"]},{"author":"Ahmad Dunn","authorId":7,"id":7,"likes":499,"popularity":0.93,"reads":95434,"tags":["science","health"]},{"author":"Elisha Friedman","authorId":8,"id":10,"likes":853,"popularity":0.6,"reads":35913,"tags":["science","health","history"]},{"author":"Ahmad Dunn","authorId":7,"id":11,"likes":750,"popularity":0.54,"reads":6183,"tags":["science","design"]},{"author":"Rylee Paul","authorId":9,"id":17,"likes":527,"popularity":0.88,"reads":52454,"tags":["science","health"]},{"author":"Elisha Friedman","authorId":8,"id":19,"likes":779,"popularity":0.91,"reads":3041,"tags":["science"]},{"author":"Lainey Ritter","authorId":1,"id":21,"likes":406,"popularity":0.81,"reads":88797,"tags":["science","startups"]},{"author":"Lainey Ritter","authorId":1,"id":33,"likes":289,"popularity":0.73,"reads":31629,"tags":["science"]},{"author":"Rylee Paul","authorId":9,"id":40,"likes":968,"popularity":0.54,"reads":90784,"tags":["culture","science"]},{"author":"Jon Abbott","authorId":4,"id":43,"likes":149,"popularity":0.07,"reads":77776,"tags":["science","tech"]},{"author":"Ahmad Dunn","authorId":7,"id":45,"likes":31,"popularity":0.89,"reads":63432,"tags":["science","history"]},{"author":"Elisha Friedman","authorId":8,"id":52,"likes":602,"popularity":0.26,"reads":76359,"tags":["science","health"]},{"author":"Trevon Rodriguez","authorId":5,"id":58,"likes":466,"popularity":0.1,"reads":17389,"tags":["science","tech"]},{"author":"Jon Abbott","authorId":4,"id":62,"likes":135,"popularity":0.83,"reads":87712,"tags":["culture","science"]},{"author":"Adalyn Blevins","authorId":11,"id":69,"likes":425,"popularity":0.56,"reads":5149,"tags":["science","history"]},{"author":"Trevon Rodriguez","authorId":5,"id":74,"likes":660,"popularity":0.95,"reads":51324,"tags":["science"]},{"author":"Kinley Crosby","authorId":10,"id":75,"likes":733,"popularity":0.98,"reads":94910,"tags":["science","design","culture"]},{"author":"Trevon Rodriguez","authorId":5,"id":77,"likes":407,"popularity":0.21,"reads":664,"tags":["politics","startups","tech","science"]},{"author":"Jon Abbott","authorId":4,"id":87,"likes":619,"popularity":0.66,"reads":61622,"tags":["culture","startups","science"]},{"author":"Kinley Crosby","authorId":10,"id":88,"likes":371,"popularity":0.35,"reads":21916,"tags":["culture","science","history"]},{"author":"Zackery Turner","authorId":12,"id":91,"likes":455,"popularity":0.19,"reads":90395,"tags":["science","health"]},{"author":"Lainey Ritter","authorId":1,"id":96,"likes":395,"popularity":0.44,"reads":99575,"tags":["science","history"]},{"author":"Lainey Ritter","authorId":1,"id":97,"likes":382,"popularity":0.83,"reads":47484,"tags":["politics","science","design","culture"]},{"author":"Ahmad Dunn","authorId":7,"id":100,"likes":573,"popularity":0.43,"reads":89894,"tags":["science","design","history"]}]})
    .expect(200, done) 
}) 

test("Route 2: attempt with one tag and sort parameter", done => {
  request(app)
    .get("/api/posts?tags=science&sortBy=popularity")
    .expect("Content-Type", /json/)
    .expect({"posts":[{"author":"Jon Abbott","authorId":4,"id":43,"likes":149,"popularity":0.07,"reads":77776,"tags":["science","tech"]},{"author":"Trevon Rodriguez","authorId":5,"id":58,"likes":466,"popularity":0.1,"reads":17389,"tags":["science","tech"]},{"author":"Zackery Turner","authorId":12,"id":91,"likes":455,"popularity":0.19,"reads":90395,"tags":["science","health"]},{"author":"Trevon Rodriguez","authorId":5,"id":77,"likes":407,"popularity":0.21,"reads":664,"tags":["politics","startups","tech","science"]},{"author":"Elisha Friedman","authorId":8,"id":52,"likes":602,"popularity":0.26,"reads":76359,"tags":["science","health"]},{"author":"Kinley Crosby","authorId":10,"id":88,"likes":371,"popularity":0.35,"reads":21916,"tags":["culture","science","history"]},{"author":"Ahmad Dunn","authorId":7,"id":100,"likes":573,"popularity":0.43,"reads":89894,"tags":["science","design","history"]},{"author":"Lainey Ritter","authorId":1,"id":96,"likes":395,"popularity":0.44,"reads":99575,"tags":["science","history"]},{"author":"Ahmad Dunn","authorId":7,"id":11,"likes":750,"popularity":0.54,"reads":6183,"tags":["science","design"]},{"author":"Rylee Paul","authorId":9,"id":40,"likes":968,"popularity":0.54,"reads":90784,"tags":["culture","science"]},{"author":"Adalyn Blevins","authorId":11,"id":69,"likes":425,"popularity":0.56,"reads":5149,"tags":["science","history"]},{"author":"Elisha Friedman","authorId":8,"id":10,"likes":853,"popularity":0.6,"reads":35913,"tags":["science","health","history"]},{"author":"Jon Abbott","authorId":4,"id":87,"likes":619,"popularity":0.66,"reads":61622,"tags":["culture","startups","science"]},{"author":"Lainey Ritter","authorId":1,"id":33,"likes":289,"popularity":0.73,"reads":31629,"tags":["science"]},{"author":"Lainey Ritter","authorId":1,"id":21,"likes":406,"popularity":0.81,"reads":88797,"tags":["science","startups"]},{"author":"Zackery Turner","authorId":12,"id":6,"likes":387,"popularity":0.83,"reads":50062,"tags":["science","startups"]},{"author":"Jon Abbott","authorId":4,"id":62,"likes":135,"popularity":0.83,"reads":87712,"tags":["culture","science"]},{"author":"Lainey Ritter","authorId":1,"id":97,"likes":382,"popularity":0.83,"reads":47484,"tags":["politics","science","design","culture"]},{"author":"Elisha Friedman","authorId":8,"id":4,"likes":728,"popularity":0.88,"reads":19645,"tags":["science","design","tech"]},{"author":"Rylee Paul","authorId":9,"id":17,"likes":527,"popularity":0.88,"reads":52454,"tags":["science","health"]},{"author":"Ahmad Dunn","authorId":7,"id":45,"likes":31,"popularity":0.89,"reads":63432,"tags":["science","history"]},{"author":"Elisha Friedman","authorId":8,"id":19,"likes":779,"popularity":0.91,"reads":3041,"tags":["science"]},{"author":"Ahmad Dunn","authorId":7,"id":7,"likes":499,"popularity":0.93,"reads":95434,"tags":["science","health"]},{"author":"Trevon Rodriguez","authorId":5,"id":74,"likes":660,"popularity":0.95,"reads":51324,"tags":["science"]},{"author":"Kinley Crosby","authorId":10,"id":75,"likes":733,"popularity":0.98,"reads":94910,"tags":["science","design","culture"]}]})
    .expect(200, done)
}) 

test("Route 2: attempt with one tag and asc direction parameter", done => {
  request(app)
    .get("/api/posts?tags=science&direction=asc")
    .expect("Content-Type", /json/)
    .expect({"posts":[{"author":"Elisha Friedman","authorId":8,"id":4,"likes":728,"popularity":0.88,"reads":19645,"tags":["science","design","tech"]},{"author":"Zackery Turner","authorId":12,"id":6,"likes":387,"popularity":0.83,"reads":50062,"tags":["science","startups"]},{"author":"Ahmad Dunn","authorId":7,"id":7,"likes":499,"popularity":0.93,"reads":95434,"tags":["science","health"]},{"author":"Elisha Friedman","authorId":8,"id":10,"likes":853,"popularity":0.6,"reads":35913,"tags":["science","health","history"]},{"author":"Ahmad Dunn","authorId":7,"id":11,"likes":750,"popularity":0.54,"reads":6183,"tags":["science","design"]},{"author":"Rylee Paul","authorId":9,"id":17,"likes":527,"popularity":0.88,"reads":52454,"tags":["science","health"]},{"author":"Elisha Friedman","authorId":8,"id":19,"likes":779,"popularity":0.91,"reads":3041,"tags":["science"]},{"author":"Lainey Ritter","authorId":1,"id":21,"likes":406,"popularity":0.81,"reads":88797,"tags":["science","startups"]},{"author":"Lainey Ritter","authorId":1,"id":33,"likes":289,"popularity":0.73,"reads":31629,"tags":["science"]},{"author":"Rylee Paul","authorId":9,"id":40,"likes":968,"popularity":0.54,"reads":90784,"tags":["culture","science"]},{"author":"Jon Abbott","authorId":4,"id":43,"likes":149,"popularity":0.07,"reads":77776,"tags":["science","tech"]},{"author":"Ahmad Dunn","authorId":7,"id":45,"likes":31,"popularity":0.89,"reads":63432,"tags":["science","history"]},{"author":"Elisha Friedman","authorId":8,"id":52,"likes":602,"popularity":0.26,"reads":76359,"tags":["science","health"]},{"author":"Trevon Rodriguez","authorId":5,"id":58,"likes":466,"popularity":0.1,"reads":17389,"tags":["science","tech"]},{"author":"Jon Abbott","authorId":4,"id":62,"likes":135,"popularity":0.83,"reads":87712,"tags":["culture","science"]},{"author":"Adalyn Blevins","authorId":11,"id":69,"likes":425,"popularity":0.56,"reads":5149,"tags":["science","history"]},{"author":"Trevon Rodriguez","authorId":5,"id":74,"likes":660,"popularity":0.95,"reads":51324,"tags":["science"]},{"author":"Kinley Crosby","authorId":10,"id":75,"likes":733,"popularity":0.98,"reads":94910,"tags":["science","design","culture"]},{"author":"Trevon Rodriguez","authorId":5,"id":77,"likes":407,"popularity":0.21,"reads":664,"tags":["politics","startups","tech","science"]},{"author":"Jon Abbott","authorId":4,"id":87,"likes":619,"popularity":0.66,"reads":61622,"tags":["culture","startups","science"]},{"author":"Kinley Crosby","authorId":10,"id":88,"likes":371,"popularity":0.35,"reads":21916,"tags":["culture","science","history"]},{"author":"Zackery Turner","authorId":12,"id":91,"likes":455,"popularity":0.19,"reads":90395,"tags":["science","health"]},{"author":"Lainey Ritter","authorId":1,"id":96,"likes":395,"popularity":0.44,"reads":99575,"tags":["science","history"]},{"author":"Lainey Ritter","authorId":1,"id":97,"likes":382,"popularity":0.83,"reads":47484,"tags":["politics","science","design","culture"]},{"author":"Ahmad Dunn","authorId":7,"id":100,"likes":573,"popularity":0.43,"reads":89894,"tags":["science","design","history"]}]})
    .expect(200, done) 
}) 

test("Route 2: attempt with one tag and desc direction parameter", done => {
  request(app)
    .get("/api/posts?tags=science&direction=desc")
    .expect("Content-Type", /json/)
    .expect({"posts":[{"author":"Ahmad Dunn","authorId":7,"id":100,"likes":573,"popularity":0.43,"reads":89894,"tags":["science","design","history"]},{"author":"Lainey Ritter","authorId":1,"id":97,"likes":382,"popularity":0.83,"reads":47484,"tags":["politics","science","design","culture"]},{"author":"Lainey Ritter","authorId":1,"id":96,"likes":395,"popularity":0.44,"reads":99575,"tags":["science","history"]},{"author":"Zackery Turner","authorId":12,"id":91,"likes":455,"popularity":0.19,"reads":90395,"tags":["science","health"]},{"author":"Kinley Crosby","authorId":10,"id":88,"likes":371,"popularity":0.35,"reads":21916,"tags":["culture","science","history"]},{"author":"Jon Abbott","authorId":4,"id":87,"likes":619,"popularity":0.66,"reads":61622,"tags":["culture","startups","science"]},{"author":"Trevon Rodriguez","authorId":5,"id":77,"likes":407,"popularity":0.21,"reads":664,"tags":["politics","startups","tech","science"]},{"author":"Kinley Crosby","authorId":10,"id":75,"likes":733,"popularity":0.98,"reads":94910,"tags":["science","design","culture"]},{"author":"Trevon Rodriguez","authorId":5,"id":74,"likes":660,"popularity":0.95,"reads":51324,"tags":["science"]},{"author":"Adalyn Blevins","authorId":11,"id":69,"likes":425,"popularity":0.56,"reads":5149,"tags":["science","history"]},{"author":"Jon Abbott","authorId":4,"id":62,"likes":135,"popularity":0.83,"reads":87712,"tags":["culture","science"]},{"author":"Trevon Rodriguez","authorId":5,"id":58,"likes":466,"popularity":0.1,"reads":17389,"tags":["science","tech"]},{"author":"Elisha Friedman","authorId":8,"id":52,"likes":602,"popularity":0.26,"reads":76359,"tags":["science","health"]},{"author":"Ahmad Dunn","authorId":7,"id":45,"likes":31,"popularity":0.89,"reads":63432,"tags":["science","history"]},{"author":"Jon Abbott","authorId":4,"id":43,"likes":149,"popularity":0.07,"reads":77776,"tags":["science","tech"]},{"author":"Rylee Paul","authorId":9,"id":40,"likes":968,"popularity":0.54,"reads":90784,"tags":["culture","science"]},{"author":"Lainey Ritter","authorId":1,"id":33,"likes":289,"popularity":0.73,"reads":31629,"tags":["science"]},{"author":"Lainey Ritter","authorId":1,"id":21,"likes":406,"popularity":0.81,"reads":88797,"tags":["science","startups"]},{"author":"Elisha Friedman","authorId":8,"id":19,"likes":779,"popularity":0.91,"reads":3041,"tags":["science"]},{"author":"Rylee Paul","authorId":9,"id":17,"likes":527,"popularity":0.88,"reads":52454,"tags":["science","health"]},{"author":"Ahmad Dunn","authorId":7,"id":11,"likes":750,"popularity":0.54,"reads":6183,"tags":["science","design"]},{"author":"Elisha Friedman","authorId":8,"id":10,"likes":853,"popularity":0.6,"reads":35913,"tags":["science","health","history"]},{"author":"Ahmad Dunn","authorId":7,"id":7,"likes":499,"popularity":0.93,"reads":95434,"tags":["science","health"]},{"author":"Zackery Turner","authorId":12,"id":6,"likes":387,"popularity":0.83,"reads":50062,"tags":["science","startups"]},{"author":"Elisha Friedman","authorId":8,"id":4,"likes":728,"popularity":0.88,"reads":19645,"tags":["science","design","tech"]}]})
    .expect(200, done) 
}) 

test("Route 2: sortBy invalid", done => {
  request(app)
    .get("/api/posts?tags=science&sortBy=foobar")
    .expect("Content-Type", /json/)
    .expect({"error":"sortBy parameter is invalid"})
    .expect(400, done) 
}) 

test("Route 2: direction invalid", done => {
  request(app)
    .get("/api/posts?tags=science&direction=foobar")
    .expect("Content-Type", /json/)
    .expect({"error":"direction parameter is invalid"}) 
    .expect(400, done) 
}) 

test("Route 2: tags required", done => {
  request(app)
    .get("/api/posts?")
    .expect("Content-Type", /json/)
    .expect({"error":"Tags parameter is required"}) 
    .expect(400, done) 
}) 

test("Route 2: tags required", done => {
  request(app)
    .get("/api/posts?tags=science,tech&sortBy=popularity&direction=desc")
    .expect("Content-Type", /json/)
    .expect({"posts":[{"author":"Kinley Crosby","authorId":10,"id":75,"likes":733,"popularity":0.98,"reads":94910,"tags":["science","design","culture"]},{"author":"Trevon Rodriguez","authorId":5,"id":74,"likes":660,"popularity":0.95,"reads":51324,"tags":["science"]},{"author":"Ahmad Dunn","authorId":7,"id":7,"likes":499,"popularity":0.93,"reads":95434,"tags":["science","health"]},{"author":"Elisha Friedman","authorId":8,"id":19,"likes":779,"popularity":0.91,"reads":3041,"tags":["science"]},{"author":"Ahmad Dunn","authorId":7,"id":45,"likes":31,"popularity":0.89,"reads":63432,"tags":["science","history"]},{"author":"Elisha Friedman","authorId":8,"id":4,"likes":728,"popularity":0.88,"reads":19645,"tags":["science","design","tech"]},{"author":"Rylee Paul","authorId":9,"id":17,"likes":527,"popularity":0.88,"reads":52454,"tags":["science","health"]},{"author":"Zackery Turner","authorId":12,"id":6,"likes":387,"popularity":0.83,"reads":50062,"tags":["science","startups"]},{"author":"Jon Abbott","authorId":4,"id":62,"likes":135,"popularity":0.83,"reads":87712,"tags":["culture","science"]},{"author":"Lainey Ritter","authorId":1,"id":97,"likes":382,"popularity":0.83,"reads":47484,"tags":["politics","science","design","culture"]},{"author":"Lainey Ritter","authorId":1,"id":21,"likes":406,"popularity":0.81,"reads":88797,"tags":["science","startups"]},{"author":"Lainey Ritter","authorId":1,"id":33,"likes":289,"popularity":0.73,"reads":31629,"tags":["science"]},{"author":"Jon Abbott","authorId":4,"id":87,"likes":619,"popularity":0.66,"reads":61622,"tags":["culture","startups","science"]},{"author":"Elisha Friedman","authorId":8,"id":10,"likes":853,"popularity":0.6,"reads":35913,"tags":["science","health","history"]},{"author":"Adalyn Blevins","authorId":11,"id":69,"likes":425,"popularity":0.56,"reads":5149,"tags":["science","history"]},{"author":"Ahmad Dunn","authorId":7,"id":11,"likes":750,"popularity":0.54,"reads":6183,"tags":["science","design"]},{"author":"Rylee Paul","authorId":9,"id":40,"likes":968,"popularity":0.54,"reads":90784,"tags":["culture","science"]},{"author":"Lainey Ritter","authorId":1,"id":96,"likes":395,"popularity":0.44,"reads":99575,"tags":["science","history"]},{"author":"Ahmad Dunn","authorId":7,"id":100,"likes":573,"popularity":0.43,"reads":89894,"tags":["science","design","history"]},{"author":"Kinley Crosby","authorId":10,"id":88,"likes":371,"popularity":0.35,"reads":21916,"tags":["culture","science","history"]},{"author":"Elisha Friedman","authorId":8,"id":52,"likes":602,"popularity":0.26,"reads":76359,"tags":["science","health"]},{"author":"Trevon Rodriguez","authorId":5,"id":77,"likes":407,"popularity":0.21,"reads":664,"tags":["politics","startups","tech","science"]},{"author":"Zackery Turner","authorId":12,"id":91,"likes":455,"popularity":0.19,"reads":90395,"tags":["science","health"]},{"author":"Trevon Rodriguez","authorId":5,"id":58,"likes":466,"popularity":0.1,"reads":17389,"tags":["science","tech"]},{"author":"Jon Abbott","authorId":4,"id":43,"likes":149,"popularity":0.07,"reads":77776,"tags":["science","tech"]}]}) 
    .expect(200, done) 
}) 




/*
test parameters
http://localhost:3000/api/posts?tags=science -> success
http://localhost:3000/api/posts?tags=science&&sortBy=id -> success
http://localhost:3000/api/posts?tags=science&&sortBy=popularity -> success
http://localhost:3000/api/posts?tags=science&&direction=asc -> success
http://localhost:3000/api/posts?tags=science&&direction=desc -> success


http://localhost:3000/api/posts?tags=science&&sortBy=foobar -> sortby invalid
http://localhost:3000/api/posts?tags=science&&direction=foobar -> direction invalid

http://localhost:3000/api/posts? -> tags required
http://localhost:3000/api/posts?direction=foobar -> tags required
http://localhost:3000/api/posts?direction=foobar -> tags required
http://localhost:3000/api/posts?foobar -> tags required

http://localhost:3000/api/posts?tags=science

*/