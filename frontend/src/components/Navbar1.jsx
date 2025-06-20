export default function Navbar1() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="text-xl font-bold">LOGO</div>
        <div className="flex gap-6">
          {["Home", "Startups", "Projects", "Announcements", "About Us", "Connect"].map((item) => (
            <a href="#" key={item} className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-green-200 px-4 py-1 rounded font-medium hover:bg-green-300">
          Join Us
        </button>
      </nav>
    );
  }