const { Category } = require('../models');

const categoryData = [
  {
    category_id : 1,
    category_name: 'Piano',
    category_picture: '/images/piano-category.png',
  },
  {
    category_id : 2,  
    category_name: 'Live Sound',
    category_picture: '/images/live-sound-category.JPG',
  },
  {
    category_id : 3, 
    category_name: 'Keyboard',
    category_picture: '/images/keyboard-category.JPG',
  },
  {
    category_id : 4, 
    category_name: 'Guitars Amp',
    category_picture: '/images/guitar-amp-category.JPG'
  },
  {
    category_id : 5, 
    category_name: 'Drum Percussion',
    category_picture: '/images/drum-percussion-category.JPG'
  },
  {
    category_id : 6, 
    category_name: 'Music-Lesson',
    category_picture: '/images/music-lesson-category.png'
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = categoryData;
