const { connection } = require("../config/connection");
// const { connection } = require("../models/user");

async function signUpWithGoogle(accessToken, refreshToken, profile){
    // const { managerId, name, title, description, address, maxCapacity } = req.body;
    console.log(accessToken, "assessToken")
    console.log(refreshToken, "refreshToken")
    console.log(profile, "profile") 
    const propertyQuery = `INSERT INTO users (googleId, displayName, email) VALUES (?, ?, ?)`;
    connection.query(propertyQuery, [profile.id, profile.displayName, profile.emails[0].value], (err, result)=>{
        if(err){
            console.log(`error is ${err}`)
            // let resp = successResponse(null, "Something went wrong")
            console.log("Error response")
            // return res.status(400).json(resp)
            // return res.status(400).json({"msg":"Something went wrong"})
        }else{
            // let resp = successResponse("Property is created successfully.", null)
            // return res.status(200).json(resp)
            console.log("User is created successfully.")
            // return res.status(200).json({"msg":"Manager is created successfully."})
        }
    })
}

async function signUpWithFacebook(accessToken, refreshToken, profile){
    console.log(profile.id, "profile.id")
    console.log(profile.displayName, "profile.displayName")
    console.log(profile.emails[0].value, "profile.emails[0].value")
    // return 
    const propertyQuery = `INSERT INTO users (facebookId, displayName, email) VALUES (?, ?, ?)`;
    connection.query(propertyQuery, [profile.id, profile.displayName, profile.emails[0].value], (err, result)=>{
        if(err){
            console.log(`error is ${err}`)
            console.log("Error response")
        }else{
            console.log("User is created successfully.")
        }
    })
}

module.exports={
    signUpWithGoogle,
    signUpWithFacebook,
}