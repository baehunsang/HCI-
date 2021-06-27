const express = require('express');
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
  fs.readFile('Menu.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/Menu.html', function (req, res) {
  fs.readFile('Menu.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/Exercise_selection.html', function (req, res) {
  fs.readFile('Exercise_selection.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/PushUp.html', function (req, res) {
  fs.readFile('PushUp.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/PullUp.html', function (req, res) {
  fs.readFile('PullUp.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/Lunge.html', function (req, res) {
  fs.readFile('Lunge.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/Squat.html', function (req, res) {
  fs.readFile('Squat.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/StartExercise.html', function (req, res) {
  fs.readFile('StartExercise.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/History.html', function (req, res) {
  fs.readFile('History.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_1.png', function (req, res) {
  fs.readFile('_1.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_2_v.png', function (req, res) {
  fs.readFile('_2_v.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_3.png', function (req, res) {
  fs.readFile('_3.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_4_x.png', function (req, res) {
  fs.readFile('_4_x.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_1@2x.png', function (req, res) {
  fs.readFile('_1@2x.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_2_v@2x.png', function (req, res) {
  fs.readFile('_2_v@2x.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_3@2x.png', function (req, res) {
  fs.readFile('_3@2x.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/_4_x@2x.png', function (req, res) {
  fs.readFile('_4_x@2x.png', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/showchart.js', function (req, res) {
  fs.readFile('showchart.js', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
app.get('/excontrol.js', function (req, res) {
  fs.readFile('excontrol.js', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      });
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});


