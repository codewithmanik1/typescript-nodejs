import axios from "axios";


// 1. The Raw Response from SpaceX (Third-party structure) contract structure
interface spaceRocket {
    id: string;
    company: string;
    country: string;
    flickr_images: string[];
    engines: {
        type: string;
    };
    cost_per_launch: number;
}


// 2. The Normalized/Unified structure (Our system's structure) - normalised contract 
interface UnifiedRocket{
    id: string,
    company: string,
    country: string,
    engineImages?: string[];
    engineInfo:{
        type: string,
        costing: number
    }
}

//function
//logic to handle api call and normalizing data
//logic will handled more smoothly here rather than this , this is trial
export const handledRocketOne = async (rockeId: string): Promise<any> => {
    //will handled actual api call here
    try {
        const response = await axios.get<spaceRocket>(`https://api.spacexdata.com/v4/rockets/${rockeId}`);
        const rocketData = response.data;

        // Normalizing the data to our UnifiedRocket structure
        const unifiedRocket: UnifiedRocket = {
            id: rocketData.id,
            company: rocketData.company,
            country: rocketData.country,
            engineImages: rocketData.flickr_images,
            engineInfo: {
                type: rocketData.engines.type,
                costing: rocketData.cost_per_launch
            }
        };

        return unifiedRocket;
    } catch (error) {
        if(error instanceof Error) {
            console.error("Error message:", error.message);
        }
        console.error("Error fetching rocket data:", error);
        throw error;
    }               
}