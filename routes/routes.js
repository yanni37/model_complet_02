import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";

router.get("/", HomeController );

router.post('/', upload.single('photo'), (req, res) => {
    console.log(req.file);
    const { name, age, description } = req.body;
    const kitty = new Kitten({ name: name, age: age, description: description });
    kitty.save().then(() => console.log('meow'));
    res.status(200).send("Envoyer");
})
export default router;