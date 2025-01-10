const locationService = {
  fetchLocations: async () => {
    try {
      const response = await fetch("/data.json");
      console.log("response", response);
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
};

export { locationService };
