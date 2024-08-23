"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchContentProps {
    songs: Song[];
    query: string;
}

const SearchContent: React.FC<SearchContentProps> = ({songs, query}) => {

    const onPlay = useOnPlay(songs);

    if(songs.length === 0) {
        return(
            <div className="flex flex-col gap-y-2 w-full h-[50%] items-center justify-center text-center">
                <p className="text-white font-bold text-lg">No songs found for `<span>{query}</span>`</p>
                <p className="text-white font-medium text-md">Please make sure your words are spelled correctly, or use fewer or different keywords.</p>
            </div>
        )
    }
    return(
        <div className="flex flex-col gap-y-2 w-full px-6">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    );
};

export default SearchContent;