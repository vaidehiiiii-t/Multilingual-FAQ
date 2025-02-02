const FAQ = require("../models/faqModel");
const translate = require("google-translate-api-x");
exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const faqs = await FAQ.find();

    const translatedFAQs = await Promise.all(
      faqs.map(async (faq) => {
        try {
          if (lang !== "en") {
            const q = await translate(faq.question, { to: lang });
            const a = await translate(faq.answer, { to: lang });
            return {
              id: faq._id,
              question: q.text || faq.question,
              answer: a.text || faq.answer,
            };
          } else {
            return {
              id: faq._id,
              question: faq.question,
              answer: faq.answer,
            };
          }
        } catch (error) {
          console.error("Translation error:", error.message);
          return {
            id: faq._id,
            question: faq.question,
            answer: faq.answer,
          };
        }
      })
    );

    res.json(translatedFAQs);
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};
exports.addFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer });
    await faq.save();
    res.json({ message: "FAQ added!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add FAQ!" });
  }
};

exports.updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    await FAQ.findByIdAndUpdate(id, { question, answer });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Failed to update FAQ" });
  }
};

exports.deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;
    await FAQ.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete FAQ" });
  }
};
