function loadScript(url, callback) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url

  script.onload = function () {
    if (callback) {
      callback()
    }
  }
  document.head.appendChild(script)
}

loadScript('./JS/html_load.js', function () {
  console.log(' +++ html_load.js loaded')
  loadHTML('title', '../HTML/title.html')
  loadHTML('top', '../HTML/top.html')
  loadHTML('about_us', '../HTML/about_us.html')
  loadHTML('our_approach', '../HTML/our_approach.html')
  loadHTML('ai_chat', '../HTML/ai_chat.html')
  loadHTML('scaling_business', '../HTML/scaling_business.html')
  loadHTML('business_partners', '../HTML/business_partners.html')
  loadHTML('our_services', '../HTML/our_services.html')
  loadHTML('our_verticles', '../HTML/our_verticles.html')
  loadHTML('contact_us', '../HTML/contact_us.html')
  loadHTML('end', '../HTML/end.html')
  console.log(' * all frames added')
})

loadScript('./JS/height_calc.js', function () {
  console.log(' +++ height_calc.js loaded')
  height_calc('#what-we-do-1', '#what-we-do-2')
  height_calc('#who-we-are-1', '#who-we-are-2')
  height_calc('.data-driven-frame', '.powered-by-data-frame')
  height_calc('.contact-1-frame', '.contact-2-frame')
  console.log(' * all heights adjusted')
})

loadScript('./JS/carousel.js', function () {
  console.log(' +++ carousel.js loaded')
  initializeCarousel('#partners-carousel')
  initializeCarousel('#verticles-carousel')
  console.log(' * all carousel activated')
})

loadScript('./JS/vector_height.js', function () {
  console.log(' +++ vector_height.js loaded')
  trackPositions('#dot-start', '#dot-end', '.scaling-business-vector')
  console.log(' * all heights adjusted')
})
