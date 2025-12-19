// ===========================
// Sample Blog Data
// ===========================
const blogArticles = [
    {
        id: 1,
        title: "10 Web Design Trends to Watch in 2024",
        excerpt: "Explore the latest design trends that are shaping the future of web development and user experience.",
        category: "design",
        author: "Emily Chen",
        authorImage: "https://i.pravatar.cc/150?img=5",
        readTime: "6 min read",
        date: "Dec 18, 2024",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        keywords: ["web design", "trends", "UI", "UX", "2024", "frontend", "design patterns"]
    },
    {
        id: 2,
        title: "Building Scalable Applications with Microservices",
        excerpt: "Learn how microservices architecture can help you build more maintainable and scalable applications.",
        category: "technology",
        author: "Michael Rodriguez",
        authorImage: "https://i.pravatar.cc/150?img=12",
        readTime: "10 min read",
        date: "Dec 17, 2024",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        keywords: ["microservices", "architecture", "scalability", "backend", "cloud", "distributed systems"]
    },
    {
        id: 3,
        title: "The Art of Minimalist Design",
        excerpt: "Discover how less can be more when it comes to creating beautiful and functional user interfaces.",
        category: "design",
        author: "Sophie Anderson",
        authorImage: "https://i.pravatar.cc/150?img=9",
        readTime: "5 min read",
        date: "Dec 16, 2024",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
        keywords: ["minimalism", "design", "UI", "simplicity", "aesthetics", "user interface"]
    },
    {
        id: 4,
        title: "Startup Growth Strategies That Actually Work",
        excerpt: "Proven strategies and tactics to help your startup achieve sustainable growth in competitive markets.",
        category: "business",
        author: "David Kim",
        authorImage: "https://i.pravatar.cc/150?img=14",
        readTime: "8 min read",
        date: "Dec 15, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        keywords: ["startup", "growth", "business strategy", "entrepreneurship", "marketing", "scaling"]
    },
    {
        id: 5,
        title: "Productivity Hacks for Remote Workers",
        excerpt: "Master the art of working from home with these proven productivity techniques and tools.",
        category: "lifestyle",
        author: "Jessica Martinez",
        authorImage: "https://i.pravatar.cc/150?img=20",
        readTime: "7 min read",
        date: "Dec 14, 2024",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        keywords: ["productivity", "remote work", "work from home", "time management", "efficiency", "tips"]
    },
    {
        id: 6,
        title: "Understanding Blockchain Technology",
        excerpt: "A comprehensive guide to blockchain technology and its applications beyond cryptocurrency.",
        category: "technology",
        author: "Alex Thompson",
        authorImage: "https://i.pravatar.cc/150?img=7",
        readTime: "12 min read",
        date: "Dec 13, 2024",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
        keywords: ["blockchain", "cryptocurrency", "web3", "decentralization", "smart contracts", "crypto"]
    },
    {
        id: 7,
        title: "Creating Engaging User Experiences",
        excerpt: "Learn the principles of UX design that keep users coming back to your digital products.",
        category: "design",
        author: "Rachel Green",
        authorImage: "https://i.pravatar.cc/150?img=16",
        readTime: "9 min read",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
        keywords: ["UX design", "user experience", "engagement", "interaction design", "usability", "design thinking"]
    },
    {
        id: 8,
        title: "Digital Marketing in the Age of AI",
        excerpt: "How artificial intelligence is transforming digital marketing strategies and customer engagement.",
        category: "business",
        author: "Chris Wilson",
        authorImage: "https://i.pravatar.cc/150?img=11",
        readTime: "11 min read",
        date: "Dec 11, 2024",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        keywords: ["digital marketing", "AI", "artificial intelligence", "marketing automation", "SEO", "content marketing"]
    },
    {
        id: 9,
        title: "Mindfulness and Work-Life Balance",
        excerpt: "Practical tips for maintaining mental health and achieving balance in your professional life.",
        category: "lifestyle",
        author: "Maya Patel",
        authorImage: "https://i.pravatar.cc/150?img=24",
        readTime: "6 min read",
        date: "Dec 10, 2024",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
        keywords: ["mindfulness", "work-life balance", "mental health", "wellness", "meditation", "self-care"]
    }
];

// ===========================
// State Management
// ===========================
let currentCategory = 'all';
let displayedArticles = 6;
let searchQuery = '';

