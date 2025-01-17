const fetchAlbionCategories = async () => {
  const response = await fetch("https://api.openalbion.com/api/v3/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export { fetchAlbionCategories };
