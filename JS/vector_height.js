function getAbsoluteY (selector) {
  var element = document.querySelector(selector)
  if (element) {
    var rect = element.getBoundingClientRect()
    return rect.top + window.scrollY // Apsolutna Y koordinata u odnosu na stranicu
  }
  return null
}

function trackPositions (element1, element2, targetElement) {
  var checkExist = setInterval(function () {
    var y1 = getAbsoluteY(element1)
    var y2 = getAbsoluteY(element2)
    var target = document.querySelector(targetElement)

    if (y1 !== null && y2 !== null) {
      clearInterval(checkExist) // Zaustavi proveru kada pronađe elemente
      var newHeight = Math.abs(y1 - y2) // Sprečava negativne vrednosti

      target.style.height = newHeight + 'px'
      console.log(`New height for ${targetElement}: ${newHeight}px`)
    } else {
      console.log('!!! Waiting for elements: ', element1, element2)
    }
  }, 50)
}

trackPositions('#dot-start', '#dot-end', '.scaling-business-vector')