export type navbarProps = {};

export default function Navbar({}: navbarProps) {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}
