$(document).ready(function(){
  $("button[class^='hamburger-menu']").click(function(){
    $(this).toggleClass('collapsed');
  });
});
