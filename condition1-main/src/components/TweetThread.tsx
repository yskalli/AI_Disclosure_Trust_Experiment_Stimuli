
import { MessageCircle, Repeat2, Heart, BarChart2, Share2, ChevronDown, ChevronUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { tweetData } from "@/data/tweetData";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface TweetThreadProps {
  expandedTweetId: number | null;
  handleExpandTweet: (id: number) => void;
}

const TweetThread: React.FC<TweetThreadProps> = ({ expandedTweetId, handleExpandTweet }) => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <div className="divide-y divide-gray-200">
        {tweetData.map((tweet, index) => (
          <Tweet 
            key={tweet.id} 
            tweet={tweet} 
            isFirst={index === 0} 
            isLast={index === tweetData.length - 1}
            isExpanded={expandedTweetId === tweet.id}
            onExpand={() => handleExpandTweet(tweet.id)}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

interface TweetProps {
  tweet: {
    id: number;
    content: string;
    time: string;
    likes: number;
    retweets: number;
    replies: number;
    views: string | number;
  };
  isFirst: boolean;
  isLast: boolean;
  isExpanded: boolean;
  onExpand: () => void;
  isMobile: boolean;
}

const Tweet: React.FC<TweetProps> = ({ tweet, isFirst, isLast, isExpanded, onExpand, isMobile }) => {
  return (
    <div className={cn(
      "p-3 sm:p-4 relative hover:bg-gray-50 cursor-pointer transition-colors",
      !isFirst && "before:absolute before:w-0.5 before:bg-gray-200 before:left-[2.5rem] before:top-0 before:h-4",
      !isLast && "after:absolute after:w-0.5 after:bg-gray-200 after:left-[2.5rem] after:bottom-0 after:h-4"
    )}>
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/d49ed3ce-2643-4526-a9f8-422525ba086d.png" 
              alt="EDPS Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="ml-3 flex-1">
          <div className="flex items-center mb-1">
            <span className={cn("font-bold mr-1", isMobile ? "text-sm" : "text-base")}>
              {isMobile ? "European External Action Service..." : "Office for European Data Protection Supervisor"}
            </span>
            <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-4 h-4 sm:w-5 sm:h-5 text-twitter-blue fill-current">
              <g>
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
              </g>
            </svg>
            <span className="text-gray-500 ml-1 text-xs sm:text-sm">@EU_EDPS · {tweet.time}</span>
          </div>
          
          {/* AI Disclosure Note - Now displayed for every post */}
          <div className="mb-2">
            <Badge variant="outline" className="text-xs flex items-center gap-1 text-gray-500 font-normal px-2 py-1 border-gray-300 mb-2">
              <Info className="w-3 h-3" />
              Note: This message was drafted with the assistance of AI tools, following transparency guidelines under the EU AI Act.
            </Badge>
          </div>

          <div className="whitespace-pre-wrap text-sm sm:text-base">
            {isExpanded ? (
              <div className="mb-2">{tweet.content}</div>
            ) : (
              <div className="mb-2">
                {tweet.content.length > 180 
                  ? tweet.content.substring(0, 180) + '...'
                  : tweet.content
                }
              </div>
            )}
            {tweet.content.length > 180 && (
              <button 
                onClick={onExpand}
                className="text-twitter-blue hover:text-blue-600 flex items-center mb-2"
              >
                {isExpanded ? (
                  <>
                    <span className="mr-1 text-xs sm:text-sm">Show less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span className="mr-1 text-xs sm:text-sm">Show more</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-3 text-xs sm:text-sm text-gray-500 max-w-md">
            <div className="flex items-center hover:text-twitter-blue group">
              <div className="p-1 sm:p-2 rounded-full group-hover:bg-blue-50">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span>{tweet.replies}</span>
            </div>
            <div className="flex items-center hover:text-green-600 group">
              <div className="p-1 sm:p-2 rounded-full group-hover:bg-green-50">
                <Repeat2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span>{tweet.retweets}</span>
            </div>
            <div className="flex items-center hover:text-pink-600 group">
              <div className="p-1 sm:p-2 rounded-full group-hover:bg-pink-50">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span>{tweet.likes}</span>
            </div>
            <div className="flex items-center hover:text-twitter-blue group">
              <div className="p-1 sm:p-2 rounded-full group-hover:bg-blue-50">
                <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span>{tweet.views}</span>
            </div>
            <div className="flex items-center hover:text-twitter-blue p-1 sm:p-2 rounded-full hover:bg-blue-50">
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetThread;
