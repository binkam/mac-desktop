/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var content = "<input type='text' name='login'/><br/>\n\
               <input type='password' name='pass'/><br>\n\
               <input type='button' value='Login'/>";
var data = {
     title:"Programmatic Window",
     windowId:"wnd1",
     icon:"",
     content:content
 };

 function openWindow(d){
     //alert('<div id="'+d.windowId+'" class="window"><h1 class="titleInside">'+d.title+'</h1><div class="container"><div class="container-inside">'+d.content+'</div></div></div>');
      var icons = '<nav class="control-window">'+
                    '<a href="#'+d.windowId+'" class="close" data-rel="close">close</a>'+
                    '<a href="#" class="minimize">minimize</a>'+
                    '<a href="#" class="deactivate">deactivate</a>'+
                '</nav>';
   $("#page").append('<div id="'+d.windowId+'" class="window windows-vis">\n\
                        <h1 class="titleInside">'+d.title+'</h1>\n\
                           '+icons+' <div class="container"><div class="container-inside">'+d.content+'</div>\n\
                            </div>\n\
                      </div>');
          
 }
 $(document).ready(function(){
     //alert("Test");
     openWindow(data);
//     $(".window").each(function(){
//         $(this).prepend("<h1 class='titleInside'>"+$(this).attr("title")+"</h1>");
//     });
     //alert(windows.length);
//     for(var i=0;i<windows.length;i++){
//         if(windows[i].title){
//             var icons = '<nav class="control-window">'+
//                    '<a href="#finder1" class="close" data-rel="close">close</a>'+
//                    '<a href="#" class="minimize">minimize</a>'+
//                    '<a href="#" class="deactivate">deactivate</a>'+
//                '</nav>';
//             //alert("<h1 class='titleInside'>"+windows[i].title+"</h1>")
//             //windows[i].append(icons);
//             alert(windows[i].val);
//         }
//     }
     //<h1 class="titleInside">About Finder</h1>
     
 });
 

