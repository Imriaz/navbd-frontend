import Image from "next/image";
import logo from "../public/icon/logo.png";
import "../styles/style.scss";

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Logo" height={80} width={180} />
      <h1>Homepage</h1>
      <button className="action-button">
        <p className="button-title">Get Started</p>
      </button>
    </div>
  );
}
