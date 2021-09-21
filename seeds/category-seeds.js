const { Category } = require('../models');

const categoryData = [
  {
    category_id : 1,
    category_name: 'Piano',
    category_picture: '../public/images/piano-category.JPG',
  },
  {
    category_id : 2,  
    category_name: 'Live_Sound',
    category_picture: '../public/images/live-sound-category.JPG',
  },
  {
    category_id : 3, 
    category_name: 'Keyboard',
    category_picture: '../public/images/keyboard-category.JPG',
  },
  {
    category_id : 4, 
    category_name: 'Guitars-Amp',
    category_picture: '../public/images/guitar-amp-category.JPG'
  },
  {
    category_id : 5, 
    category_name: 'Drum-Percussion',
    category_picture: '../public/images/drum-percussion-category.JPG'
  },
  {
    category_id : 6, 
    category_name: 'Music-Lesson',
    category_picture: '../public/images/music-lesson-category.JPG'
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
