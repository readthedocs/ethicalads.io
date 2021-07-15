// CSS includes
import './scss/index.scss';


////////////////////////////////////////////////////////////////////////////
// Landkit
//
// Landkit is a bootstrap theme we use for these marketing landing pages.
// https://themes.getbootstrap.com/product/landkit/
////////////////////////////////////////////////////////////////////////////
// JavaScript core requirements
import * as jquery from 'jquery';
import * as bootstrap from 'bootstrap';


// These are minor snippets that allow using 3rd party libraries bundled with Landkit
// These snippets are pretty minor and readable and may require some modifications
// to work due to our import system.

// Feather Icon pack
import './landkit/fonts/Feather/feather.css';

// AOS (Animate on Scroll) is for animations around fading in/out and from left/right
//import 'aos/dist/aos.css';
//import './landkit/js/aos.js';

// Choices allows for more customizability of select boxes
//import './landkit/js/choices.js';

// Countup creates animations of numbers counting up
//import './landkit/js/countup.js';
//import './landkit/js/dropdown.js';

// Dropzone is for drag and drop file uploads
//import './landkit/js/dropzone.js';

// Fancybox is for creating lightbox effects with images
//import './landkit/js/fancybox.js';

// Flickity is for flickable carousels
//import * as flickity from 'flickity';
//import * as flickityfade from 'flickity-fade';

// HighlightJS is for syntax highlighting
// I'm not sure what Landkit uses it for
//import './landkit/js/highlight.js';

// Isotope is a library for filtering and sorting layouts with effects
// It requires the imagesLoaded jQuery plugin
//import * as imagesLoaded from 'imagesloaded';
//import './landkit/js/isotope.js';

// Jarallax is for parallax scrolling effects on backgrounds
//import * as jarallax from 'jarallax';

// Map is for adding geographic mapping
//import './landkit/js/map.js';
//import './landkit/js/modal.js';

// Adds some bootstrap functions to toggle navbars
//import './landkit/js/navbar.js';

// A very simple polyfill to fix some IE SVG issues
import './landkit/js/polyfills.js';
//import './landkit/js/popovers.js';

// Some animation on pricing pages
//import './landkit/js/pricing.js';

// Quill is a WYSIWYG text editor for making rich text boxes
//import './landkit/js/quill.js';

// Smooth scrolling effects when clicking anchors
//import './landkit/js/smooth-scroll.js';

// Enables bootstrap tooltips
import './landkit/js/tooltips.js';

// Typed is a library that gives the typing effect you sometimes see on landing pages
//import './landkit/js/typed.js';
////////////////////////////////////////////////////////////////////////////
// End Landkit
////////////////////////////////////////////////////////////////////////////


// Third party libraries
import './marketing.js';
