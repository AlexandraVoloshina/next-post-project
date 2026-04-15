import { PostList } from './features/post-list/ui/PostList';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Пости</h1>
      <PostList />
    </div>
  );
}