import usePlatform from "./usePlatforms";

const useLookUp = (platformId?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((platform) => platform.id === platformId);
};

export default useLookUp;
