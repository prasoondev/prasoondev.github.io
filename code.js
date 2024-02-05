function myFunction() {
    document.body.classList.toggle("light-body");
    document.getElementById("topnavid").classList.toggle("topnav-light");
    document.getElementById("namein").classList.toggle("namein-dark");
    document.getElementById("contentin").classList.toggle("contentin-dark");
    document.getElementById("greeting").classList.toggle("greeting-light");
    document.getElementById("e-flex").classList.toggle("e-flex-light");
    if(document.getElementById("buttontext").innerHTML=="Dark"){
        document.getElementById("imgtopnav").src="images/dog-white.jpg"
        document.getElementById("buttontext").innerHTML="Light";
        document.getElementById("github").src="images/github-light.png";
        document.getElementById("instagram").src="images/insta-light.png";
        document.getElementById("linkedin").src="images/linkedin-light.png";
        document.getElementById("mail").src="images/mail-light.png";
    }
    else{
        document.getElementById("buttontext").innerHTML="Dark";
        document.getElementById("imgtopnav").src="images/dog-dark.jpg";
        document.getElementById("github").src="images/github-dark.png";
        document.getElementById("instagram").src="images/insta-dark.png";
        document.getElementById("linkedin").src="images/linkedin-dark.png";
        document.getElementById("mail").src="images/mail-dark.png";
    }
}
function index() {
    var x = document.getElementById("index");
    document.getElementById("skillbutton").className="inactive";
    document.getElementById("finalbutton").className="active";
    document.getElementById("achievebutton").className="inactive";
    document.getElementById("edubutton").className="inactive";
    document.getElementById("blogbutton").className="inactive";
    document.getElementById("achievements").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("blog").style.display="none";
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
function skills() {
    var x = document.getElementById("skills");
    document.getElementById("skillbutton").className="active";
    document.getElementById("finalbutton").className="inactive";
    document.getElementById("achievebutton").className="inactive";
    document.getElementById("edubutton").className="inactive";
    document.getElementById("blogbutton").className="inactive";
    document.getElementById("achievements").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("index").style.display="none";
    document.getElementById("blog").style.display="none";
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
function achievements() {
    var x = document.getElementById("achievements");
    document.getElementById("skillbutton").className="inactive";
    document.getElementById("finalbutton").className="inactive";
    document.getElementById("achievebutton").className="active";
    document.getElementById("edubutton").className="inactive";
    document.getElementById("blogbutton").className="inactive";
    document.getElementById("skills").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("index").style.display="none";
    document.getElementById("blog").style.display="none";
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
function blogs() {
    var x = document.getElementById("blog");
    document.getElementById("skillbutton").className="inactive";
    document.getElementById("finalbutton").className="inactive";
    document.getElementById("achievebutton").className="inactive";
    document.getElementById("edubutton").className="inactive";
    document.getElementById("blogbutton").className="active";
    document.getElementById("achievements").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("index").style.display="none";
    document.getElementById("skills").style.display="none";
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
function education() {
    var x = document.getElementById("education");
    document.getElementById("skillbutton").className="inactive";
    document.getElementById("finalbutton").className="inactive";
    document.getElementById("achievebutton").className="inactive";
    document.getElementById("edubutton").className="active";
    document.getElementById("blogbutton").className="inactive";
    document.getElementById("achievements").style.display="none";
    document.getElementById("blog").style.display="none";
    document.getElementById("index").style.display="none";
    document.getElementById("skills").style.display="none";
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
function addComment() {
    let commentText = document.getElementById('commentInput').value;
    let listItem = document.createElement('li');
    listItem.textContent = commentText;
    document.getElementById('commentList').appendChild(listItem);
    document.getElementById('commentInput').value = '';
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(commentText);
    localStorage.setItem('comments', JSON.stringify(comments));
}
window.onload = function() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    document.getElementById("likecheck").innerHTML=like;
    likedislike();
    let commentList = document.getElementById('commentList');
    comments.forEach(function(comment) {
        let listItem = document.createElement('li');
        listItem.textContent = comment;
        commentList.appendChild(listItem);
    });
}
function likedislike(){
  if(document.getElementById("likecheck").innerHTML=="liked"){
    document.getElementById("likecheck").innerHTML="disliked";
    document.getElementById("like").src="images/nolike.png";
  }
  else{
    document.getElementById("likecheck").innerHTML="liked";
    document.getElementById("like").src="images/likelike.png";
  }
}
function myFunction2() {
  document.body.classList.toggle("light-body");
  document.getElementById("blogpage").classList.toggle("blogpage-light");
  if(document.getElementById("buttontext2").innerHTML=="Dark"){
      document.getElementById("buttontext2").innerHTML="Light";
  }
  else{
      document.getElementById("buttontext2").innerHTML="Dark";
  }
}