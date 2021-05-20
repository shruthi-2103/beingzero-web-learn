module.exports={
    mongoConnectionString:process.env.MONGO_CONNECTION_STRING || '',
    //Heroku sets PORT environment variable automatically
    webPort:process.env.PORT || 3000,
}