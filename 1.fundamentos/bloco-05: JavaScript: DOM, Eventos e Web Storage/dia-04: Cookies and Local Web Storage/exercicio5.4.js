/* 
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
 */

window.onload = function () {
    let select = document.querySelectorAll('select')[0];
    select.addEventListener('change', function(){
        let colorSelected = select.selectedOptions[0].value;

        document.body.style.backgroundColor = colorSelected;

        localStorage.setItem('bg',colorSelected);
    })
      
    let fontColorSelected = document.querySelectorAll('select')[1];
    fontColorSelected.addEventListener('change', function(){
        let fontColor = fontColorSelected.selectedOptions[0].value;
        let p =document.querySelector('p');
        p.style.color = fontColor;

        localStorage.setItem ('cordafonte',fontColor);
    });
    
    let inputFontSize = document.querySelector('input[name="fontSize"]');
    inputFontSize.addEventListener ('change', function(){
        let p =document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem ('fontSize', `${inputFontSize.value}px`);
    })
    
     let textSpace = document.getElementsByTagName('input')[1]; 
    textSpace.addEventListener ('change', spacement);
    function spacement() {
        let p = document.querySelector('p');
        p.style.lineHeight = textSpace.value;
        //p.style.lineHeight = `${textSpace.value}px`;

        localStorage.setItem ('textSpace',textSpace.value);
        };   

    let fontSizeFamily = document.querySelectorAll('select')[2];    
    fontSizeFamily.addEventListener('change', fontFamily);
    function fontFamily () {
        let p = document.querySelector('p');
        let fontFamilySelected = fontSizeFamily.selectedOptions[0].value;
        p.style.fontFamily = fontFamilySelected;

        localStorage.setItem('fontFamily', fontFamilySelected);
    }

    let savedBG =localStorage.getItem('bg');
    document.body.style.backgroundColor = savedBG;

    let savedFontColor = localStorage.getItem('cordafonte');
    let p =document.querySelector('p');
    p.style.color = savedFontColor;

    let savedFont = localStorage.getItem('fontSize');
    p.style.fontSize = savedFont;

    let savedTextSpace = localStorage.getItem('textSpace');
    p.style.lineHeight = savedTextSpace;

    let savedFontFamily = localStorage.getItem ('fontFamily');
    p.style.fontFamily = savedFontFamily;
}; 