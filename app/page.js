import Image from "next/image";
import logo from "../public/icon/logo.png";
import "../styles/style.scss";
import GetStartedButton from "@/components/buttons/getStartedButton";
import MiddleGrid from "@/components/grid/middleGrid";

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Logo" height={80} width={180} />
      <GetStartedButton />
      <GetStartedButton isDarkMode />
      <MiddleGrid />
    </div>
  );
}
