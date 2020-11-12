

//URL à récupérer depuis un input par exemple
var url = 'https://www.youtube.com/watch?v=IBdQ4-sCdZw';

//On récupère les valeurs de l'URL dans un array
var match = url.match(/(?:https?:/{2})?(?:w{3}.)?youtu(?:be)?.(?:com|be)(?:/watch?v=|/)([^s&]+)/);

//On récupère l'identifiant de la vidéo
video_id = match[1];

//On récupère les datas depuis l'API Youtube
$.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBdMuJQlbzDhJs0Ujhvzx2ucsO30lcP0OQ', { id: video_id, part: 'snippet' }, function(result) {

 //on vérifie que la vidéo existe sur Youtube grâce à l'identifiant
 if(result.items[0].id) {
 
 console.log('LA VIDEO EXISTE :-)');
 console.log(result.items[0]);

 } else {

 console.log('LA VIDEO N'EXISTE PAS :-(');

 }

}, 'jsonp');

