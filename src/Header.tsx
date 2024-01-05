import IpResults from "./IpResults";
import IconArrow from "./assets/images/icon-arrow.svg";
import useSWR from "swr";
import {IPIFY_API_KEY} from "./lib/envfile";
import {ApiResponse} from "./utils/apiResponse";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import apiDataAtom, {userLocationOnLoad} from "./lib/apiDataAtom";

const fetcher = (url: string) =>
 fetch(url)
  .then((res) => res.json())
  .then((data) => {
   if (data.code === 422) {
    throw new Error(data.messages);
   }
   return data;
  });

export default function Header() {
 const [ipAddress, setIpAddress] = useState<string | null>(null);
 const [userInput, setUserInput] = useState<string>("");
 const [, setCoordinatesAPi] = useAtom(apiDataAtom);
 const [userLocation] = useAtom(userLocationOnLoad);

 const {data, error, isLoading, mutate} = useSWR<ApiResponse | null>(
  ipAddress
   ? `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY}&ipAddress=${ipAddress}`
   : null,
  fetcher
 );

 console.log(userLocation);

 function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setUserInput(e.target.value);
 }

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  setIpAddress(userInput);
  mutate();
 };

 useEffect(() => {
  console.log(data);

  if (data && ipAddress && !error) {
   setCoordinatesAPi(data);
  }
 }, [data, error, ipAddress, setCoordinatesAPi]);

 return (
  <header className="py-[25vmin] sm:py-[10vmin]">
   <div id="header-container" className="text-center space-y-8 relative">
    <h1 className="text-2xl sm:text-3xl text-white text-center">
     IP Address Tracker
    </h1>
    <form
     id="input-search"
     onSubmit={handleSubmit}
     className="w-4/5 sm:w-1/3 h-12 mx-auto flex"
    >
     <input
      type="search"
      name="ipAddress"
      value={userInput}
      className="w-full rounded-l-xl px-4"
      placeholder="Search for any IP address or domain"
      onChange={handleChange}
     />
     <button type="submit" className="bg-very-dark-grey px-5 rounded-r-xl">
      <span>
       <img src={IconArrow} alt="Icon arrow submit button" />
      </span>
     </button>
    </form>
   </div>
   <div id="container-wrapper">
    {data && (
     <IpResults
      data={data}
      isError={error}
      isLoading={isLoading}
      errorMesage={error?.message}
     />
    )}
   </div>
  </header>
 );
}
