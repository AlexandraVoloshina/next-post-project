'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from '../../../entities/post/api/post.api';
import { Button } from '../../../../components/ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
}

export const PostDetails = ({ id }: Props) => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });

  if (isLoading) return <p>Завантаження...</p>;

  if (isError || !data) {
    return (
      <div>
        <p>Пост не знайдено ❌</p>
        <Button onClick={() => router.push('/')}>На головну</Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{data.title}</h1>
      <p className="mb-4">{data.body}</p>

      <Button onClick={() => router.back()}>
        Назад
      </Button>
    </div>
  );
};