let inputTxt = document.getElementById("newTxt");
let newPost = document.getElementById("newPost");
let wallPost = document.getElementById("wallPost");
let deletePost = document.getElementById("deletePost");
let editPost = document.getElementById("editPost");


let sesionUser = document.getElementById("sesionUser");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let profileImage = document.getElementById("photo-user");


let runUser;

const postCommit = () => {
    newPost.addEventListener('click', saveData = () => {
        const actUser = firebase.auth().currentUser;
        const postTxt = inputTxt.value;
        if (postTxt == '') {

        } else {
            const userKey = firebase.database().ref().child('Mensajes').push().key;
            let update = {
                user: actUser.uid,
                userName: actUser.displayName,
                post: postTxt
            };
            firebase.database().ref(`Mensajes/${userKey}`).set(update);
            document.getElementById('newTxt').value = '';
        }
    });
};

const postByUser = (user) => {
    const confirmUser = firebase.auth().currentUser;
    runUser = confirmUser.displayName;
    sesionUser.innerHTML = 'Hola' + ' ' + runUser;
};

const userPorfile = () => {
    firebase.auth().onAuthStateChanged(checkStatusUser = (user) => {
        if (user) {
            let runName = user.displayName;
            let runEmail = user.email;
            let runPhoto = user.photoURL || 'https://sss.ukzn.ac.za/wp-content/uploads/2017/12/profile-placeholder.png';
            userName.textContent = runName;
            userEmail.textContent = runEmail;
            profileImage.setAttribute('src', runPhoto + '?type=large');
        }
        postByUser();
    });

    firebase.database().ref('Mensajes')
        .on('child_added', (userKey) => {


            wallPost.innerHTML +=
                `<div id="wallPost" class="card publication">
      <div  class="card-body">
        <p>${userKey.val().userName}</p>
        <p>${userKey.val().post}</p>
        <div class="text-right">
        <a  class="btn btn-outline-info" onclick="likePost"><i class="fas fa-thumbs-up"></i></a>
        <a  class="btn btn-outline-secondary" onclick="editPost"><i class="fas fa-edit"></i></a>
        <a class="btn btn-outline-danger" onclick="deletPost"><i class="fas fa-trash-alt"></i></a>
        </div>
      </div>
    </div>`;
        });

};



window.onload = function() {
    postCommit();
    userPorfile();
};
