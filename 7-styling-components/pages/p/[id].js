import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout.js';

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown source={`
        `}></Markdown>
      </div>
    </Layout>
  );
}