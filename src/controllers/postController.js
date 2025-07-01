import prisma from '../db.js';

export const createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = await prisma.post.create({ data: { content } });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPostWithComments = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: { comments: true },
    });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
