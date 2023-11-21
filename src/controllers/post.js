import Posts from "../schemas/post.js";

export class PostContr {
  constructor() {}

  static async get(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const findById = await Posts.findById(id);
        if (findById == null) {
          throw new Error(`Not found post!`);
        } else {
          res.send({
            status: 200,
            message: `${id} - post`,
            success: true,
            data: findById,
          });
        }
      } else {
        res.send({
          status: 200,
          message: `All posts`,
          success: true,
          data: await Posts.find(),
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
      const { desc } = req.body;
      if (!desc) {
        throw new Error(`Description is required!`);
      }
      const newPost = await Posts.create({ desc });
      res.send({
        status: 201,
        message: `Post was added successfuly`,
        success: true,
        data: newPost,
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
      const { desc } = req.body;
      if (!desc) {
        throw new Error(`You must enter description!`);
      }
      const findById = await Posts.findById(id);
      if (findById == null) {
        throw new Error(`Not found post`);
      } else {
        const edited = await Posts.findByIdAndUpdate(
          id,
          { desc },
          { new: true }
        );
        res.send({
          status: 200,
          message: `Post was edited successfuly!`,
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
      const findById = await Posts.findById(id);
      if (findById == null) {
        throw new Error(`Not found post`);
      } else {
        const deleted = await Posts.findByIdAndDelete(id);
        res.send({
          status: 200,
          message: `Post was deleted successfuly!`,
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
