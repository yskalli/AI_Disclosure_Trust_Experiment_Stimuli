
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const ProfileHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative">
      {/* Header banner */}
      <div className="h-36 sm:h-48 bg-gray-200 relative overflow-hidden">
        <img 
          src="/lovable-uploads/f6c782dd-8675-4dfd-8ee3-631bb38d428a.png" 
          alt="EDPS Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile picture */}
      <div className={cn(
        "absolute bottom-0 transform translate-y-1/3",
        isMobile ? "left-4" : "left-4"
      )}>
        <div className={cn(
          "rounded-full bg-white p-1",
          "flex items-center justify-center overflow-hidden",
          isMobile ? "w-24 h-24" : "w-32 h-32"
        )}>
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/d49ed3ce-2643-4526-a9f8-422525ba086d.png" 
              alt="EDPS Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Follow button */}
      <div className={cn(
        "absolute bottom-4 right-4"
      )}>
        <button className="bg-black hover:bg-gray-800 text-white font-bold px-5 py-2 rounded-full transition-colors">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
