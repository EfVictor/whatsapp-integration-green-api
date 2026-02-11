const axios = require('axios');

const GREEN_API_URL = process.env.GREEN_API_URL;

async function callGreenApi({ idInstance, apiTokenInstance, method, body, httpMethod = 'post' }) {
  if (!idInstance || !apiTokenInstance) {
    throw new Error('idInstance and ApiTokenInstance are required');
  }

  const url = `${GREEN_API_URL}/waInstance${idInstance}/${method}/${apiTokenInstance}`;

  const response =
  httpMethod === 'get'
    ? await axios.get(url)
    : await axios.post(url, body ?? {});
  return response.data;
}

module.exports = {
  getSettings: (data) =>
    callGreenApi({ ...data, method: 'getSettings' }),

  getStateInstance: (data) =>
    callGreenApi({ ...data, method: 'getStateInstance', httpMethod: 'get'}),

  sendMessage: (data) =>
    callGreenApi({
      ...data,
      method: 'sendMessage',
      body: {
        chatId: data.chatId,
        message: data.message
      }
    }),

  sendFileByUrl: (data) =>
    callGreenApi({
      ...data,
      method: 'sendFileByUrl',
      body: {
        chatId: data.chatId,
        urlFile: data.urlFile,
        fileName: data.fileName
      }
    })
};