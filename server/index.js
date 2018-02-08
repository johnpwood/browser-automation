const express = require('express'),
      json = require('json'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      http = require('http');



const app = express();
app.use(bodyParser.json());

//massive(`postgres://${dbUser}:${dbPass}@localhost/${database}`).then(function(db){
//	app.set('db', db)}).catch(function(e){console.log(e);});


// app.use(bodyParser.json())
//     .use(session({
// 	secret:sessionSecret,
// 	resave: true,
// 	saveUninitialized: true
//     }));

app.use(express.static(__dirname + '/public'));

//app.get('/proof/:book/:prop', (req, res, next) => {
//    res.redirect(`/proof.html?book=${req.params.book}`
//}

app.post('/sub', (req, res, next) => {
  console.log(req.body);
  res.json({key: "value"});
})
    // .get('/sessiontest', (req, res, next) => {
    // 	if(req.session.views) {
    // 	    req.session.views++
    // 	    res.write(`<p>views: ${req.session.views}</p>`)
    // 	    res.write(`<p>expires in ${req.session.cookie.maxAge/1000} s</p>`)
    // 	    res.end();
    // 	} else {
    // 	    req.session.views = 1;
    // 	    res.end('welcome to a website.  hit refresh.');
    // 	}
    //})
    // .get('/dbtest', (req, res, next) => {
    //     app.get('db').massiveExample().then( results => {
    //         res.json(results);
    //     }).catch( e => {
    //         res.json(e);
    //     });
    // });

http.createServer(app).listen(3030);

