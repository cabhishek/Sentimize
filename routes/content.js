var fool_content = require('../fool.js');

exports.fool = function(req, res){

  fool_content(req.params.symbol, function(err, contents){

    res.render('content', {
        pagename: 'NewsFeed',
        contents: contents
    });

  });

};