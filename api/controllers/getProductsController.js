let express = require('express');
let router = express.Router();


router.get('/', function (req, res) {

  let mockProducts = {
    products:[{
      cameraId:1,
      cameraName:"DroneRush",
      image_url:"https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fdronerush.com%2Fwp-content%2Fuploads%2F2016%2F12%2FYuneec-Tornado-H920-camera-drone-1024x576.jpg&imgrefurl=https%3A%2F%2Fwww.dronerush.com%2Fbest-camera-drone-4180%2F&docid=M41o8Cjp3ASukM&tbnid=3bpx8rvQgLeWLM%3A&vet=10ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg5KAAwAA..i&w=1024&h=576&bih=694&biw=1440&q=drone%20camera%20list&ved=0ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg5KAAwAA&iact=mrc&uact=8"
    },
    {
      cameraId:2,
      cameraName:"UAV Coach",
      image_url:"https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fzi5fccrezotc23ug-zippykid.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F04%2FDJI-Inspire-1-white-camera-drone-2.jpg&imgrefurl=https%3A%2F%2Fuavcoach.com%2Fdrone-with-camera%2F&docid=JMIV4TZiwYDHwM&tbnid=IGo1rUzHsSHpIM%3A&vet=10ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg6KAEwAQ..i&w=1200&h=800&bih=694&biw=1440&q=drone%20camera%20list&ved=0ahUKEwjikvLC3MPcAhVKLY8KHVUfB-IQMwg6KAEwAQ&iact=mrc&uact=8"
    },
  ]
  }

  res.status(200).send(mockProducts.products);
});
module.exports = router;