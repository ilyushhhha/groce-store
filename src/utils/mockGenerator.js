// mockGenerator.js

function generatePerfumeData() {
    return {
      id: generateRandomId(),
      name: generateRandomName(),
      brand: generateRandomBrand(),
      description: generateRandomDescription(),
      price: generateRandomPrice(),
      size: generateRandomSize(), // например, 50мл, 100мл
      fragranceNotes: generateFragranceNotes(), // ноты аромата (верхние, средние, базовые)
      concentration: generateRandomConcentration(), // Parfum, Eau de Parfum, Eau de Toilette
      gender: generateRandomGender(), // женские, мужские, унисекс
      rating: generateRandomRating(), // рейтинг покупателей
      reviewsCount: generateRandomReviewsCount(), // количество отзывов
      imageUrl: generateRandomImageUrl(),
      inStock: generateRandomStock(), // наличие на складе
      discount: generateRandomDiscount() // возможная скидка
    };
  }
  
  function generateRandomId() {
    return Math.floor(Math.random() * 10000);
  }
  
  function generateRandomName() {
    const names = ['Aqua', 'Essence', 'Blossom', 'Mystic', 'Noir'];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  function generateRandomBrand() {
    const brands = ['Chanel', 'Dior', 'Gucci', 'Tom Ford', 'YSL'];
    return brands[Math.floor(Math.random() * brands.length)];
  }
  
  function generateRandomDescription() {
    const descriptions = [
      'A fresh and floral scent that embodies elegance.',
      'A bold fragrance with deep woody and spicy notes.',
      'An invigorating aroma of citrus and musk.',
      'A timeless scent, perfect for any occasion.',
      'A sensual blend of oriental and floral notes.'
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }
  
  function generateRandomPrice() {
    return (Math.random() * 200 + 50).toFixed(2); // цена в диапазоне от 50 до 250
  }
  
  function generateRandomSize() {
    const sizes = ['50ml', '100ml', '30ml'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  
  function generateFragranceNotes() {
    const notes = {
      top: ['Citrus', 'Bergamot', 'Lavender', 'Peach', 'Mandarin'],
      middle: ['Rose', 'Jasmine', 'Violet', 'Nutmeg', 'Patchouli'],
      base: ['Amber', 'Musk', 'Vanilla', 'Sandalwood', 'Cedar']
    };
    return {
      top: notes.top[Math.floor(Math.random() * notes.top.length)],
      middle: notes.middle[Math.floor(Math.random() * notes.middle.length)],
      base: notes.base[Math.floor(Math.random() * notes.base.length)]
    };
  }
  
  function generateRandomConcentration() {
    const concentrations = ['Parfum', 'Eau de Parfum', 'Eau de Toilette'];
    return concentrations[Math.floor(Math.random() * concentrations.length)];
  }
  
  function generateRandomGender() {
    const genders = ['Male', 'Female', 'Unisex'];
    return genders[Math.floor(Math.random() * genders.length)];
  }
  
  function generateRandomRating() {
    return (Math.random() * 5).toFixed(1); // рейтинг от 0.0 до 5.0
  }
  
  function generateRandomReviewsCount() {
    return Math.floor(Math.random() * 500);
  }
  
  function generateRandomImageUrl() {
    const urls = [
      'https://placehold.co/1000',
      
    ];
    return urls[Math.floor(Math.random() * urls.length)];
  }
  
  function generateRandomStock() {
    return Math.random() > 0.5; // в наличии или нет
  }
  
  function generateRandomDiscount() {
    return Math.random() > 0.7 ? Math.floor(Math.random() * 30) : 0; // скидка до 30%
  }

  module.exports = {
    generatePerfumeData
  };


  