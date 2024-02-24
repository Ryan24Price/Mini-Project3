let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");
// get
router.get("/", (req, res) => {
    console.log('get', req.body)
  Controllers.userController.getUsers(res);
});

// create
router.post("/create", (req, res) => {
    console.log('create', req.body)
  Controllers.userController.createUser(req.body, res);
});


// put
router.put('/:id', (req, res)=> {
    console.log('req', req.params.id, req.body)
    Controllers.userController.updateUser(req, res)
})

// delete
router.delete('/:id', (req, res)=> {
    Controllers.userController.deleteUser(req, res)
})


module.exports = router;
