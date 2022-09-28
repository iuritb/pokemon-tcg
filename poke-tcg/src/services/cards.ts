import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.VUE_APP_API_TCG,
});

const tcgApi = {
  // Returns a specif card by id
  getCardById: (cardId: number) => {
    return apiRequest.get(`/cards/${cardId}`);
  },

  // Search for all cards that have param name in the name field.
  getCardsByName: (cardName: string) => {
    return apiRequest.get("/cards", { params: { q: `name:${cardName}` } });
  },

  // Get all cards
  getAllCards: (
    q?: string,
    page?: number,
    pageSize?: number,
    orderBy?: string
  ) => {
    return apiRequest.get("/cards", { params: { q, page, pageSize, orderBy } });
  },
};

export default tcgApi;