// ===========================
// DOM Elements
// ===========================
const articlesGrid = document.getElementById('articlesGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');
const navbarSearchInput = document.getElementById('navbarSearchInput');
const clearNavSearch = document.getElementById('clearNavSearch');
const mobileSearchToggle = document.getElementById('mobileSearchToggle');
const mobileSearchBar = document.getElementById('mobileSearchBar');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const clearMobileSearch = document.getElementById('clearMobileSearch');
const filterButtons = document.querySelectorAll('.btn-filter');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const newsletterForm = document.getElementById('newsletterForm');

// ===========================
// Initialize App
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initializeAnalysisModal(); // Init first to ensure functionality
    renderArticles();
    attachEventListeners();
    initializeScrollAnimations();
    initializeGallerySlider();
    initializeLightbox();
});

// Fallback initialization in case DOMContentLoaded fires too early
window.addEventListener('load', () => {
    console.log('Window loaded - checking slider...');
    const sliderTrack = document.getElementById('sliderTrack');
    if (sliderTrack && !sliderTrack.hasAttribute('data-initialized')) {
        console.log('Re-initializing slider on window load');
        initializeGallerySlider();
    }
});


// ===========================
// Article Rendering
// ===========================
function renderArticles() {
    const filteredArticles = getFilteredArticles();
    const articlesToShow = filteredArticles.slice(0, displayedArticles);
    
    articlesGrid.innerHTML = articlesToShow.map(article => createArticleCard(article)).join('');
    
    // Update Load More button
    if (displayedArticles >= filteredArticles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
    
    // Add animation to cards
    animateCards();
}

function createArticleCard(article) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="article-card">
                <div class="article-image-wrapper">
                    <span class="badge bg-primary article-badge">${capitalizeFirst(article.category)}</span>
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                </div>
                <div class="article-content">
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-footer">
                        <div class="article-author">
                            <img src="${article.authorImage}" alt="${article.author}">
                            <span class="article-author-name">${article.author}</span>
                        </div>
                        <span class="article-read-time">${article.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getFilteredArticles() {
    return blogArticles.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        // Don't filter by search - show all articles
        return matchesCategory;
    });
}

function getMatchingKeywords(article) {
    if (!searchQuery) return [];
    
    return article.keywords.filter(keyword => 
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

function animateCards() {
    const cards = document.querySelectorAll('.article-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===========================
// Event Listeners
// ===========================
function attachEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            displayedArticles = 6;
            renderArticles();
        });
    });
    
    // Search input
    searchInput.addEventListener('input', debounce((e) => {
        searchQuery = e.target.value;
        displayedArticles = 6;
        renderArticles();
    }, 300));
    
    // Load more button
    loadMoreBtn.addEventListener('click', () => {
        displayedArticles += 3;
        renderArticles();
    });
    
    // Navbar search input - Search entire page
    let currentMatchIndex = 0;
    let totalMatches = 0;
    
    navbarSearchInput.addEventListener('input', debounce((e) => {
        searchQuery = e.target.value;
        
        // Show/hide clear button
        if (searchQuery.length > 0) {
            clearNavSearch.style.display = 'flex';
        } else {
            clearNavSearch.style.display = 'none';
            // Clear all highlights
            removeHighlights();
        }
        
        // Search entire page if query exists
        if (searchQuery.length > 0) {
            searchEntirePage(searchQuery);
        }
    }, 300));
    
    // Clear navbar search button
    clearNavSearch.addEventListener('click', () => {
        navbarSearchInput.value = '';
        searchQuery = '';
        clearNavSearch.style.display = 'none';
        removeHighlights();
        navbarSearchInput.focus();
    });
    
    // Enter key to navigate to next match
    navbarSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            navigateToNextMatch();
        }
    });
    
    // Function to search entire page
    function searchEntirePage(query) {
        // Remove previous highlights
        removeHighlights();
        
        if (!query || query.length < 2) return;
        
        // Get all text nodes in the body
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    // Skip script, style, and search input
                    if (node.parentElement.tagName === 'SCRIPT' || 
                        node.parentElement.tagName === 'STYLE' ||
                        node.parentElement.id === 'navbarSearchInput') {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        // Search and highlight
        totalMatches = 0;
        const regex = new RegExp(query, 'gi');
        
        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            const matches = text.match(regex);
            
            if (matches) {
                const span = document.createElement('span');
                span.innerHTML = text.replace(regex, match => {
                    totalMatches++;
                    return `<mark class="search-highlight" data-match="${totalMatches}">${match}</mark>`;
                });
                textNode.parentNode.replaceChild(span, textNode);
            }
        });
        
        // Scroll to first match
        if (totalMatches > 0) {
            currentMatchIndex = 1;
            scrollToMatch(currentMatchIndex);
        }
    }
    
    // Function to remove all highlights
    function removeHighlights() {
        const highlights = document.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceWith(parent.textContent);
        });
        
        // Normalize text nodes
        document.body.normalize();
        totalMatches = 0;
        currentMatchIndex = 0;
    }
    
    // Function to navigate to next match
    function navigateToNextMatch() {
        if (totalMatches === 0) return;
        
        currentMatchIndex++;
        if (currentMatchIndex > totalMatches) {
            currentMatchIndex = 1;
        }
        
        scrollToMatch(currentMatchIndex);
    }
    
    // Function to scroll to specific match
    function scrollToMatch(index) {
        const allHighlights = document.querySelectorAll('.search-highlight');
        
        // Remove active class from all
        allHighlights.forEach(h => h.classList.remove('active-match'));
        
        // Add active class to current
        if (allHighlights[index - 1]) {
            allHighlights[index - 1].classList.add('active-match');
            allHighlights[index - 1].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mobile search toggle
    if (mobileSearchToggle && mobileSearchBar) {
        mobileSearchToggle.addEventListener('click', () => {
            mobileSearchBar.classList.toggle('active');
            mobileSearchToggle.classList.toggle('active');
            
            // Focus on input when opened
            if (mobileSearchBar.classList.contains('active')) {
                setTimeout(() => mobileSearchInput.focus(), 300);
            }
        });
        
        // Mobile search input functionality (same as desktop)
        mobileSearchInput.addEventListener('input', debounce((e) => {
            searchQuery = e.target.value;
            
            // Show/hide clear button
            if (searchQuery.length > 0) {
                clearMobileSearch.style.display = 'flex';
            } else {
                clearMobileSearch.style.display = 'none';
                removeHighlights();
            }
            
            // Search entire page if query exists
            if (searchQuery.length > 0) {
                searchEntirePage(searchQuery);
            }
        }, 300));
        
        // Clear mobile search
        clearMobileSearch.addEventListener('click', () => {
            mobileSearchInput.value = '';
            searchQuery = '';
            clearMobileSearch.style.display = 'none';
            removeHighlights();
        });
        
        // Mobile search Enter key navigation
        mobileSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                navigateToNextMatch();
            }
        });
    }
    
    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        showNotification('Thank you for subscribing! Check your email for confirmation.');
        newsletterForm.reset();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}

