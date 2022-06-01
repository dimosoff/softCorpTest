import * as myFunctions from './functions.mjs';

myFunctions.linksPreventDefault();
myFunctions.scrollToTop();
myFunctions.addClassOnScroll('.header', 35, '_scrolled');
myFunctions.addClassOnClick('.burger', '.header', '_menu-opened');