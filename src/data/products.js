const luxeImagesRaw = import.meta.glob('../assets/LUXE Bouquet SECTION/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const dryImagesRaw = import.meta.glob('../assets/DRY FLOWER/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const catalogImagesRaw = import.meta.glob('../assets/DIFFERENT FLOWERS CATALOG/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
const moodsImagesRaw = import.meta.glob('../assets/Bouquet for moods/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
import { categoryMetadata } from './content';


const formatName = (path) => {
  const filename = path.split('/').pop().split('.')[0];
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\(.*?\)/g, '')
    .replace(/Rs \d+-\d+ per bunch/i, '')
    .trim();
};

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

// Simple pseudo-random price generator based on string
const getPrice = (name) => {
  const base = 1500;
  const variance = (name.length * 50) % 1500;
  return base + variance;
};

const formatImages = (imagesRaw, category) => {
  const metadataArray = categoryMetadata[category] || [];
  
  return Object.keys(imagesRaw).map((path, index) => {
    const defaultName = formatName(path);
    const id = slugify(defaultName) + '-' + index + '-' + slugify(category); // Ensure uniqueness
    
    let meta = metadataArray[index] || {};
    if (metadataArray.length > 0 && metadataArray[0].matchName) {
      meta = metadataArray.find(m => m.matchName === defaultName) || {};
    }
    
    const name = meta.name || defaultName;
    const price = meta.price || getPrice(defaultName);
    let priceDisplay = meta.priceDisplay || (typeof price === 'number' ? price.toLocaleString('en-IN') : price);
    
    let isPriceOnRequest = false;
    if (meta.priceDisplay && meta.priceDisplay.includes('-')) {
      isPriceOnRequest = true;
    }

    const description = meta.description || "A stunning arrangement thoughtfully curated to bring beauty and joy into your space. Features premium, hand-selected seasonal blooms with delicate foliage.";
    const care = meta.care || "Trim stems at a 45-degree angle. Replace water every 2 days. Keep away from direct sunlight and drafts.";
    
    return {
      id,
      src: imagesRaw[path],
      name,
      category,
      price,
      priceDisplay,
      isPriceOnRequest,
      description,
      care
    };
  });
};

export const luxeImages = formatImages(luxeImagesRaw, 'luxe');
export const dryImages = formatImages(dryImagesRaw, 'dry');
export const catalogImages = formatImages(catalogImagesRaw, 'catalog');
export const moodsImages = formatImages(moodsImagesRaw, 'moods');


export const collections = [
  {
    id: 'bouquet-for-moods',
    title: 'Bouquet for every moods',
    subtitle: 'Flowers for Every Feeling',
    images: moodsImages,
  },
  {
    id: 'luxe-bouquet',
    title: 'LUXE Bouquet',
    subtitle: 'Premium Selection',
    images: luxeImages,
  },
  {
    id: 'dry-flowers',
    title: 'Dry Flowers',
    subtitle: 'Timeless Elegance',
    images: dryImages,
  },
  {
    id: 'flower-catalogue',
    title: 'Flower Catalogue',
    subtitle: 'The Spring Collection',
    images: catalogImages,
  }
];

export const allProducts = [...luxeImages, ...dryImages, ...catalogImages, ...moodsImages];

export const getProductById = (id) => {
  return allProducts.find(product => product.id === id);
};
