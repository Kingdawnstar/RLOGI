
const verifySuperuser = (req, res, next) => {
    if (!req.userId) {
        return res.status(401).json("You are not authenticated");
    }

    // Find the user by ID and check if they are a superuser
    User.findById(req.userId)
        .then(user => {
            if (user && user.isSuperuser) {
                next(); // Proceed if they are a superuser
            } else {
                res.status(403).json("You do not have permission to perform this action");
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

export default verifySuperuser;
