const express = require("express");
const { getFAQs, addFAQ } = require("../controllers/faqController");
const faqController = require('../controllers/faqController');
const router = express.Router();

router.get("/", getFAQs);
router.post("/add", addFAQ);
router.put("/faq/:id", faqController.updateFaq);
router.delete("/faq/:id", faqController.deleteFaq);

module.exports = router;