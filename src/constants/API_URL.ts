const API_URL = `${import.meta.env.VITE_API_URL}`;

const API_URLS = {
  AUTH: {
    LOGIN: `${API_URL}/users/login`,
    SIGNUP: `${API_URL}/users/create`,
  },
  TODOS: {
    LIST: `${API_URL}/todos`,
    DETAIL: (id: number): string => {
      return `${API_URL}/todos/${id}`;
    },
  },
};

export default API_URLS;
