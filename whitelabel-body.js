document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('input.form-control,select.form-control,textarea.form-control').forEach(function(el){
    if(!el.closest('#Login')&&!document.body.classList.contains('compliance')){
      el.style.color='#1A1A2E';
      el.style.webkitTextFillColor='#1A1A2E';
    }
  });
  (function(){
    var obs=new MutationObserver(function(){
      document.querySelectorAll('input.form-control,select.form-control,textarea.form-control').forEach(function(el){
        if(!el.dataset.coloured&&!el.closest('#Login')&&!document.body.classList.contains('compliance')){
          el.style.color='#1A1A2E';
          el.style.webkitTextFillColor='#1A1A2E';
          el.dataset.coloured='1';
        }
      });
    });
    obs.observe(document.body,{childList:true,subtree:true});
  })();
  function forceSidebar(){
    var nb=document.getElementById('navigationBlock');
    if(nb){nb.style.setProperty('background','#FFFFFF','important');nb.style.setProperty('background-color','#FFFFFF','important');}
    var ps=document.querySelector('.page-sidebar');
    if(ps){ps.style.setProperty('background','#FFFFFF','important');ps.style.setProperty('background-color','#FFFFFF','important');}
    document.querySelectorAll('.x-navigation,.x-navigation-panel').forEach(function(el){
      el.style.setProperty('background','#FFFFFF','important');
      el.style.setProperty('background-color','#FFFFFF','important');
    });
  }
  forceSidebar();
  setTimeout(forceSidebar,300);
  setTimeout(forceSidebar,800);
  setTimeout(forceSidebar,1500);
  var sidebarInterval=setInterval(forceSidebar,1000);
  setTimeout(function(){clearInterval(sidebarInterval);},8000);
  setTimeout(function(){
    var langLi=document.getElementById('language-hide');
    if(langLi){
      langLi.style.overflow='visible';
      langLi.style.position='relative';
      var langBtn=langLi.querySelector('a');
      var langDrop=langLi.querySelector('ul');
      if(langDrop){
        langDrop.style.display='none';
        langDrop.style.position='absolute';
        langDrop.style.right='0';
        langDrop.style.top='100%';
        langDrop.style.zIndex='9999';
        langDrop.style.background='#FFFFFF';
        langDrop.style.minWidth='180px';
        langDrop.style.maxHeight='367px';
        langDrop.style.overflowY='scroll';
        langDrop.style.boxShadow='0 4px 20px rgba(123,47,190,0.15)';
        langDrop.style.borderRadius='12px';
        langDrop.style.border='1px solid #EDE8F8';
      }
      if(langBtn){
        langBtn.addEventListener('click',function(e){
          e.preventDefault();
          e.stopPropagation();
          if(langDrop){langDrop.style.display=langDrop.style.display==='block'?'none':'block';}
        });
      }
      document.addEventListener('click',function(){
        if(langDrop){langDrop.style.display='none';}
      });
    }
  },500);
});