import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/profiles/velopert">veloert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
