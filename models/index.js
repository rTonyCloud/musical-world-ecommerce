// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Tag = require('./Tag');



// Products belongsTo Category
Product.belongsTo(Category, {
foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Product belongTo User
Product.belongsTo(User, {
    foreignKey: 'user_id',
});

// User have many Products
User.hasMany( Product, {
    foreignKey: 'user_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
    through: Tag,
    
  });
  
  // Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(Product, { 
    through: Tag,
   
  });

module.exports = {
  Product,
  Category,
  User,
  Tag,
  
};
