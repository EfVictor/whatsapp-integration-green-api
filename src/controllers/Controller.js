const service = require('../services/Services'); // Здесь описаны все сервисы (бизнес-логика)

async function handle(res, fn) {
  try {
    const data = await fn();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = {
  getSettings: (req, res) =>
    handle(res, () => service.getSettings(req.body)),

  getStateInstance: (req, res) =>
    handle(res, () => service.getStateInstance(req.body)),

  sendMessage: (req, res) =>
    handle(res, () => service.sendMessage(req.body)),

  sendFileByUrl: (req, res) =>
    handle(res, () => service.sendFileByUrl(req.body))
};