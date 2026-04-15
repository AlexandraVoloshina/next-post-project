import { PostDetails } from '../../features/post-details/ui/PostDetails';

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-6">
      <PostDetails id={id} />
    </div>
  );
}