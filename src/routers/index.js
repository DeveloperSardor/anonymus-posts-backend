import Router from 'express';
import commentRouter from './comment.js'
import postRouter from './post.js'
import userRouter from './user.js'

const router = Router();

router.use('/users', userRouter)
router.use('/posts', postRouter)
router.use('/comments', commentRouter)


export default router;