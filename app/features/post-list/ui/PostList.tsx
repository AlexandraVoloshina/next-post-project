'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../../entities/post/api/post.api';
import { PostCard } from '../../../entities/post/ui/PostCard';
import { PostCardSkeleton } from '../../../entities/post/ui/PostCardSkeleton';

export const PostList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </>
    );
  }

  if (isError) {
    return <p>Помилка завантаження постів</p>;
  }

  return (
    <>
      {data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};