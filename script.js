/* ===== PRO SPORTS — Shared JavaScript ===== */

const WA_BASE = 'https://wa.me/923041632932';

const products = [
  
  {
    id: 26,
    name: 'Swimsuit',
    category: 'sportswear',
    emoji: '🏊',
    tags: ['current', 'fitness', 'swimming'],
    description: 'Designed for confidence, comfort, and performance, the PRO SPORTS Performance Swimsuit combines a sleek athletic fit with premium-quality materials for maximum comfort in and out of the water. Featuring a streamlined silhouette, durable stretch fabric, and modern PRO SPORTS graphics, it delivers the perfect balance of style, flexibility, and functionality. Whether you are training, swimming laps, competing, or enjoying a day at the beach, this swimsuit provides excellent support, freedom of movement, and lasting comfort. Premium chlorine-resistant fabric, soft stretchy construction, quick-dry and breathable material, athletic racerback design, durable fade-resistant graphics, and full range of motion make it ideal for swimming, fitness, beachwear, and water sports. Take your swimwear performance to the next level with the PRO SPORTS Performance Swimsuit—built for athletes and designed for style. Available in all colors.',
    images: ['images/sm11.jpeg', 'images/sm12.jpeg']
},
  {
    id: 25,
    name: 'Women’s Flare Pants',
    category: 'sportswear',
    emoji: '👖',
    tags: ['current', 'fitness', 'lifestyle'],
    description: 'Upgrade your activewear collection with the PRO SPORTS Women’s Flare Pants, designed to deliver the perfect balance of comfort, performance, and modern style. Featuring a flattering high-waist fit and elegant flared-leg silhouette, these pants provide a stylish look while offering maximum flexibility and comfort for workouts, casual outings, travel, and everyday wear. Crafted from premium stretch fabric, they ensure exceptional freedom of movement with a soft, breathable feel. The signature PRO SPORTS branding and dynamic side graphics add a bold athletic touch, making them perfect for modern fitness and lifestyle fashion. Premium soft-stretch fabric, flattering high-waist design, trendy flared-leg silhouette, lightweight and breathable construction, comfortable all-day wear, stylish PRO SPORTS graphics, and versatile performance make them ideal for fitness, yoga, gym sessions, travel, and casual fashion. Move with confidence and style in the PRO SPORTS Women’s Flare Pants—where fashion meets performance. Available in all colors.',
    images: ['images/fl12.jpeg', 'images/fl13.jpeg', 'images/fl14.jpeg', 'images/fl11.jpeg']
},
  {
    id: 24,
    name: 'MMA Fight Shorts',
    category: 'sportswear',
    emoji: '🥊',
    tags: ['current', 'training', 'performance'],
    description: 'Built for champions, the PRO SPORTS Elite MMA Fight Shorts are engineered for maximum mobility, durability, and performance. Designed with lightweight, breathable fabric and reinforced stitching, these fight shorts provide unrestricted movement and superior comfort during training, sparring, and competition. Featuring an athletic fit, flexible side-slit design, secure waistband, and bold PRO SPORTS graphics, they deliver the perfect combination of functionality, style, and professional performance. Premium lightweight performance fabric, moisture-wicking and quick-dry technology, durable reinforced construction, flexible side slits for enhanced movement, comfortable secure waistband, and fight-ready athletic fit make them ideal for MMA, Muay Thai, BJJ, Kickboxing, Boxing, CrossFit, and fitness training. Train harder, move faster, and perform at your best with PRO SPORTS Elite MMA Fight Shorts. Available in all colors.',
    images: ['images/m11.jpeg', 'images/m12.jpeg', 'images/m13.jpeg']
},
  { 
    id: 23,
    name: 'Boxy Crop Tee',
    category: 'sportswear',
    emoji: '👕',
    tags: ['current', 'custom', 'lifestyle'],
    description: 'Designed for those who value comfort and style, the PRO SPORTS Boxy Crop Tee delivers a modern oversized silhouette with a premium streetwear-inspired look. Crafted from high-quality breathable fabric, this crop tee provides all-day comfort while maintaining a clean, structured fit. Featuring bold PRO SPORTS branding and contemporary graphic details, it is perfect for casual wear, gym sessions, fitness activities, and everyday fashion. The relaxed boxy cropped design creates a trendy effortless look that pairs perfectly with jeans, joggers, shorts, or leggings. Premium soft-touch fabric, modern boxy cropped fit, lightweight and breathable construction, durable high-quality print, and unisex streetwear-inspired design make it a versatile addition to any wardrobe. Ideal for casual, fitness, lifestyle, and sports-inspired wear. Available in all colors.',
    images: ['images/tee11.jpeg', 'images/tee12.jpeg', 'images/tee13.jpeg']
},
  {
    id: 22,
    name: 'Soccer Uniform',
    category: 'uniform',
    emoji: '⚽',
    tags: ['current', 'custom', 'team'],
    description: 'Play with confidence in the PRO SPORTS Soccer Uniform, designed for peak performance, comfort, and a professional athletic appearance. Crafted from lightweight, breathable, and moisture-wicking fabric, this kit keeps players cool and comfortable during intense training sessions and match days. Featuring a modern athletic fit, premium stitching, and dynamic design, it provides maximum mobility, durability, and style on the field. Lightweight and breathable performance fabric, moisture-wicking technology for enhanced comfort, athletic fit for unrestricted movement, durable stitching for long-lasting performance, soft quick-dry material for intense gameplay, premium PRO SPORTS logo branding, and includes jersey, shorts, and matching socks. Perfect for teams, tournaments, training sessions, football clubs, and competitive players. Available in all colors.',
    images: ['images/sc11.jpeg', 'images/sc12.jpeg', 'images/sc13.jpeg', 'images/sc14.jpeg', 'images/sc15.jpeg']
},
  {
    id: 21,
    name: 'Baseball Uniform',
    category: 'uniform',
    emoji: '⚾',
    tags: ['current', 'custom', 'team'],
    description: 'Step onto the field with confidence in the PRO SPORTS Baseball Uniform, designed for performance, comfort, and a professional athletic look. Made from lightweight, breathable, and moisture-wicking fabric, this uniform keeps players cool and comfortable throughout every game. Featuring a classic button-up baseball jersey, athletic-fit pants, and premium detailing, it provides the perfect combination of style, flexibility, and durability for training and competition. Lightweight and breathable performance fabric, moisture-wicking technology for all-day comfort, classic button-up jersey design, athletic-fit pants for maximum mobility, durable stitching for long-lasting performance, premium PRO SPORTS logo branding, and customizable colors, names, and player numbers available. Perfect for teams, tournaments, practice sessions, and professional sports events. Available Colors: White/Black, Black/Grey, Navy/Grey, and Beige/Brown.',
    images: ['images/bs11.jpeg', 'images/bs12.jpeg', 'images/bs13.jpeg', 'images/bs14.jpeg']
},
   {
    id: 20,
    name: 'Puffer Jacket',
    category: 'jacket',
    emoji: '🧥',
    tags: ['current', 'winter', 'sports'],
    description: 'Stay warm without compromising on style with the PRO SPORTS Puffer Jacket. Designed with premium insulation and a lightweight feel, this jacket delivers exceptional comfort and cold-weather protection. Featuring a sleek quilted design, high-neck collar, and full-zip closure, it is perfect for sports, travel, outdoor activities, and everyday wear. Premium padded insulation for superior warmth, lightweight and comfortable construction, full-zip front with high-neck protection, secure side pockets for essentials, elastic cuffs for a snug fit, durable wind-resistant outer shell, and signature PRO SPORTS logo branding. Ideal for training sessions, outdoor adventures, and casual styling. Available Colors: Black, White, Dark Blue, and Brown.',
    images: ['images/pj12.jpeg', 'images/pj11.jpeg', 'images/pj13.jpeg', 'images/pj14.jpeg']
},
  {
    id: 19,
    name: 'Windbreaker',
    category: 'jacket',
    emoji: '🧥',
    tags: ['current', 'custom', 'training'],
    description: 'Stay protected in style with the PRO SPORTS Windbreaker, designed for athletes and everyday wear. Crafted from lightweight, wind-resistant fabric, this jacket offers comfort, durability, and a sleek sporty look. Featuring a full-zip front, high-neck collar, elastic cuffs, and zippered pockets, it is perfect for training sessions, outdoor activities, or casual wear. Lightweight and wind-resistant material, premium full-zip design, high-neck collar for extra protection, secure zippered side pockets, comfortable elastic cuffs and hem, and stylish PRO SPORTS logo branding. Ideal for sports, travel, and everyday use. Available in all colors.',
    images: ['images/wnd12.jpeg', 'images/wnd11.jpeg', 'images/wnd13.jpeg', 'images/wnd14.jpeg']
  },
  {
    id: 18,
    name: 'Tank Top',
    category: 'sportswear',
    emoji: '👕',
    tags: ['current', 'custom', 'training'],
    description: 'Stay cool and move freely with the PRO SPORTS Performance Tank Top, designed for athletes who demand comfort, style, and performance. Made from premium lightweight fabric, this tank top offers maximum breathability and unrestricted movement, making it perfect for training and everyday active wear. Premium lightweight and breathable performance fabric with moisture-wicking technology keeps you cool and dry, while the sleeveless athletic design delivers maximum mobility. Soft, comfortable, and durable construction with high-quality sublimated or printed PRO SPORTS branding and an athletic fit designed for training and competition. Perfect for gym workouts, running, basketball, fitness, and casual wear. Available in Black, White, Brown, and custom color options. Customizable with team logos, names, and branding. PRO SPORTS - Lightweight Comfort. Maximum Performance.',
    images: ['images/tnk11.jpeg', 'images/tnk12.jpeg', 'images/tnk13.jpeg']
  },
  {
    id: 17,
    name: 'Cap',
    category: 'accessories',
    emoji: '🧢',
    tags: ['current', 'custom', 'training'],
    description: 'Complete your look with the PRO SPORTS Performance Cap, designed for athletes and everyday wear. Crafted with premium materials and a modern athletic fit, this cap delivers comfort, durability, and timeless style both on and off the field. Premium lightweight and breathable fabric, a structured six-panel design for a professional look, curved visor for enhanced sun protection, adjustable back strap for a secure and comfortable fit, high-quality embroidered PRO SPORTS logo, and durable stitching for long-lasting performance. Suitable for training, travel, outdoor activities, and casual wear. Available in Black, Red, and Dark Brown color options. Customizable with team logos, names, and branding. PRO SPORTS - Wear Your Passion. Perform with Confidence.',
    images: ['images/cp11.jpeg', 'images/cp12.jpeg', 'images/cp13.jpeg']
  },
  {
    id: 16,
    name: 'Hoodie',
    category: 'outerwear',
    emoji: '🧥',
    tags: ['current', 'custom', 'training'],
    description: 'Stay comfortable and perform in style with the PRO SPORTS Performance Hoodie. Designed for athletes and active lifestyles, this premium hoodie combines modern sportswear aesthetics with everyday comfort. Crafted from high-quality, breathable fabric, it delivers warmth, durability, and unrestricted movement whether you are training, traveling, or relaxing. Premium soft-touch and breathable fabric, a comfortable athletic fit for all-day wear, adjustable drawstring hood for extra coverage, kangaroo pocket for convenience and warmth, durable stitching and long-lasting print quality, and a lightweight yet warm design for every season. Perfect for training, gym sessions, team travel, and casual wear. Available in Black, White, Royal Blue, Teal, and Baby Pink. Customizable with team logos, names, and colors. PRO SPORTS - Performance, Comfort, and Style in Every Layer.',
    images: ['images/h11.jpeg', 'images/h12.jpeg', 'images/h13.jpeg', 'images/h14.jpeg', 'images/h15.jpeg']
  },
  {
    id: 15,
    name: '7v7 Uniform',
    category: 'uniform',
    emoji: '🏈',
    tags: ['current', 'custom', 'training'],
    description: 'Dominate every play with the PRO SPORTS 7v7 Uniform, designed for speed, comfort, and elite performance. Crafted from premium lightweight fabric, this sleeveless hooded uniform delivers maximum mobility and a modern athletic look for competitive 7v7 football. Premium lightweight and breathable performance fabric with moisture-wicking technology keeps athletes cool and dry, while the sleeveless hooded design, four-way stretch material, and athletic fit deliver unrestricted movement, speed, and comfort. Features durable sublimated graphics that will not fade or peel and is fully customizable with team names, player names, numbers, and logos. Perfect for tournaments, leagues, training, and competitive 7v7 events. Available in multiple custom color combinations. PRO SPORTS - Built for Speed. Designed to Win.',
    images: ['images/711.jpeg', 'images/712.jpeg', 'images/713.jpeg', 'images/714.jpeg']
  },
  {
    id: 14,
    name: 'American Football Uniform',
    category: 'uniform',
    emoji: '🏈',
    tags: ['current', 'custom', 'training'],
    description: 'Dominate the field with the PRO SPORTS American Football Uniform, engineered for elite performance, durability, and comfort. Designed with premium-quality, breathable fabric and an athletic fit, this uniform delivers maximum mobility and a professional game-day appearance. Premium lightweight and durable performance fabric, breathable moisture-wicking material to keep players cool and dry, reinforced stitching for long-lasting durability, and an athletic fit designed for unrestricted movement and comfort. Features high-quality sublimated graphics and customizable team branding. Ideal for training sessions, competitive leagues, and professional play. Available in multiple color combinations and custom designs, with custom options for team names, player names, numbers, and logos. PRO SPORTS - Built for Performance. Designed to Win.',
    images: ['images/f11.jpeg', 'images/f12.jpeg', 'images/f13.jpeg', 'images/f14.jpeg', 'images/f15.jpeg']
  },
  {
    id: 13,
    name: 'Socks',
    category: 'socks',
    emoji: '🧦',
    tags: ['current', 'training', 'performance'],
    description: 'Take every step with confidence in the PRO SPORTS Performance Socks, engineered for athletes and active lifestyles. Crafted from premium, breathable fabric, these socks provide superior comfort, support, and durability for training, competition, and everyday wear. Soft, lightweight, and breathable material with moisture-wicking technology keeps feet cool and dry, while the cushioned footbed, arch support, and reinforced heel and toe deliver lasting comfort, shock absorption, and durability. Designed with a stretchable snug fit for maximum performance. Ideal for basketball, running, gym workouts, football, and casual wear. Available in Red, Blue, Black, White, and Teal. PRO SPORTS - Every Step. Every Performance.',
    images: ['images/sk11.jpeg', 'images/sk12.jpeg', 'images/sk13.jpeg', 'images/sk14.jpeg', 'images/sk15.jpeg']
  },
  {
    id: 12,
    name: 'Premium Tracksuit',
    category: 'tracksuit',
    emoji: '🧥',
    tags: ['current', 'custom', 'training'],
    description: 'Upgrade your sportswear with the PRO SPORTS Premium Tracksuit, designed for performance, comfort, and style. Made from high-quality, breathable fabric, this tracksuit offers a modern athletic fit that keeps you comfortable during training, travel, and everyday wear. Premium lightweight and durable material, soft breathable moisture-wicking fabric, full-zip jacket with stand-up collar, tapered jogger pants with secure zip pockets, and maximum mobility for gym, basketball, running, travel, and casual wear. Available in Black, White, Dark Blue, Brown, and Teal. PRO SPORTS - Train Hard. Move Freely. Perform Better.',
    images: ['images/ts11.jpeg', 'images/ts12.jpeg', 'images/ts13.jpeg', 'images/ts14.jpeg', 'images/ts15.jpeg']
  },
  {
    id: 11,
    name: 'T-Shirt',
    category: 'sportswear',
    emoji: '👕',
    tags: ['current', 'custom', 'training'],
    description: 'Elevate your game with the PRO SPORTS Performance T-Shirt, designed for athletes and everyday active wear. Crafted from premium, lightweight, and breathable fabric, it keeps you cool and comfortable during training, workouts, and casual outings.',
    images: ['images/t11.jpeg', 'images/t12.jpeg', 'images/t13.jpeg', 'images/t14.jpeg']
  },
  {
    id: 10,
    name: 'Hooded Performance Shirts',
    category: 'sportswear',
    emoji: '👕',
    tags: ['current', 'custom', 'training'],
    description: 'Upgrade your sportswear with the PRO SPORTS Hooded Performance Shirts, designed for athletes who value style, comfort, and performance. Featuring a modern short-sleeve hooded design, these shirts are made from lightweight, breathable fabric to keep you cool and comfortable during training, workouts, and everyday wear.',
    images: ['images/shirt11.jpeg', 'images/shirt12.jpeg', 'images/shirt13.jpeg', 'images/shirt14.jpeg', 'images/shirt15.jpeg']
  },
  {
    id: 9,
    name: 'Basketball Uniform',
    category: 'uniform',
    emoji: '🏀',
    tags: ['current', 'custom'],
    description: 'Elevate your game with the PRO SPORTS Basketball Uniform, designed for athletes who demand both style and performance. Featuring a sleek black-and-white design, lightweight breathable fabric, and a comfortable athletic fit, this uniform is built for maximum mobility on the court. Perfect for teams, tournaments, training sessions, and custom branding.',
    images: ['images/Basketball Uniform11.jpeg', 'images/Basketball Uniform12.jpeg', 'images/Basketball Uniform13.jpeg', 'images/Basketball Uniform14.jpeg']
  },
  {
    id: 27,
    name: 'Custom Slides',
    category: 'footwear',
    emoji: '👟',
    tags: ['current', 'custom', 'lifestyle'],
    description: 'Step into comfort and style with PRO SPORTS Custom Slides, designed for athletes, teams, businesses, and brands looking for premium personalized footwear. Built with a lightweight cushioned sole and durable construction, these slides provide all-day comfort while showcasing your custom logo, team name, or unique design. Perfect for sports teams, corporate branding, events, gyms, and everyday wear, PRO SPORTS Custom Slides combine performance, durability, and a professional look. Whether you are on the sidelines, at the gym, or relaxing after a game, these custom slides deliver unmatched comfort and style. Fully customizable with logos, names, and artwork, premium cushioned footbed for superior comfort, lightweight and durable construction, non-slip textured sole, high-quality long-lasting print, and available in multiple colors and sizes. Ideal for teams, clubs, schools, businesses, promotional events, and casual lifestyle wear. Create your own unique look with PRO SPORTS Custom Slides—where comfort meets performance.',
    images: ['images/sd1.jpeg']
},

];

