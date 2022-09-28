import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <dev className="bar">
        <Link href="/">Sick fits</Link>
      </dev>
      <dev className="sub-bar">
        <p>Search</p>
      </dev>
      <Nav />
    </header>
  );
}
