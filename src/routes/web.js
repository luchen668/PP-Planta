const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("./pages/pagina")
});
router.get("/contacto", (req, res)=>{
    res.render("./pages/Contacto")
});
module.exports = router;