// ===========================
// Scroll Animations
// ===========================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('.featured-section, .categories-section, .newsletter-section, .about-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

// ===========================
// Utility Functions
// ===========================
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 80;
        const targetPosition = section.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bi bi-check-circle me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Only apply hide/show on desktop (width > 768px)
    if (window.innerWidth > 768) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
            navbar.style.transition = 'transform 0.3s ease-in-out';
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
            navbar.style.transition = 'transform 0.3s ease-in-out';
        }
    } else {
        // Always show navbar on mobile
        navbar.style.transform = 'translateY(0)';
    }
    
    // Update padding and shadow based on scroll position
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Performance Optimization
// ===========================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images after they're loaded
    setTimeout(() => {
        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }, 1000);
}

// ===========================
// Gallery Slider
// ===========================
function initializeGallerySlider() {
    console.log('Initializing gallery slider...');
    // Initialize original gallery slider
    initSingleSlider('sliderTrack', 'sliderDots');
}

function initSingleSlider(trackId, dotsId) {
    console.log(`Looking for slider elements: ${trackId}, ${dotsId}`);
    const sliderTrack = document.getElementById(trackId);
    const sliderDots = document.getElementById(dotsId);
    
    console.log('Slider track:', sliderTrack);
    console.log('Slider dots:', sliderDots);
    
    if (!sliderTrack || !sliderDots) {
        console.error('Slider elements not found!');
        return;
    }
    
    const slides = sliderTrack.querySelectorAll('.slider-item');
    const slideCount = slides.length;
    console.log(`Found ${slideCount} slides`);
    
    let currentSlide = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    // Create dots
    sliderDots.innerHTML = ''; // Clear existing dots if any
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent modal opening if click passes through
            goToSlide(i);
        });
        sliderDots.appendChild(dot);
    }
    
    const dots = sliderDots.querySelectorAll('.slider-dot');
    
    function goToSlide(index) {
        currentSlide = index;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Touch events
    let startTime = 0;
    sliderTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        currentX = startX; // Reset currentX to prevent phantom swipes on tap
        startTime = Date.now();
        isDragging = true;
        sliderTrack.style.transition = 'none';
    }, { passive: true });
    
    sliderTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        
        // Only move slider if user has swiped more than 10px
        if (Math.abs(diff) > 10) {
            const offset = -currentSlide * 100 + (diff / sliderTrack.offsetWidth * 100);
            sliderTrack.style.transform = `translateX(${offset}%)`;
        }
    }, { passive: true });
    
    sliderTrack.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        sliderTrack.style.transition = 'transform 0.3s ease-out';
        
        const diff = currentX - startX;
        const threshold = sliderTrack.offsetWidth * 0.2;
        const touchDuration = Date.now() - startTime;
        
        // If it's a quick tap (< 200ms) and minimal movement (< 10px), it's a click - don't change slides
        if (touchDuration < 200 && Math.abs(diff) < 10) {
            goToSlide(currentSlide); // Stay on current slide
            
            // Try to find image in the clicked area or current slide and open lightbox
            const currentItem = sliderTrack.children[currentSlide];
            const img = currentItem.querySelector('img');
            if (img && window.openLightbox) {
                 window.openLightbox(img.src);
            }
            return;
        }
        
        if (diff > threshold && currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else if (diff > threshold && currentSlide === 0) {
            // Loop to last slide
            goToSlide(slideCount - 1);
        } else if (diff < -threshold && currentSlide < slideCount - 1) {
            goToSlide(currentSlide + 1);
        } else if (diff < -threshold && currentSlide === slideCount - 1) {
            // Loop to first slide
            goToSlide(0);
            goToSlide(currentSlide);
        }
    });

    // Mark as initialized
    sliderTrack.setAttribute('data-initialized', 'true');
    console.log('Slider initialization complete!');
    
    // Initialize first slide
    goToSlide(0);

    // Handle resize
    window.addEventListener('resize', debounce(() => {
        goToSlide(currentSlide);
    }, 200));
}

