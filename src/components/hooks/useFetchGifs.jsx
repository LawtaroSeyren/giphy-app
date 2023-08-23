import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchGifs = async () => {
        setIsLoading(true);
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchGifs();
    }, []);



    return {
        images,
        isLoading,
        fetchGifs
    }
}

export default useFetchGifs