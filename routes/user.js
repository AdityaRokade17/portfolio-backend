const express = require("express");

const router =  express.Router();

const{sendMessage} = require("../controllers/sendMessages");

router.get("/sendmessage", sendMessage);

module.exports = router;