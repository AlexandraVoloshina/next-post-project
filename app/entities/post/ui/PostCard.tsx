'use client';

import { Post } from '../model/types';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <div className="mb-4 border p-4 rounded-xl">
      <h2 className="font-bold">{post.title}</h2>

      <p className="mb-2">
        {post.body.slice(0, 30)}...
      </p>

      <Link href={`/posts/${post.id}`}>
        <Button>Детальніше</Button>
      </Link>
    </div>
  );
};