const categoryLabels = {
  uniform: 'Sports Uniforms',
  jacket: 'Jackets',
  sportswear: 'Sportswear',
  outerwear: 'Hoodies & Outerwear',
  tracksuit: 'Tracksuits',
  accessories: 'Accessories',
  socks: 'Socks',
  footwear: 'Footwear'
};

const categoryMeta = {
  uniform: { emoji: '⚽', desc: 'Soccer, basketball, baseball & football kits' },
  jacket: { emoji: '🧥', desc: 'Puffer jackets & windbreakers' },
  sportswear: { emoji: '👕', desc: 'Tees, tanks, shorts & activewear' },
  outerwear: { emoji: '🧥', desc: 'Performance hoodies & layers' },
  tracksuit: { emoji: '🏃', desc: 'Premium jacket & jogger sets' },
  accessories: { emoji: '🧢', desc: 'Caps and sports accessories' },
  socks: { emoji: '🧦', desc: 'Performance athletic socks' },
  footwear: { emoji: '👟', desc: 'Custom slides & sports footwear' }
};

function getCategoryKeys() {
  return Object.keys(categoryLabels);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function renderShopFilterTabs(containerId, activeFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tabs = [{ key: 'all', label: 'ALL' }].concat(
    getCategoryKeys().map(key => ({
      key,
      label: categoryLabels[key].toUpperCase()
    }))
  );

  container.innerHTML = tabs.map(tab => `
    <div class="f-tab${tab.key === activeFilter ? ' active' : ''}" data-filter="${tab.key}">${tab.label}</div>
  `).join('');
}

function initCategoryCarousel() {
  try {
    const track = document.getElementById('categoryCarousel');
    const dotsContainer = document.getElementById('categoryDots');
    const prevBtn = document.getElementById('categoryPrevBtn');
    const nextBtn = document.getElementById('categoryNextBtn');
    const container = document.querySelector('.categories-section .carousel-container');
    
    if (!track || !dotsContainer || !prevBtn || !nextBtn) {
      return;
    }

    const categoryKeys = getCategoryKeys();
    const items = categoryKeys.map(key => {
      const meta = categoryMeta[key];
      const categoryProducts = getProductsByCategory(key);
      const count = categoryProducts.length;
      const image = categoryProducts.length > 0 ? categoryProducts[0].images[0] : '';
      return `
        <a href="shop.html?category=${key}" class="category-card">
          <div class="category-img-box">
            ${image ? `<img src="${image}" alt="${categoryLabels[key]}" class="category-img" />` : `<span class="category-emoji">${meta.emoji}</span>`}
          </div>
          <h3>${categoryLabels[key]}</h3>
          <p>${meta.desc}</p>
          <span class="category-count">${count} product${count !== 1 ? 's' : ''}</span>
        </a>`;
    });

    track.innerHTML = items.join('');

    let currentIndex = 0;
    let carouselInterval;
    let touchStartX = 0;
    let touchDeltaX = 0;
    let isSwiping = false;

    function getContainerWidth() {
      return track.parentElement ? track.parentElement.offsetWidth : 0;
    }

    function syncSlideWidths() {
      const containerWidth = getContainerWidth();
      if (!containerWidth) return 0;
      const slides = track.querySelectorAll('.category-card');
      slides.forEach(slide => {
        slide.style.flex = `0 0 ${containerWidth}px`;
        slide.style.width = `${containerWidth}px`;
        slide.style.minWidth = `${containerWidth}px`;
        slide.style.maxWidth = `${containerWidth}px`;
      });
      track.style.width = `${containerWidth * slides.length}px`;
      return containerWidth;
    }

    function getItemsVisible() {
      return 1;
    }

    function updateCarousel() {
      try {
        const itemsVisible = getItemsVisible();
        const totalSteps = items.length - itemsVisible + 1;
        currentIndex = Math.min(currentIndex, totalSteps - 1);
        currentIndex = Math.max(currentIndex, 0);

        const stepWidth = syncSlideWidths();
        track.style.transform = `translateX(-${currentIndex * stepWidth}px)`;
        
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSteps; i++) {
          const dot = document.createElement('div');
          dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
          dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
          });
          dotsContainer.appendChild(dot);
        }
      } catch (e) {
        console.error('Error updating carousel:', e);
      }
    }

    function startAutoPlay() {
      stopAutoPlay();
      carouselInterval = setInterval(() => {
        const itemsVisible = getItemsVisible();
        const totalSteps = Math.max(1, items.length - itemsVisible + 1);
        currentIndex = (currentIndex + 1) % totalSteps;
        updateCarousel();
      }, 3000);
    }

    function stopAutoPlay() {
      if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
      }
    }

    window.addEventListener('resize', updateCarousel);

    nextBtn.addEventListener('click', () => {
      const itemsVisible = getItemsVisible();
      const totalSteps = items.length - itemsVisible + 1;
      currentIndex = (currentIndex + 1) % totalSteps;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      const itemsVisible = getItemsVisible();
      const totalSteps = items.length - itemsVisible + 1;
      currentIndex = (currentIndex - 1 + totalSteps) % totalSteps;
      updateCarousel();
    });

    if (container) {
      container.addEventListener('mouseenter', stopAutoPlay);
      container.addEventListener('mouseleave', startAutoPlay);

      container.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchDeltaX = 0;
        stopAutoPlay();
      }, { passive: true });

      container.addEventListener('touchmove', e => {
        touchDeltaX = e.touches[0].clientX - touchStartX;
      }, { passive: true });

      container.addEventListener('touchend', () => {
        if (Math.abs(touchDeltaX) > 50) {
          isSwiping = true;
          const itemsVisible = getItemsVisible();
          const totalSteps = items.length - itemsVisible + 1;
          if (touchDeltaX < 0) {
            currentIndex = (currentIndex + 1) % totalSteps;
          } else {
            currentIndex = (currentIndex - 1 + totalSteps) % totalSteps;
          }
          updateCarousel();
          setTimeout(() => { isSwiping = false; }, 350);
        }
        startAutoPlay();
      }, { passive: true });

      track.addEventListener('click', e => {
        if (isSwiping) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);
    }

    // Wait for images to load before initial update
    window.addEventListener('load', () => {
      updateCarousel();
      startAutoPlay();
    });
    
    // Also update on DOMContentLoaded fallback
    setTimeout(updateCarousel, 100);
  } catch (e) {
    console.error('Error initializing category carousel:', e);
  }
}

