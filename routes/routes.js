import { Router } from "express";
var router = Router()

router.get('/birds', function (req, res) {
    res.send('Birds home page11111')
  });

router.get("/", (req, res) => {
    res.send("main page   FzGCvYLPljanGBgz");
});


router.get("/hello", (req, res) => {
    res.send("hello world");
});

export default router;