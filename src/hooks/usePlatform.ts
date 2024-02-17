import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const { data, error } = useData<Platform>("/platforms");
  return { platforms: data, error };
};

export default usePlatform;
