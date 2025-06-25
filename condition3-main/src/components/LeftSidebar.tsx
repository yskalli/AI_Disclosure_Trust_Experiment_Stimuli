
import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const LeftSidebar = () => {
  const isMobile = useIsMobile();

  // If on mobile, don't render the sidebar
  if (isMobile) {
    return null;
  }

  return (
    <aside className="w-64 h-full sticky top-0 flex flex-col border-r border-gray-200 overflow-y-auto">
      <div className="flex flex-col h-full p-3">
        {/* Twitter/X Logo */}
        <div className="p-2 mb-1">
          <Link to="/">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 text-black">
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </Link>
        </div>
        
        {/* Navigation Menu - Always show full labels on desktop */}
        <nav className="mt-2 flex flex-col space-y-1">
          <NavItem icon={<Home size={24} />} label="Home" />
          <NavItem icon={<Search size={24} />} label="Explore" />
          <NavItem icon={<Bell size={24} />} label="Notifications" />
          <NavItem icon={<Mail size={24} />} label="Messages" />
          <NavItem icon={<Bookmark size={24} />} label="Bookmarks" />
          <NavItem icon={<User size={24} />} label="Profile" active />
          <NavItem icon={<MoreHorizontal size={24} />} label="More" />
        </nav>
        
        {/* Post Button - Always full size on desktop */}
        <div className="mt-4">
          <button className="bg-twitter-blue text-white rounded-full w-full py-3 font-bold">
            Post
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
}) => {
  return (
    <Link to="/" className="flex items-center">
      <div 
        className={`flex items-center space-x-4 px-4 py-3 rounded-full hover:bg-gray-100 w-full
          ${active ? 'font-bold' : 'font-normal'}`
        }
      >
        <div>{icon}</div>
        <span className="text-xl">{label}</span>
      </div>
    </Link>
  );
};

export default LeftSidebar;
