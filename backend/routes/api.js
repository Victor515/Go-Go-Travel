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

    router.get('/cards', isLoggedIn, async (req, res) => {
        const cards = await Card.find({ _user: req.user.id });
        res.send(cards);
    });

    router.post('/cards', isLoggedIn, async (req, res) => {

      console.log(req.body);
      const {city, expense, days, description } = req.body;

      const card = new Card({
        city,
        expense,
        days,
        description,
        _user: req.user.id
      });

      await card.save();
      const user = await req.user.save();
      res.send(user);
  });

    return router;
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ message: "unable to auth" });
}
