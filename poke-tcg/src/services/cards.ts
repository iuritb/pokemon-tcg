import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.VUE_APP_API_TCG,
});

const apiTcg = {
  // Returns a specif card by id
  getCardById: (cardId: number) => {
    return apiRequest.get(`/cards/${cardId}`);
  },

  // Returns a specif card by id
  // getCardByName: (cardId: number) => {
  //   return apiRequest.get(`/cards/${cardId}`);
  // },

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

export default apiTcg;
