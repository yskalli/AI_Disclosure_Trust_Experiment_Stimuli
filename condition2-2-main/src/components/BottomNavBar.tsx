
import { Home, Search, Bell, Mail, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around items-center h-14">
        <Link to="/" className="flex flex-col items-center justify-center w-full h-full">
          <Home size={20} strokeWidth={1.5} />
        </Link>
        <Link to="/" className="flex flex-col items-center justify-center w-full h-full">
          <Search size={20} strokeWidth={1.5} />
        </Link>
        <Link to="/" className="flex flex-col items-center justify-center w-full h-full">
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-2 right-[calc(50%-10px)] bg-twitter-blue text-white text-xs rounded-full h-4 min-w-4 flex items-center justify-center">19</span>
        </Link>
        <Link to="/" className="flex flex-col items-center justify-center w-full h-full">
          <Mail size={20} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
