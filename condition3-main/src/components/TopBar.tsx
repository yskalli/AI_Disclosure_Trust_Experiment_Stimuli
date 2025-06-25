
import { ArrowLeft, Search, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const TopBar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-10 bg-white h-12 flex items-center px-3 border-b border-gray-200">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-3 rounded-full p-2 hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </Link>
          {!isMobile && (
            <div className="flex flex-col">
              <h2 className="font-bold text-base text-gray-900">David Dubois</h2>
              <span className="text-xs text-gray-500">7,985 posts</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {isMobile && (
            <div className="flex gap-2">
              <Search className="h-5 w-5 text-gray-700" />
              <button className="rounded-full p-1">
                <MoreHorizontal className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
