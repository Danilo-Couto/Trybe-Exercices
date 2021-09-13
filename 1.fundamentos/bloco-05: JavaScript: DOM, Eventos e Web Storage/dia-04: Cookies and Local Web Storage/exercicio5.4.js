/* As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
 */

window.onload = function () {
    let select = document.querySelectorAll('select')[0];
    select.addEventListener('change', function(){
        let colorSelected = select.selectedOptions[0];
        document.body.style.backgroundColor = colorSelected.value;

        localStorage.setItem('bg',colorSelected.value);
    })

    let fontColorSelected = document.querySelectorAll('select')[1];
    fontColorSelected.addEventListener('change', function(){
        let fontColor = fontColorSelected.selectedOptions[0];
        let p =document.querySelector('p');
        p.style.color = fontColor.value;

        localStorage.setItem ('cordafonte',fontColor.value);
    })
   
    let inputFontSize = document.querySelector('input[name="fontSize"]');
    inputFontSize.addEventListener ('change', function(){
        let p =document.querySelector('p');
        p.style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem ('fontSize', `${inputFontSize.value}px`);
    })

    let savedBG =localStorage.getItem('bg');
    document.body.style.backgroundColor = savedBG;

    let savedFontColor = localStorage.getItem('cordafonte');
    let p =document.querySelector('p');
    p.style.color = savedFontColor;

    let savedFont = localStorage.getItem('fontSize');
    p.style.fontSize = savedFont;
}; 