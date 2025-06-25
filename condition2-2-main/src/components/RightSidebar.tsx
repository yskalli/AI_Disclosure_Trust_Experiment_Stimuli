
import { useIsMobile } from "@/hooks/use-mobile";

const RightSidebar = () => {
  const isMobile = useIsMobile();
  
  // If on mobile, don't render the right sidebar
  if (isMobile) {
    return null;
  }
  
  return (
    <aside className="w-80 sticky top-0 h-screen overflow-y-auto p-4">
      {/* Search and trending content */}
      <div className="bg-gray-100 rounded-full mb-4">
        <div className="relative flex items-center">
          <input 
            type="text"
            placeholder="Search"
            className="w-full py-3 px-12 bg-transparent rounded-full focus:outline-none focus:ring-1 focus:ring-twitter-blue text-base"
          />
          <div className="absolute left-4">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="text-gray-500">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Trending section */}
      <div className="bg-gray-50 rounded-xl mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-bold text-xl">Trends for you</h2>
        </div>
        <div className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-sm text-gray-500">Trending in EU</div>
          <div className="font-bold text-base">#GDPR</div>
          <div className="text-sm text-gray-500">5,128 posts</div>
        </div>
        <div className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-sm text-gray-500">Trending in Belgium</div>
          <div className="font-bold text-base">#DataProtection</div>
          <div className="text-sm text-gray-500">3,945 posts</div>
        </div>
        <div className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-sm text-gray-500">Trending in Politics</div>
          <div className="font-bold text-base">#EUDataAct</div>
          <div className="text-sm text-gray-500">2,871 posts</div>
        </div>
        <div className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="text-sm text-gray-500">Trending in Technology</div>
          <div className="font-bold text-base">#AI</div>
          <div className="text-sm text-gray-500">12.3K posts</div>
        </div>
        <div className="p-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-b-xl">
          <span className="text-twitter-blue text-base">Show more</span>
        </div>
      </div>
      
      {/* Follow recommendations */}
      <div className="bg-gray-50 rounded-xl mb-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-bold text-xl">Who to follow</h2>
        </div>
        
        <div className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-bold text-base">European Commission</div>
                <div className="text-gray-500 text-sm">@EU_Commission</div>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-sm">
              Follow
            </button>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-bold text-base">Data Privacy News</div>
                <div className="text-gray-500 text-sm">@DataPrivacyNews</div>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-1 font-bold text-sm">
              Follow
            </button>
          </div>
        </div>
        
        <div className="p-4 hover:bg-gray-100 transition-colors cursor-pointer rounded-b-xl">
          <span className="text-twitter-blue text-base">Show more</span>
        </div>
      </div>
      
      {/* Footer links */}
      <div className="text-sm text-gray-500 px-2">
        <div className="flex flex-wrap gap-1">
          <a href="#" className="hover:underline mr-2">Terms of Service</a>
          <a href="#" className="hover:underline mr-2">Privacy Policy</a>
          <a href="#" className="hover:underline mr-2">Cookie Policy</a>
          <a href="#" className="hover:underline mr-2">Accessibility</a>
          <a href="#" className="hover:underline mr-2">Ads info</a>
          <a href="#" className="hover:underline">More</a>
        </div>
        <div className="mt-1">© 2025 X Corp.</div>
      </div>
    </aside>
  );
};

export default RightSidebar;
