const mongoose = require('mongoose');
const Card = mongoose.model('card');

module.exports = function(router, passport) {

    router.post('/register',
        passport.authenticate('local-signup'),
        function(req, res) {
            res.status(200).json({ user: req.user.email
        });
    });

    router.post('/login',
        passport.authenticate('local-login'
        ),
        function(req, res) {
            console.log(req.isAuthenticated());
            res.status(200).json({ user: req.user.email
        });
    });

    //here we are going to qury back all the users' data including username, email, all his cards
    router.get('/profile',
        //isLoggedIn,
        function(req, res) {
            console.log(req.isAuthenticated());
            //add more query based on req.user.id
            // res.status(200).json({ user: req.user, message: "Welcome!"});
            res.send(req.user);
    });


    router.get('/logout', function(req, res) {
        req.logOut();
        res.redirect('/');
        res.status(200).json({ message: "logged out "});
    });

    router.get('/cards', isLoggedIn, (req, res) => {
        Card.find({ userId: req.user.id })
          .then ( (cards) =>{
            res.send(cards);
          }
          )
    });

    router.get('/collections',function(req, res){
    Card.find(function(err, collections){
                    if(err){
                        return res.status(500).json({message:"Server error", data:[]});
                    }
                    // if (collections == null || collections.length == 0) {
                    //     res.status(404).json({message:'Empty', data:{}});
                    // }
                    res.status(200).json({message:'OK!', data:collections});
                });
  });

    router.post('/cards', isLoggedIn, (req, res) => {

      console.log(req.body);
      const {card_name, city_name, Latitude, Longitude, day, money, picture, post_txt } = req.body;

      const card = new Card({
        card_name,
        city_name,
        Latitude,
        Longitude,
        day,
        money,
        picture,
        post_txt,
        userId: req.user.id
      });

      card.save()
        .then ( () =>{
          req.user.save()
            .then( (user) => {
              res.send(user);
            }
            )
        }
      )
  });


    router.get('/followings', isLoggedIn, (req, res) => {
        Card.find({ userId: req.user.id })
          .then ( (cards) =>{
            res.send(cards);
          }
        )
    });


    router.post('/deletecards', (req, res) => {
      const { cardId } = req.body;

      Card.remove({_id: cardId}).then(
        Card.find({ userId: req.user.id })
          .then ( (cards) =>{
            res.send(cards);
          }
        )
      )
  });

    return router;
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ message: "unable to auth" });
}
