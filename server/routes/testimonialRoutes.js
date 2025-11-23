const express = require('express');
const router = express.Router();
const {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require('../controllers/testimonialController');

router.route('/').get(getTestimonials).post(createTestimonial);
router
  .route('/:id')
  .get(getTestimonial)
  .put(updateTestimonial)
  .delete(deleteTestimonial);

module.exports = router;

