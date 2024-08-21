"use client";

import Button from "@/components/Button";
import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LuMusic3 } from "react-icons/lu";

interface LikedContentProps{
    songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({songs}) => {
    const router = useRouter();
    const { isLoading, user } = useUser();

    useEffect(() => {
        if(!isLoading && !user){
            router.replace('/');
        }
    }, [isLoading, user, router]);

    const handleFindSongsClick = () => {
        router.push('/search');
    };

    if(songs.length === 0) {
        return(
            <div className="flex flex-col gap-y-4 w-full h-[50%] items-center justify-center text-center">
                <LuMusic3 size={36} className="text-white" />
                <p className="text-white font-bold text-lg">Songs you like will appear here</p>
                <p className="text-neutral-300 font-medium text-md">Save songs by tapping the heart icon.</p>
                <Button onClick={handleFindSongsClick} className="bg-white w-auto px-6 py-2">Find Songs</Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-2 w-full p-6">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem onClick={() => {}} data={song} />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    );
}

export default LikedContent;