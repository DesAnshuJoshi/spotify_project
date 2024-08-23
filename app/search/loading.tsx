"use client";

import Box from "@/components/Box";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <ScaleLoader color="#22c55e" height={32} width={5} radius={100} margin={4} />
        </Box>
    )
};

export default Loading;