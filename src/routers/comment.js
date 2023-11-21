import { Router } from "express";
import { CommentContr } from "../controllers/comment.js";
import { checkToken } from "../middlewares/index.js";

const router = Router();

router.get(`/`, CommentContr.get);
router.get(`/:id`, CommentContr.get);
router.post(`/`, checkToken, CommentContr.post);
router.put(`/:id`, checkToken, CommentContr.put);
router.delete(`/:id`, checkToken, CommentContr.delete);


export default router;