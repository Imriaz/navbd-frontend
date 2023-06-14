import Image from "next/image";
import logo from "../public/icon/logo.png";
export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Logo" height={80} width={180} />
      <h1>Homepage</h1>
    </div>
  );
}
