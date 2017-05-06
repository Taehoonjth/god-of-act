const AWS = require('aws-sdk');
const axios = require('axios');

AWS.config.update(
  {
    accessKeyId: process.env.AWS_Access_Key_ID,
    secretAccessKey: process.env.AWS_Secret_Access_Key,
    "region": 'us-west-1',
  });

const axios_instance = axios.create({
  headers: {'Ocp-Apim-Subscription-Key': process.env.MICROSOFT_Emotion_Key}
});

const s3 = new AWS.S3();

var getFilename = function(user) {
  var random = Math.floor(Math.random() * 10000000000000000);
  var filename = 'product_image' + '/' + random;
  return filename;
};

module.exports = function(req, res) {
  console.log(req.file);
  console.log({
    accessKeyId: process.env.AWS_Access_Key_ID,
    secretAccessKey: process.env.AWS_Secret_Access_Key,
    "region": 'us-west-1',
  });
  var filename = getFilename()
  s3.putObject({
      Bucket: 'affluentsponges',
      Key: filename, //https://s3-us-west-1.amazonaws.com/affluentsponges/my.great_photos-2014/jan/myvacation.jpg
      Body: req.file.buffer,
      ACL: 'public-read' // your permisions  
    }, (err) => { 
      if (err) {
        console.log('this is err from aws s3', err);
        return res.status(400).send(err);
      }
      console.log('image upload is done.');

      axios_instance.post('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
        "url": 'https://s3-us-west-1.amazonaws.com/affluentsponges/' + filename
      })
      .then(function (response) {
        console.dir(response.data);
        // res.send('https://s3-us-west-1.amazonaws.com/affluentsponges/' + filename);
        res.json({
          imageURL: 'https://s3-us-west-1.amazonaws.com/affluentsponges/' + filename,
          emotionResult: response.data
        });
        //delete photo from s3
        s3.deleteObject({
          Bucket: 'affluentsponges',
          Key: filename
        }, (err) => {
          if (err) {
            console.log('this is err from aws s3 for delete', err);
          }
          console.log('delete ' + filename + ' is done');
        });
      })
      .catch(function (error) {
        console.log(error);
      });

  });
}