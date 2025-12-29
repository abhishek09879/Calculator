var display = document.getElementById('display');
var buttonsDiv = document.getElementById('buttons');

var buttons = [
  'C','←','/','*',
  '7','8','9','-',
  '4','5','6','+',
  '1','2','3','=',
  '0','.',',',
  
];
var operators = ['+','-','*','/','='];

for(var i=0;i<buttons.length;i++){
    var btn = document.createElement('button');
    btn.innerText = buttons[i];
    
    if(operators.includes(buttons[i])){
        btn.classList.add('operator');
    }
    
    buttonsDiv.appendChild(btn);

    btn.onclick = function(){
        var val = this.innerText;

        if(val === 'C'){
            display.value = '';
        }
        else if(val === '←'){ // backspace
            display.value = display.value.slice(0,-1);
        }
        else if(val === '='){
            try{
                display.value = eval(display.value);
            }catch(e){
                display.value = 'Error';
            }
        }
        else{
            display.value += val;
        }
    }
}