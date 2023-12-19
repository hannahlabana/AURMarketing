

export default function Explore() {
  return (
    <div>
      {/* navigation */}
      <div className="flex justify-between h-16 px-48 items-center text-sky-950">
        <div className="flex flex-row items-center">
          <img className="h-8" src="/img/aur-logo.png"></img>
          <span className="ml-2 pt-2">Marketing</span>
        </div>
        <div>
          <a href="explore" className="text-yellow-600">Explore</a> 
          <a href="contact.js" className="ml-8">Contact</a>
        </div>
      </div>
      {/* header */}
      <div className="h-[875px] flex justify-center">
        <img className="absolute" src="/img/mini-header.png"></img>
        <span className="z-50 relative text-white items-center">
          Explore
        </span>
      </div>

    </div>
  )
}
