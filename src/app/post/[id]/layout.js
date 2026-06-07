export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `Post ${id}`,
    description: "Read a published article on DAVV Blog.",
  };
}

export default function PostLayout({ children }) {
  return children;
}
