function userController(User) {
    function post(req, res) {
        const user = new User(req.body);

        user.save(function (err) {
            if (err) {
                if (err.code == 11000) {
                    if (err.message.includes("username_1")) {
                        res.status(400)
                        return res.send("Duplicate username found");
                    }
                }
                //some other error
                return res.status(400).send(err);
            }

            return res.status(201).json(user);
        });
    }
    function get(req, res) {
        const query = {};
        // eslint-disable-next-line no-underscore-dangle
        if (req.query.first_name) {
            // eslint-disable-next-line no-underscore-dangle
            query.first_name = req.query.first_name;
        }

        User.find(query, (err, users) => {
            if (err) {
                return res.send(err);
            }
            return res.json(users);
        });
    }

    function getUser(req, res) {
        res.json(req.user);
    }

    function putUser(req, res) {
        if (req.body.username){
            delete req.body.username;
        }

        req.user.save((err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(user);
        });
    }

    function patchUser(req, res) {
        const { user } = req;
        // eslint-disable-next-line no-underscore-dangle
        if (req.body._id) {
            // eslint-disable-next-line no-underscore-dangle
            delete req.body._id;
        }
        if (req.body.username) {
            delete req.body.username;
        }


        Object.entries(req.body).forEach((item) => {
            const key = item[0];
            const value = item[1];
            if(value.length == 0){
                return;
            }
            user[key] = value;
        });

        req.user.save((err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(user);
        });
    }
    function deleteUser(req, res) {
        req.user.remove((err) => {
            if (err) {
                return res.send(err);
            }
            return res.sendStatus(204);
        });
    }

    return { post, get, getUser, putUser, patchUser, deleteUser };

}

module.exports = userController;