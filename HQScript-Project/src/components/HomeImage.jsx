import { Link } from "react-router-dom";

export default function HomeImage() {
  return (
    <Link to="/">
      <img src="HQ-logo.png" alt="logo.png" className="logo" />
    </Link>
  );
}
