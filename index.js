const express=require("express");
const signupSchema=require("./signupschema");
const cors =require("cors");
require("./config");

const app =express();

app.use(express.json());
app.use(cors());


app.post("/signup",async(req,res)=>{

    signupSchema.create(req.body)
    .then(sig=>res.json(sig))
    .catch(err=>console.log(err));



})
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    signupSchema.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Send user details in the response
                    const userDetails = {
                        userName: user.name,
                        email: user.email,
                        // Add other user details as needed
                    };
                    res.json({ status: "success", user: userDetails });
                } else {
                    res.json({ status: "failure", message: "password is incorrect" });
                }
            } else {
                res.json({ status: "failure", message: "no user found" });
            }
        })
        .catch(error => {
            // Handle any errors that occurred during the process
            console.error("Error:", error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
        });
});
app.listen(3000,()=>{

    console.log("listening")
});
