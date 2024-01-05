import {ApiResponse} from "./utils/apiResponse";

interface IpResultsProps {
 data: ApiResponse | undefined;
 isError: boolean;
 isLoading: boolean;
 errorMesage: string | null;
}

export default function IpResults({
 data,
 isError,
 isLoading,
 errorMesage,
}: IpResultsProps) {
 const Error: JSX.Element = (
  <div className="text-center">{errorMesage || "An Error occured"}</div>
 );

 const resultsSection: JSX.Element = (
  <div
   id="results-wrapper"
   className="sm:px-10 grid grid-cols-1 grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 place-items-center sm:place-content-evenly"
  >
   <div id="ipaddress" className="text-center sm:text-left">
    <h2 className="">Ip address</h2>
    <p>{data?.ip}</p>
   </div>
   <div id="location" className="text-center sm:text-left">
    <h2>Location</h2>
    <p>
     {data?.location?.city}, {data?.location?.region}
    </p>
    <p>{data?.location?.postalCode}</p>
   </div>
   <div id="timezone" className="text-center sm:text-left">
    <h2>Timezone</h2>
    <p>UTC {data?.location?.timezone}</p>
   </div>
   <div id="ISP" className="text-center sm:text-left">
    <h2>ISP</h2>
    <p>{data?.isp}</p>
   </div>
  </div>
 );

 if (isLoading) {
  return (
   <div
    className="bg-white absolute top-6 sm:top-16 rounded-xl w-[100%] py-8 sm:py-10"
    style={{zIndex: 999}}
   >
    <div className="text-center">Loading...</div>
   </div>
  );
 }

 if (isError) {
  return (
   <div
    className="bg-white absolute top-6 sm:top-16 rounded-xl w-[100%] py-8 sm:py-10"
    style={{zIndex: 999}}
   >
    {Error}
   </div>
  );
 }

 return (
  <div
   className="bg-white absolute top-6 sm:top-16 rounded-xl w-[100%] py-8 sm:py-10"
   style={{zIndex: 999}}
  >
   {resultsSection}
  </div>
 );
}
