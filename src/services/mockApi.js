import axios from 'axios';

axios.defaults.baseURL = 'https://63aab4e1fdc006ba604972c1.mockapi.io/contacts';

async function getContacts() {
  const response = await axios.get('/');
  return response.data;
}
async function deleteContact(id) {
  const response = await axios.delete(`/${id}`);
  return response.data;
}

async function addContact(contact) {
  const response = await axios.post('/', contact);
  return response.data;
}

async function updateContact(contact) {
  const response = await axios.put(`/${contact.id}`, contact);
  return response.data;
}

const api = {
  getContacts,
  deleteContact,
  addContact,
  updateContact,
};

export default api;
