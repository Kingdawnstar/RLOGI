import express from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Post from '../models/post.model.js';
import Comment from '../models/comment.model.js';
import verifyToken from '../verifyToken.js';
import verifySuperuser from '../verifySuperUser.js'

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {

    try {
        const { username, password, email, number } = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            number
        })

        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
    
        res.status(500).json(err)
    }
    
    // const { username, password, email, number } = req.body;

    //  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    // if (existingUser) {
    //     return res.status(400).json({ error: 'Username or email already exists' });
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);

    // const newUser = new User({
    //     username,
    //     email,
    //     password: hashedPassword,
    //     number,
    // });

    // try {
    //     await newUser.save();
    //     res.status(201).json({ message: 'User created successfully', userId: newUser._id });
    // } catch (error) {
    //     res.status(400).json({ error: 'invalid data' });
    // }
});

//Login
// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email })
//         if (!user) {
//             return res.status(404).json("user not found!")
//         }
//         const match = await bcrypt.compare(req.body.password, user.password)
//         if (!match) {
//             return res.status(401).json("Wrong Password")
//         }

//         const token = jwt.sign({ __dirname, username: user.username, email: user.email, number: user.number },
//             process.env.SECRET_KEY, { expiresIn: "3d" }
//         )

//         const { password, ...info } = user._doc
//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'None',
//         }).status(200).json(info)
//     }
//     catch (err) {
//        console.log(err)
//     }

    
// });
//Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email, number: user.number },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
        );

        // Omit the password from the user object
        const { password: userPassword, ...info } = user._doc;

        // Set the token in a cookie and respond with user info
        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // Set to false if not using HTTPS
            sameSite: 'None',
        }).status(200).json(info);
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

//test

router.post('/test-password', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ensure both email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if user.password is defined
        if (!user.password) {
            return res.status(400).json({ message: 'Password not set for this user' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        res.status(200).json({ isMatch });
    } catch (err) {
        console.error('Error validating password:', err);
        res.status(500).json({ message: 'Error validating password', error: err.message });
    }
});
//Logout
router.get("/logout", async (req, res) => {
    try { 
        res.clearCookie("token", {sameSite: 'none', secure:true}).status(200).send("user logged out")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//refetch

router.get("/refetch", (req, res) => {
    const token = req.cookies.token
    jwt.verify(token, process.env.SECRET_KEY, {}, async (err, data) => {
        if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })
})

//update
router.put("/:id", verifyToken, async (req, res) => {
    try {
        // Check if password needs to be updated and hash it
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt); // Use bcrypt.hash instead of hashSync
        }

        // Update user details
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
        if (!updateUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Omit the password from the response
        const { password, ...info } = updateUser._doc;
        res.status(200).json(info);
    } catch (err) {
        console.error('Update error:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

//delete
router.delete("/:id", verifyToken, async (req, res) => {
    try { 
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({ userId: req.params.id })
        await Comment.deleteMany({ userId: req.params.id })
        res.status(200).json("user deleted successfully")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//getuser
router.get("/:id", async (req, res) => {
    try { 
        const user = await User.findById(req.params.id)
        const { password, ...info } = user._doc
        res.status(200).json(info)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//delete user
router.delete("/:id", verifyToken, verifySuperuser, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json("User not found");
        }

        res.status(200).json("User has been deleted");
    } catch (err) {
        console.error("Error Deleting User:", err);
        res.status(500).json(err);
    }
});




export default router

