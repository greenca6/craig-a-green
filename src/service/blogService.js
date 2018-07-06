import { get } from 'axios';

const BLOGS_ENDPOINT = '/api/blogs.json';

// Cache blogs on initial request. Yes, this is ugly. Will change if/when an actual API is used.
const _blogs = null;

class BlogService {
  static async getBlogs() {
    if (!_blogs) {
      const res = await get(BLOGS_ENDPOINT);
      _blogs = res.data;
    }

    return _blogs;
  }

  static async getBlogById(id) {
    if (!_blogs) {
      const blogs = await this.getBlogs();
      _blogs = blogs;
    }

    return _blogs.find(blog => blog.id === id);
  }
}

export default BlogService;
