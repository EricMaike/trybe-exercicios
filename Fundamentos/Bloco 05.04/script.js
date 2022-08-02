window.onload = function() {
  let backColor = document.getElementById('background-options');
  backColor.addEventListener('change', function() {
    let selected = backColor;
    document.body.style.backgroundColor = selected.value;
    
    localStorage.setItem('Background-color', selected.value);
  })

  let fontColor = document.getElementById('font-option');
  fontColor.addEventListener('change', function() {
    let selectedFont = fontColor;
    document.body.style.color = selectedFont.value;
    
    localStorage.setItem('Font-color', selectedFont.value);
  })

  let inputFontSize = document.querySelector('input[name = "font-size"]');
  inputFontSize.addEventListener('input', function() {
    document.body.style.fontSize = `${inputFontSize.value}px`;

    localStorage.setItem('Font-size', `${inputFontSize.value}px`);
  })

  let inputLineHeight = document.querySelector('input[name = "line-height"]');
  inputLineHeight.addEventListener('input', function() {
    document.body.style.lineHeight = `${inputLineHeight.value}cm`;

    localStorage.setItem('Line-height', `${inputLineHeight.value}cm`);
  })

  let fontFamily = document.getElementById('fontFamily-option');
  fontFamily.addEventListener('change', function() {
    let selectedFontFamily = fontFamily;
    document.body.style.fontFamily = selectedFontFamily.value;
    
    localStorage.setItem('Font-family', selectedFontFamily.value);
  })

}

let savedBackground = localStorage.getItem('Background-color');
document.body.style.backgroundColor = savedBackground;

let savedFontColor = localStorage.getItem('Font-color');
document.body.style.color = savedFontColor;

let savedFontSize = localStorage.getItem('Font-size');
document.body.style.fontSize = savedFontSize;

let savedLineHeight = localStorage.getItem('Line-height');
document.body.style.lineHeight = savedLineHeight;

let savedFontFamily = localStorage.getItem('Font-family');
document.body.style.fontFamily = savedFontFamily;