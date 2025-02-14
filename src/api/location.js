const locationService = {
  fetchLocations: async () => {
    try {
      const response = await fetch("/kasa/data/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const locations = await response.json();
      const modifiedData = locations.map((item) => ({
        ...item,
        cover: item.cover.replace(
          "https://s3-eu-west-1.amazonaws.com",
          "/s3-images"
        ),
        pictures: item.pictures.map((pic) =>
          pic.replace("https://s3-eu-west-1.amazonaws.com", "/s3-images")
        ),
      }));
      return modifiedData;
    } catch (error) {
      console.error("Failed to fetch locations:", error);
      return [];
    }
  },

  fetchLocationById: async (id) => {
    const locations = await locationService.fetchLocations();
    return locations.find((location) => location.id === id);
  },
};

export { locationService };