// Make openLightbox global so slider can use it
window.openLightbox = function(src) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightbox && lightboxImage) {
        console.log('Force opening lightbox via global function');
        lightbox.classList.add('active');
        lightboxImage.src = src;
        document.body.style.overflow = 'hidden';
    }
};

// Global close function
window.closeLightbox = function() {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        console.log('Closing lightbox via global function');
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; 
    }
};

function initializeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (!lightbox || !lightboxImage || !lightboxClose) {
        console.error('Lightbox elements missing!');
        return;
    }

    // Function to attach click handler to an image
    function attachLightboxClick(img) {
        if (img.getAttribute('data-lightbox-initialized') === 'true') return;
        
        img.style.cursor = 'pointer';
        // Keep click listener for Desktop/Mouse users
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.openLightbox(img.src);
        });
        
        img.setAttribute('data-lightbox-initialized', 'true');
    }

    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(attachLightboxClick);

    setTimeout(() => {
        const lateImages = document.querySelectorAll('.gallery-image');
        lateImages.forEach(attachLightboxClick);
    }, 1000);

    // Close lightbox handlers
    lightboxClose.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.closeLightbox();
    };
    
    // Also handle touchstart for faster closing on mobile
    lightboxClose.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        window.closeLightbox();
    }, { passive: false });
    
    // Click ANYWHERE in the lightbox (background or image) to close it
    lightbox.addEventListener('click', (e) => {
        // If clicking content or background, close it.
        // We only want to avoid closing if clicking inside some interactive element that shouldn't close it,
        // but here everything inside is just the image and close button.
        window.closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            window.closeLightbox();
        }
    });
    
    console.log('✅ Lightbox initialized successfully!');
}

// ===========================
// Analysis Modal
// ===========================
function initializeAnalysisModal() {
    const modal = document.getElementById('analysisModal');
    const modalImg = document.getElementById('analysisModalImg');
    const modalTitle = document.getElementById('analysisModalTitle');
    const modalText = document.getElementById('analysisModalText');
    const closeBtn = document.querySelector('.analysis-modal-close');
    const cards = document.querySelectorAll('.js-analysis-card');

    if (!modal) {
        console.error('Analysis modal not found!');
        return;
    }

    console.log('Found analysis cards:', cards.length);

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior
            console.log('Card clicked:', card.dataset.id);
            
            const imgElem = card.querySelector('.js-analysis-img');
            const titleElem = card.querySelector('.js-analysis-title');
            const detailsElem = card.querySelector('.js-analysis-details');

            if (!imgElem || !titleElem || !detailsElem) {
                console.error('Missing elements in card:', card.dataset.id);
                return;
            }

            modalImg.src = imgElem.src;
            modalTitle.textContent = titleElem.textContent;
            modalText.innerHTML = detailsElem.innerHTML || "<p>Detailed analysis data not available.</p>";
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

console.log('%c🚀 TechInsights Blog Loaded Successfully!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
