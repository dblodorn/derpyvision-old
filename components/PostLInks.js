import Link from 'next/link'

function getPosts () {
  return [
    { id: 'chaos-10', title: 'CHAOS 10'}
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default () => (
  <ul>
    {getPosts().map((post) => (
      <PostLink key={post.id} post={post}/>
    ))}
  </ul>
)
