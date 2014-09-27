/* CHANGE LOGS
1.3 (9/27/2014)  : removed return statement that was causing error on newer versions of Chrome.
1.2 (1/27/2014)  : made it support Youtube 'red bar' feature (SPF).
		   added a space before the button.
1.1 (08/18/2013) : removed pauseVideo option.
1.0 (07/21/2013) : created.

*/

  var btn_id = 'stop-download';

    function checkButton() {
        var button = document.getElementById(btn_id);
        
        if (button == null) {
            addButton();
        }
    }

function addButton() {
    var cont = document.getElementById('watch7-user-header');
    var btn = document.createElement('button');
    lastContainerChild = cont.lastElementChild;
    btn.id = 'stop-download';
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', 'Stop Youtube Download');
    btn.setAttribute('data-tooltip', 'Stop Youtube Download');
    btn.setAttribute('data-tooltip-title', 'Stop Youtube Download');
    btn.setAttribute('class', 'yt-subscription-button yt-uix-button yt-uix-button-subscribe-branded');
    btn.style.marginLeft = '10px';
    var txt = document.createElement('span');
    txt.setAttribute('id','stpdownload');      
    txt.appendChild(document.createTextNode('Stop Video'));
    txt.setAttribute('class', 'yt-uix-button-content');
    btn.appendChild(txt);
    cont.appendChild(btn);
   btn.addEventListener('click',stopvidload, true);
}


  function stopvidload(){
	var p;
    document.getElementById("movie_player-flash") ? p = document.getElementById("movie_player-flash") : null;
    document.getElementById("movie_player") ? p = document.getElementById("movie_player") : null;
	p.stopVideo();

}

  

    window.setInterval(checkButton, 1000);

