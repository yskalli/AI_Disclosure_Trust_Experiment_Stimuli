
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProfileInfo = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("px-4 pb-4", isMobile ? "pt-14" : "pt-20")}>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <h1 className={cn("font-bold text-gray-900", isMobile ? "text-lg" : "text-xl")}>
            Office for European Data Protection Supervisor (EDPS)
          </h1>
          <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-5 h-5 ml-1 text-twitter-blue fill-current">
            <g>
              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
            </g>
          </svg>
        </div>
        <p className="text-gray-500">@EU_EDPS</p>
        <p className={cn("text-gray-900 mt-2", isMobile ? "text-sm" : "text-base")}>
          Protecting your data rights in the digital age. Promoting privacy and data protection across the EU institutions and beyond. #DataProtection #Privacy #GDPR #EUDataAct
        </p>
        
        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mt-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Brussels, Belgium</span>
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-4 h-4 mr-1" />
            <a href="#" className="text-twitter-blue hover:underline">edps.europa.eu</a>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Joined June 2012</span>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-2">
          <div>
            <span className="font-bold text-gray-900">1,247</span>
            <span className="text-gray-500 ml-1">Following</span>
          </div>
          <div>
            <span className="font-bold text-gray-900">86.5K</span>
            <span className="text-gray-500 ml-1">Followers</span>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation tabs */}
      {isMobile && (
        <div className="mt-4 border-b border-gray-200">
          <div className="flex">
            <button className="flex-1 text-center py-3 font-medium border-b-2 border-twitter-blue text-twitter-blue">
              Posts
            </button>
            <button className="flex-1 text-center py-3 font-medium text-gray-500">
              Replies
            </button>
            <button className="flex-1 text-center py-3 font-medium text-gray-500">
              Videos
            </button>
            <button className="flex-1 text-center py-3 font-medium text-gray-500">
              Photos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function for conditional classNames
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default ProfileInfo;
