import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        HE
      </Link>
      <ul className="nav-links">
        <li><Link href="/" className="nav-link">Home</Link></li>
        <li><Link href="/products" className="nav-link">Products</Link></li>
        <li><Link href="/about" className="nav-link">About Us</Link></li>
        <li><Link href="/contact" className="nav-link">Contact</Link></li>
      </ul>
      <Link href="/auth" className="nav-cta">
        Login
      </Link>
    </nav>
  );
}
