
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative">
      {/* Header banner */}
      <div className="h-36 sm:h-48 bg-gray-200 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
          alt="Profile Banner" 
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
          <Avatar className="w-full h-full bg-gray-200">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
              alt="David Dubois" 
              className="object-cover"
            />
            <AvatarFallback>DD</AvatarFallback>
          </Avatar>
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
