const imageCropUrl = (imageUrl: string): string => {
  const searchWord = "media/";
  const index = imageUrl.indexOf(searchWord) + searchWord.length;

  return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
};

export default imageCropUrl;
