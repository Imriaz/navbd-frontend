import Image from "next/image";
import logo from "../public/image/icon/logo.svg";
import imageurl from "@/utils/image-url";
import GetStartedButton from "@/components/buttons/getStartedButton";

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="Logo" height={80} width={180} />
      <Image src={imageurl.logo} alt="Logo" height={80} width={180} />
      <GetStartedButton />
      <GetStartedButton isDarkMode />
    </div>
  );
}