/* ===== HELPERS ===== */

function getProductById(id) {
  return products.find(p => p.id === parseInt(id, 10));
}

function buildWhatsAppUrl(text) {
  return WA_BASE + '?text=' + encodeURIComponent(text);
}

function getImageHTML(src, alt, className, category, emoji) {
  return `<img src="${src}" alt="${alt}" class="${className || 'product-img'}" loading="lazy" onerror="this.outerHTML='<div class=\\'product-img placeholder ${category}\\'>${emoji}</div>'">`;
}

function renderProductImage(product) {
  return getImageHTML(product.images[0], product.name, 'product-img', product.category, product.emoji);
}

function renderProductCard(product, showViewDetails, index) {
  if (showViewDetails === undefined) showViewDetails = true;
  const stagger = index !== undefined ? ` stagger-${(index % 8) + 1}` : '';
  const orderUrl = buildWhatsAppUrl('Hi, I want to order: ' + product.name);
  const detailUrl = 'product-detail.html?id=' + product.id;

  return `
    <div class="product-card reveal${stagger}" data-id="${product.id}" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
      <div class="product-img-box">${renderProductImage(product)}</div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description.substring(0, 60)}...</p>
        <div class="btn-group">
          ${showViewDetails ? `<a href="${detailUrl}" class="btn btn-black btn-sm">View Details</a>` : ''}
          <a href="${orderUrl}" target="_blank" rel="noopener" class="btn btn-green btn-sm">Order on WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(containerId, filterFn) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filterFn ? products.filter(filterFn) : products;
  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results"><span>🔍</span><p>No products found.</p></div>';
    return;
  }

  container.innerHTML = filtered.map((p, i) => renderProductCard(p, true, i)).join('');
  initScrollReveal(container);
}

/* ===== SCROLL REVEAL ===== */

function initScrollReveal(root) {
  const scope = root || document;
  const selectors = '.reveal, .fade-in, .reveal-left, .reveal-right, .reveal-scale, .section-header, .badge-item';
  const els = scope === document ? document.querySelectorAll(selectors) : scope.querySelectorAll(selectors);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const divider = entry.target.querySelector('.section-divider');
        if (divider) divider.classList.add('grown');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ===== RIPPLE EFFECT ===== */

function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-ripple, .btn-primary, .btn-whatsapp, .newsletter-btn');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* ===== PAGE TRANSITIONS ===== */

function initPageTransitions() {
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.includes('wa.me')) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => { window.location.href = href; }, 300);
    });
  });
}

/* ===== NAVBAR ===== */

function initNavbar() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  function toggleMenu(forceClose = false) {
    if (!mobileNav || !hamburger || !overlay) return;
    const isOpen = forceClose ? false : !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburger.classList.toggle('active', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (hamburger && mobileNav && overlay) {
    hamburger.addEventListener('click', () => toggleMenu());
    overlay.addEventListener('click', () => toggleMenu(true));

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(true));
    });
  }

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ===== FILTER TABS WITH FADE ===== */

function filterCardsWithFade(cards, shouldShow) {
  cards.forEach(card => {
    const show = shouldShow(card);
    if (show) {
      if (card.classList.contains('hidden')) {
        card.classList.remove('hidden');
        card.classList.add('filtering-in');
        setTimeout(() => card.classList.remove('filtering-in'), 400);
      }
    } else {
      card.classList.add('hidden');
    }
  });
}

function initFilterTabs(containerId, gridId) {
  const container = document.getElementById(containerId);
  const tabs = container ? container.querySelectorAll('.filter-tab') : [];
  const grid = document.getElementById(gridId);
  if (!tabs.length || !grid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      const cards = grid.querySelectorAll('.product-card');

      filterCardsWithFade(cards, card => {
        const cat = card.getAttribute('data-category');
        return filter === 'all' || cat === filter;
      });
    });
  });
}

/* ===== SHOP PAGE ===== */

function initShopPage() {
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category');
  let activeCategory = urlCategory && categoryLabels[urlCategory] ? urlCategory : 'all';

  renderProducts('shopGrid', activeCategory !== 'all' ? (p) => p.category === activeCategory : null);

  if (urlCategory && categoryLabels[urlCategory]) {
    document.title = categoryLabels[urlCategory] + ' | PRO SPORTS';
  }

  const searchInput = document.getElementById('searchInput');

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const cards = document.querySelectorAll('#shopGrid .product-card');
    let visible = 0;

    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const name = card.getAttribute('data-name');
      const matchCat = activeCategory === 'all' || cat === activeCategory;
      const matchSearch = !query || name.includes(query);

      const shouldShow = matchCat && matchSearch;
      if (shouldShow) {
        if (card.classList.contains('hidden')) {
          card.classList.remove('hidden');
          card.classList.add('filtering-in');
          setTimeout(() => card.classList.remove('filtering-in'), 400);
        }
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    let noRes = document.getElementById('shopNoResults');
    if (visible === 0) {
      if (!noRes) {
        noRes = document.createElement('div');
        noRes.id = 'shopNoResults';
        noRes.className = 'no-results';
        noRes.style.textAlign = 'center';
        noRes.style.padding = '40px';
        noRes.innerHTML = '<span>🔍</span><p>No products match your search.</p>';
        document.getElementById('shopGrid').appendChild(noRes);
      }
    } else if (noRes) {
      noRes.remove();
    }
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  applyFilters();
}

/* ===== HOME PAGE ===== */

function initHomePage() {
  initFeaturedProducts('featuredGrid', [23, 22, 21, 20]);
  initCategoryCarousel();
  initGalleryCarousel();
}

function initFeaturedProducts(containerId, productIds) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const featured = products.filter(p => productIds.includes(p.id));
  // Sort to maintain the order of productIds
  featured.sort((a, b) => productIds.indexOf(a.id) - productIds.indexOf(b.id));
  container.innerHTML = featured.map((p, i) => renderProductCard(p, true, i)).join('');
  initScrollReveal(container);
}

function initGalleryCarousel() {
  const track = document.getElementById('galleryCarousel');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!track) return;

  const galleryItems = products.slice(0, 8).map(p => ({
    emoji: p.emoji,
    name: p.name,
    category: categoryLabels[p.category] || p.category
  }));

  track.innerHTML = galleryItems.map(item => `
    <div class="carousel-item">
      <div class="emoji">${item.emoji}</div>
      <h4>${item.name}</h4>
      <p class="carousel-cat">${item.category}</p>
    </div>
  `).join('');

  let currentIndex = 0;

  function updateCarousel() {
    const itemsVisible = window.innerWidth > 992 ? 4 : window.innerWidth > 768 ? 2 : 1;
    const totalSteps = galleryItems.length - itemsVisible + 1;
    currentIndex = Math.min(currentIndex, totalSteps - 1);

    const stepWidth = track.querySelector('.carousel-item').offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * stepWidth}px)`;
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSteps; i++) {
      const dot = document.createElement('div');
      dot.className = `dot ${i === currentIndex ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  window.addEventListener('resize', updateCarousel);

  nextBtn.addEventListener('click', () => {
    const itemsVisible = window.innerWidth > 992 ? 4 : window.innerWidth > 768 ? 2 : 1;
    const totalSteps = galleryItems.length - itemsVisible + 1;
    currentIndex = (currentIndex + 1) % totalSteps;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    const itemsVisible = window.innerWidth > 992 ? 4 : window.innerWidth > 768 ? 2 : 1;
    const totalSteps = galleryItems.length - itemsVisible + 1;
    currentIndex = (currentIndex - 1 + totalSteps) % totalSteps;
    updateCarousel();
  });

  updateCarousel();
  setInterval(() => {
    const itemsVisible = window.innerWidth > 992 ? 4 : window.innerWidth > 768 ? 2 : 1;
    const totalSteps = Math.max(1, galleryItems.length - itemsVisible + 1);
    currentIndex = (currentIndex + 1) % totalSteps;
    updateCarousel();
  }, 5000);
}

/* ===== PRODUCT DETAIL ===== */

function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProductById(id);
  const content = document.getElementById('productDetailContent');
  const notFound = document.getElementById('productNotFound');

  if (!product) {
    if (content) content.style.display = 'none';
    if (notFound) notFound.style.display = 'block';
    return;
  }

  if (notFound) notFound.style.display = 'none';
  document.body.setAttribute('data-product-id', String(product.id));
  document.title = product.name + ' | PRO SPORTS';

  const mainGallery = document.getElementById('galleryMain');
  const thumbsContainer = document.getElementById('galleryThumbs');
  const detailName = document.getElementById('detailName');
  const detailBadge = document.getElementById('detailBadge');
  const detailDesc = document.getElementById('detailDesc');
  const orderBtn = document.getElementById('orderBtn');
  const askBtn = document.getElementById('askBtn');

  let selectedSize = 'M';
  let quantity = 1;

  function setMainImage(index) {
    const src = product.images[index];
    mainGallery.style.opacity = '0';
    setTimeout(() => {
      mainGallery.innerHTML = getImageHTML(src, product.name, 'product-img img-fade', product.category, product.emoji);
      mainGallery.style.opacity = '1';
    }, 200);

    thumbsContainer.querySelectorAll('.gallery-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  mainGallery.style.transition = 'opacity 0.3s ease';
  mainGallery.innerHTML = getImageHTML(product.images[0], product.name, 'product-img', product.category, product.emoji);

  thumbsContainer.innerHTML = product.images.map((src, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
      ${getImageHTML(src, product.name, 'product-img', product.category, product.emoji)}
    </div>
  `).join('');

  thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      setMainImage(parseInt(thumb.getAttribute('data-index'), 10));
    });
  });

  detailName.textContent = product.name;
  detailBadge.textContent = categoryLabels[product.category] || product.category;
  detailDesc.textContent = product.description;

  function updateWhatsAppLinks() {
    orderBtn.href = buildWhatsAppUrl(`Hi! I want to order: ${product.name}, Size: ${selectedSize}, Qty: ${quantity}`);
    askBtn.href = buildWhatsAppUrl('Hi! I have a question about: ' + product.name);
  }

  document.querySelectorAll('.size-selector .f-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-selector .f-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.textContent;
      updateWhatsAppLinks();
    });
  });

  const qtyValue = document.getElementById('qtyValue');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');

  if (qtyMinus && qtyPlus && qtyValue) {
    qtyMinus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyValue.textContent = quantity;
        updateWhatsAppLinks();
      }
    });

    qtyPlus.addEventListener('click', () => {
      if (quantity < 99) {
        quantity++;
        qtyValue.textContent = quantity;
        updateWhatsAppLinks();
      }
    });
  }

  updateWhatsAppLinks();

  const related = products.filter(p => p.category === product.category && p.id !== product.id);
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    const items = related.length >= 4 ? related.slice(0, 4) : products.filter(p => p.id !== product.id).slice(0, 4);
    relatedGrid.innerHTML = items.map((p, i) => renderProductCard(p, true, i)).join('');
    initScrollReveal(relatedGrid);
  }
}

