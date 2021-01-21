// Initial function to hold js file from loading until html is loaded
$(document).ready(function(){
  
  // hover on card buttons
  $('.bottom_button').mouseenter(function(){
      $(this).css('background-color', 'rgb(100, 100, 100)');
  });
  $('.bottom_button').mouseleave(function(){
      $(this).css('background-color', 'rgb(68, 67, 67)');
  });

  // show/hide cards
  
  $('#logoNav').click(function(){
      $('.stream2').hide().slideToggle('medium');
      $('.stream3').hide().slideToggle('medium');
      $('.stream4').hide().slideToggle('medium');
      $('.stream5').hide().slideToggle('medium');
      $('.stream6').hide().slideToggle('medium');  
      $('.stream1').hide().slideToggle('medium');
  });
  
  $('#stream1_btn').click(function(){
      $('.stream2').hide();
      $('.stream3').hide();
      $('.stream4').hide();
      $('.stream5').hide();
      $('.stream6').hide();  
      $('.stream1').show('medium');
  });

  $('#stream2_btn').click(function(){
      $('.stream3').hide();
      $('.stream4').hide();
      $('.stream5').hide();
      $('.stream6').hide();
      $('.stream1').hide();
      $('.stream2').show('meduim');
  });

  $('#stream3_btn').click(function(){
      $('.stream4').hide();
      $('.stream5').hide();
      $('.stream6').hide();
      $('.stream1').hide();
      $('.stream2').hide();
      $('.stream3').show('medium');
  });

  $('#stream4_btn').click(function(){
      $('.stream5').hide();
      $('.stream6').hide();
      $('.stream1').hide();
      $('.stream2').hide();
      $('.stream3').hide();  
      $('.stream4').show('medium');
  });

  $('#stream5_btn').click(function(){
      $('.stream6').hide();
      $('.stream1').hide();
      $('.stream2').hide();
      $('.stream3').hide();
      $('.stream4').hide();  
      $('.stream5').show('medium');
  });

  $('#stream6_btn').click(function(){
      $('.stream1').hide();
      $('.stream2').hide();
      $('.stream3').hide();
      $('.stream4').hide();
      $('.stream5').hide();  
      $('.stream6').show('medium');
  });
  
  // show / hide text within cards with local button

  $('.btn1').click(function(e){
      e.preventDefault();
      $('.para1').toggle('medium');
  });

  $('.btn2').click(function(e){
      e.preventDefault();
      $('.para2').toggle('medium');
  });

  $('.btn3').click(function(e){
      e.preventDefault();
      $('.para3').toggle('medium');
  });

  $('.btn4').click(function(e){
      e.preventDefault();
      $('.para4').toggle('medium');
  });

  $('.btn5').click(function(e){
      e.preventDefault();
      $('.para5').toggle('medium');
  });

  $('.btn6').click(function(e){
      e.preventDefault();
      $('.para6').toggle('medium');
  });
      
  
});

