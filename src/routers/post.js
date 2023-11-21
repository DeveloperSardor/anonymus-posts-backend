import { Router } from "express";
import { PostContr } from "../controllers/post.js";
import { checkToken } from "../middlewares/index.js";

const router = Router();

router.get(`/`, PostContr.get);
router.get(`/:id`, PostContr.get);
router.post(`/`, checkToken, PostContr.post);
router.put(`/:id`, checkToken, PostContr.put);
router.delete(`/:id`, checkToken, PostContr.delete);


export default router;