

let comments = [];
let commentAdd = document.querySelector('#comment-add');

loadComments()

commentAdd.addEventListener('click', function(){
    event.preventDefault();
    let commentName = document.querySelector('#comment-name');
    let commentBody = document.querySelector('#comment-body');

    let checkCommentName = commentName.value;
    let checkCommentBody = commentBody.value;

    if( checkCommentName && checkCommentBody){
    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now()/1000),
    } 

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);

    
    saveComments();
    showComments();
}
})

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments(){
    let commentField = document.querySelector('.comment-field');
    let out = '';
    comments.forEach( function(item){
        out += `<p class="comments-date">${timeConverter(item.time)}</p>`;
        out += `<p class="comments-out blue">${item.name}</p>`;
        out += `<p class="comments-out">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}


function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = `${date} ${month} ${year} ${hour} : ${min} : ${sec}`;
    return time;
}

