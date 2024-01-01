import IconArrow from "./assets/images/icon-arrow.svg";

export default function Header() {
 return (
  <header className="py-[25vmin] sm:py-[10vmin]">
   <div id="header-container" className="text-center space-y-8">
    <h1 className="text-2xl sm:text-3xl text-white text-center">
     IP Address Tracker
    </h1>
    <div id="input-search" className="w-4/5 sm:w-1/3 h-12 mx-auto flex">
     <input
      type="search"
      className="w-full rounded-l-xl px-4"
      placeholder="Search for any IP address or domain"
     />
     <button type="submit" className="bg-very-dark-grey px-5 rounded-r-xl">
      <span>
       <img src={IconArrow} alt="Icon arrow submit button" />
      </span>
     </button>
    </div>
   </div>
  </header>
 );
}
