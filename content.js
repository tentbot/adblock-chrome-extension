(function(){
    let paragraphs = document.getElementsByTagName('p');
    for (p of paragraphs) {
       p.innerHTML = '';
    }
    let head1 = document.getElementsByTagName('h1');
    for (h of head1) {
       h.innerHTML = '';
    }
    let head2 = document.getElementsByTagName('h2');
    for (h of head2) {
       h.innerHTML = '';
    }
    let head3 = document.getElementsByTagName('h3');
    for (h of head3) {
       h.innerHTML = '';
    }
    let head4 = document.getElementsByTagName('h4');
    for (h of head4) {
       h.innerHTML = '';
    }
    let head5 = document.getElementsByTagName('h5');
    for (h of head5) {
       h.innerHTML = '';
    }
    let images = document.getElementsByTagName('omg');
    for (i of images) {
       i.src = '';
       i.width = '0';
    }
    let body = document.body
 })();