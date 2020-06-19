import Router from 'next/router';
import { useRouter } from 'next/router';

import './index.css';
const SubHeader = (props) => {
  const router = useRouter();

  const handler = (e) => {
    Router.push({
      pathname: '/work',
      query: { category: e.target.textContent },
    });
  };
  return (
    <div className="flex-gap">
      <div
        value="all"
        onClick={(e) => handler(e)}
        style={
          router.query.category === 'all' || !router.query.category
            ? { color: 'black' }
            : { color: 'gray' }
        }
      >
        all
      </div>
      <div
        style={
          router.query.category === 'education'
            ? { color: 'black' }
            : { color: 'gray' }
        }
        onClick={(e) => handler(e)}
        value="education"
      >
        education
      </div>
      <div
        style={
          router.query.category === 'culture'
            ? { color: 'black' }
            : { color: 'gray' }
        }
        onClick={(e) => handler(e)}
        value="culture"
      >
        culture
      </div>
      <div
        style={
          router.query.category === 'commercial'
            ? { color: 'black' }
            : { color: 'gray' }
        }
        onClick={(e) => handler(e)}
        value="commercial"
      >
        commercial
      </div>
      <div
        style={
          router.query.category === 'built'
            ? { color: 'black' }
            : { color: 'gray' }
        }
        onClick={(e) => handler(e)}
        value="built"
      >
        built
      </div>
    </div>
  );
};

export default SubHeader;
