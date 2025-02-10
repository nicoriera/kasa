const locationService = {
  fetchLocations: async () => {
    try {
      const response = await fetch("/data/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const locations = await response.json();
      return locations;
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
