import { baseApi } from '../../../shared/api/base';
import { Post } from '../model/types';

export const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await baseApi.get('/posts');
  return data;
};

export const fetchPostById = async (id: string): Promise<Post> => {
   console.log('id', id);
  const { data } = await baseApi.get(`/posts/${id}`);
  return data;
};