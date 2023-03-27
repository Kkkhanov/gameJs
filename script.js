let rand = Math.floor(Math.random() * 16)

console.log(rand)
let count = 4


$('#button').click(
    function(){
      let num =  $('input').val();

      let audio = new Audio();
      audio.src = 'yes.mp3';

      let lose = new Audio()
      lose.src = 'woo.mp3'

      let gg = new Audio()
      gg.src = 'sorry.mp3'

        if(num == rand)
            $('#out').text('Вы угадали'),audio.autoplay = true;
         else if(num > rand)
         $('#out').text('Меньше'), lose.autoplay = true; 
         else if(num < rand)
         $('#out').text('Больше'), lose.autoplay = true; 
         count--
         if(count == 0)
        $('#out').text('Попытки закончились, обновите страницу!') + $(input).hide(), gg.autoplay = true;
      }
)

/*$('button').click(
    function (){
        let audio = new Audio();
        audio.src = 'gacci.mp3';
        audio.autoplay = true;
    }
)*/





