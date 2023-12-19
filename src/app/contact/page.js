import Link from 'next/link';

export default function Contact() {
    return (
      <div>
        {/* navigation */}
        <div className="flex justify-between h-16 px-48 items-center text-sky-950">
          <Link href="/">
            <div className="flex flex-row items-center">
              <img className="h-8" src="/img/aur-logo.png"></img>
              <span className="ml-2 pt-2">Marketing</span>
            </div>
          </Link>
          <div>
            <Link href="/explore">Explore</Link> 
            <Link href="/contact" className="ml-8 text-yellow-600">Contact</Link>
          </div>
        </div>
        {/* header */}
        <div className="h-80 flex justify-center">
          <img className="absolute" src="/img/mini-header.png"></img>
          <span className="z-50 relative text-white items-center text-3xl font-bold pt-36">
            Contact
          </span>
        </div>
        {/* body */}
        <div className="flex justify-center mt-20 mb-20">
          <div className="flex flex-row justify-between w-2/5">
            <div>
              <p className="text-3xl font-bold text-sky-950 mb-3">Address</p>
              <p>AUR Marketing Corporation</p>
              <p>Phase 4B Unit 15</p>
              <p>HVG Arcade</p>
              <p>Subangdaku, Mandaue City</p>
            </div>
            <div>
              <div>
                <p className="text-3xl font-bold text-sky-950 mb-3">Phone</p>
                <p>(032) 238 6461</p>
                <p>Beth</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 text-center text-sm text-gray-500 mt-24 mx-auto">
          AUR Marketing Corporation has been in the wholesale distribution for over 30 years. Specializing in food products, the company has been appointed as the exclusive distributor for a number of food products in the region. Current offerings include a variety of instant noodles and canned goods. Here at AUR Marketing Corporation, we offer the most competitive prices in the market for bulk buyers. We pride in keeping a high standard of service from order placing to delivery, ensuring that every customer is satisfied.
        </div>
        {/* footer */}
        <div className="text-sky-950 text-center flex flex-col mt-16 mb-8">
          <span className="text-2xl font-bold">AUR Marketing</span>
          <span>©2023 by AUR Marketing Corporation.</span>
        </div>
      </div>
    )
  }
  