/* ===== CONTACT FORM ===== */

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    let text = 'Hi Pro Sports!\n';
    if (name) text += 'Name: ' + name + '\n';
    if (phone) text += 'Phone: ' + phone + '\n';
    if (message) text += 'Message: ' + message;

    window.open(buildWhatsAppUrl(text), '_blank');
  });
}

/* ===== NEWSLETTER ===== */

function initNewsletter() {
  document.querySelectorAll('.newsletter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrap = btn.closest('.newsletter');
      const input = wrap ? wrap.querySelector('input') : null;
      if (input && input.value.trim()) {
        alert('Thank you for subscribing! We will keep you updated.');
        input.value = '';
      } else if (input) {
        input.focus();
      }
    });
  });
}

/* ===== WHATSAPP FLOAT CLICK ===== */

function initWhatsAppFloat() {
  const waLink = document.querySelector('.whatsapp-float a');
  if (!waLink) return;
  waLink.addEventListener('click', () => {
    waLink.style.transform = 'scale(0.9)';
    setTimeout(() => { waLink.style.transform = ''; }, 150);
  });
}

/* ===== INIT ===== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initNewsletter();
  initRipple();
  initPageTransitions();
  initWhatsAppFloat();
  initScrollReveal();

  const page = document.body.getAttribute('data-page');
  switch (page) {
    case 'home': initHomePage(); break;
    case 'shop': initShopPage(); break;
    case 'product-detail': initProductDetail(); break;
    case 'contact': initContactForm(); break;
  }
});
