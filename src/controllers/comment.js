import Comments from '../schemas/comment.js'


export class CommentContr{
    constructor(){}

    static async get(req, res) {
        try {
          const { id } = req.params;
          if (id) {
            const findById = await Comments.findById(id);
            if (findById == null) {
              throw new Error(`Not found comment!`);
            } else {
              res.send({
                status: 200,
                message: `${id} - comment`,
                success: true,
                data: findById,
              });
            }
          } else {
            res.send({
              status: 200,
              message: `All Comments`,
              success: true,
              data: await Comments.find(),
            });
          }
        } catch (error) {
          res.send({
            status: 400,
            message: error.message,
            success: false,
          });
        }
      }
    
      static async post(req, res) {
        try {
          const { comment } = req.body;
          if (!comment) {
            throw new Error(`comment is required!`);
          }
          const newcomment = await Comments.create({ comment });
          res.send({
            status: 201,
            message: `comment was added successfuly`,
            success: true,
            data: newcomment,
          });
        } catch (error) {
          res.send({
            status: 400,
            message: error.message,
            success: false,
          });
        }
      }
    
      static async put(req, res) {
        try {
          const { id } = req.params;
          const { comment } = req.body;
          if (!comment) {
            throw new Error(`You must enter comment!`);
          }
          const findById = await Comments.findById(id);
          if (findById == null) {
            throw new Error(`Not found comment`);
          } else {
            const edited = await Comments.findByIdAndUpdate(
              id,
              { comment },
              { new: true }
            );
            res.send({
              status: 200,
              message: `comment was edited successfuly!`,
              success: true,
              data: edited,
            });
          }
        } catch (error) {
          res.send({
            status: 400,
            message: error.message,
            success: false,
          });
        }
      }
    
      static async delete(req, res) {
        try {
          const { id } = req.params;
          const findById = await Comments.findById(id);
          if (findById == null) {
            throw new Error(`Not found comment`);
          } else {
            const deleted = await Comments.findByIdAndDelete(id);
            res.send({
              status: 200,
              message: `comment was deleted successfuly!`,
              success: true,
              data: deleted,
            });
          }
        } catch (error) {
          res.send({
            status: 400,
            message: error.message,
            success: false,
          });
        }
      }
}


