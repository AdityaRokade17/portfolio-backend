const express = require("express");

const router =  express.Router();

const{sendMessage} = require("../controllers/sendMessages");

router.post("/sendmessage", sendMessage);

module.exports = router;