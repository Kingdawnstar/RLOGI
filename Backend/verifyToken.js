import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json("You are not authenticated")
        
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
        if (err) {
            return res.status(403).json("Token is invalid")
        }
        req.userId = data._id
        
        next()
    })
}

export default verifyToken