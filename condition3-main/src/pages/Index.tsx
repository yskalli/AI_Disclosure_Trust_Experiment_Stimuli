
import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileInfo from "@/components/ProfileInfo";
import TweetThread from "@/components/TweetThread";
import TopBar from "@/components/TopBar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import BottomNavBar from "@/components/BottomNavBar";

const Index = () => {
  const [expandedTweetId, setExpandedTweetId] = useState<number | null>(null);
  
  const handleExpandTweet = (id: number) => {
    setExpandedTweetId(id === expandedTweetId ? null : id);
  };

  return (
    <div className="flex min-h-screen bg-white w-full">
      {/* Left Sidebar - Hidden on mobile, full width on desktop */}
      <LeftSidebar />
      
      {/* Main Content - Flexible width with scrolling */}
      <div className="flex-1 border-x border-gray-200 min-w-0 overflow-y-auto pb-16 md:pb-0">
        <TopBar />
        <ProfileHeader />
        <ProfileInfo />
        <div className="border-b border-gray-200" />
        <TweetThread 
          expandedTweetId={expandedTweetId} 
          handleExpandTweet={handleExpandTweet}
        />
      </div>
      
      {/* Right Sidebar - Hidden on mobile, visible on desktop */}
      <RightSidebar />
      
      {/* Bottom Nav Bar - Only on mobile */}
      <BottomNavBar />
    </div>
  );
};

export default Index;
