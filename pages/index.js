import Layout from "../components/layouts/main";
import Link from "next/link";
// import { posts } from "../posts";

// export function getStaticProps() {
//   return {
//     props: {
//       posts: posts.map(post => ({
//         ...post,
//         url: `${new Date(post.date).getFullYear()}/${post.id}`,
//       })),
//     },
//   };
// }

const Home = ({ posts, date }) => (
  <Layout>
    <ul>
      <li>
        <span>Hi,</span>
        <span>I am <b>Rheza Satria</b>.</span>
        <span>I develop great Software and excels in high scalable and high performance system.</span>
        <p></p>
      </li>
      {/* {posts.map(post => (
        <li key={post.id}>
          <span>{post.date}</span>
          <Link href={post.url}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))} */}
    </ul>

    <style jsx>{`
      ul li {
        padding: 15px 20px;
      }

      ul li span {
        color: #5b5b5b;
        display: block;
        padding: 5px;
      }

      ul li a {
        font-weight: bold;
        color: var(--link-color);
        text-decoration: none;
      }

      @media (any-hover: hover) {
        ul li a:hover {
          background: #eee;
        }

        ul li a:active {
          background: #ccc;
        }
      }

      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 42rem;
          margin: auto;
        }

        ul li a {
          padding: 10px 15px;
          transition: 150ms background-color ease-in;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
