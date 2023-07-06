"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/image/icon/logo.svg";
import imageurl from "@/utils/image-url";
import GetStartedButton from "@/components/buttons/getStartedButton";
import axiosServices from "@/apiServices/axiosService";
import apiEndpoint from "@/apiServices/apiEndpoint";

export default function Home() {
  const [homepage, setHomepageData] = useState();
  const fetchHomepageData = async () => {
    const response = await axiosServices.get(apiEndpoint.GET_HOMEPAGE_TRY_DATA);
    setHomepageData(response.data);
  };

  useEffect(() => {
    fetchHomepageData();
  }, []);

  console.log("Homepage Data:: ", homepage);

  return (
    <div>
      <Image src={logo} alt="Logo" height={80} width={180} />
      <Image src={imageurl.logo} alt="Logo" height={80} width={180} />
      <GetStartedButton />
      <GetStartedButton isDarkMode />
      <div>
        <ul>
          {homepage?.map((user, index) => (
            <li key={index}>
              #{user.id}: {user.name} {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
