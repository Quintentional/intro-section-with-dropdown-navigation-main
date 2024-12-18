
// ---------------------------------------------------Desktop----------------------------------------------------------------


// Features

const features = document.querySelector('#features-dropdown-desktop');
const featuresUp = document.querySelector('#features-arrow-up');
const featuresDown = document.querySelector('#features-arrow-down');
const overlayDesktop = document.querySelector('#overlay-desktop');
const overlay = document.querySelector('#overlay');

featuresDown.addEventListener('click', () => {
    features.style.display='flex';
    featuresDown.style.display='none';
    featuresUp.style.display='inline-block';
})

featuresUp.addEventListener('click', () => {
    features.style.display='none';
    featuresDown.style.display='inline-block';
    featuresUp.style.display='none';
})

overlayDesktop.addEventListener('click', () => {
    features.style.display='none';
    featuresDown.style.display='inline-block';
    featuresUp.style.display='none';
})


// Company

const company = document.querySelector('#company-dropdown-desktop');
const companyUp = document.querySelector('#company-arrow-up');
const companyDown = document.querySelector('#company-arrow-down');

companyDown.addEventListener('click', () => {
    company.style.display='flex';
    companyDown.style.display='none';
    companyUp.style.display='inline-block';
})

companyUp.addEventListener('click', () => {
    company.style.display='none';
    companyDown.style.display='inline-block';
    companyUp.style.display='none';

})

overlayDesktop.addEventListener('click', () => {
    company.style.display='none';
    companyDown.style.display='inline-block';
    companyUp.style.display='none';

})


// --------------------------------------------------Mobile---------------------------------------------------------------------


// Open Mobile Menu

const hamburgerClosed = document.querySelector('#hamburger-closed');
const mobileMenu = document.querySelector('#mobile-menu');

hamburgerClosed.addEventListener('click', () => {
    mobileMenu.style.display='flex';
    overlay.style.display='block';
})

// Features Mobile

const featuresMobile = document.querySelector('#features-dropdown-mobile');
const featuresUpMobile = document.querySelector('#mobile-features-arrow-up');
const featuresDownMobile = document.querySelector('#mobile-features-arrow-down');

featuresDownMobile.addEventListener('click', () => {
    featuresMobile.style.display='flex';
    featuresDownMobile.style.display='none';
    featuresUpMobile.style.display='inline-block';
})

featuresUpMobile.addEventListener('click', () => {
    featuresMobile.style.display='none';
    featuresDownMobile.style.display='inline-block';
    featuresUpMobile.style.display='none';
})


// Company Mobile

const companyMobile = document.querySelector('#company-dropdown-mobile');
const companyUpMobile = document.querySelector('#mobile-company-arrow-up');
const companyDownMobile = document.querySelector('#mobile-company-arrow-down');

companyDownMobile.addEventListener('click', () => {
    companyMobile.style.display='flex';
    companyDownMobile.style.display='none';
    companyUpMobile.style.display='inline-block';
})

companyUpMobile.addEventListener('click', () => {
    companyMobile.style.display='none';
    companyDownMobile.style.display='inline-block';
    companyUpMobile.style.display='none';
})


// Close Mobile Menu

const hamburgerOpen = document.querySelector('#hamburger-open');

hamburgerOpen.addEventListener('click', () => {
    mobileMenu.style.display='none';
    overlay.style.display='none';
})

overlay.addEventListener('click', () => {
    mobileMenu.style.display='none';
    overlay.style.display='none';
})