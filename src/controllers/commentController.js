import prisma from '../db.js';
import sanitizeHtml from 'sanitize-html';

export const addComment = async (req, res) => {
  const { postId, content } = req.body;
  try {
    const cleanContent = sanitizeHtml(content, {
      allowedTags: ['b', 'i', 'strong', 'em', 'a'],
      allowedAttributes: { a: ['href'] },
    });
    const comment = await prisma.comment.create({
      data: { content: cleanContent, postId: parseInt(postId) },
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};