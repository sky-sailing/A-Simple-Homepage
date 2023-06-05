module.exports = async (req, res) => {
  const { text, targetLang } = req.body;
  const apiKey = process.env.DEEPL_API_KEY;
  const url = `https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${text}&target_lang=${targetLang}`;

  const response = await fetch(url);
  const result = await response.json();
  const translation = result.translations[0].text;

  res.status(200).json({ translation });
};
