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
  newPost.addEventListener('click', saveData = () =>{
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

<<<<<<< HEAD
const userPorfile = () => {
  firebase.auth().onAuthStateChanged(checkStatusUser = (user) => {
    if (user) {
      let runName = user.displayName;
      let runEmail = user.email;
      let runPhoto = user.photoURL || 'https://sss.ukzn.ac.za/wp-content/uploads/2017/12/profile-placeholder.png';
      userName.textContent = runName;
      userEmail.textContent = runEmail;
      profileImage.setAttribute('src', runPhoto + '?type=large');
=======
const counterLikes = () => {
  document.getElementById('like').innerHTML= count++;
}



const editTask = () => {
  const listItem = event.target.parentNode;
  const keyListItem = event.target.parentNode.dataset.keytask;
  const editInput = listItem.querySelector('input[type=text]');
  const label = listItem.querySelector('label');
  const editButton = event.target;
  const containsClass = listItem.classList.contains('editMode');

  const refTaskToEdit = refTask.child(keyListItem);
  refTaskToEdit.once('value', (snapshot) => {
    const data = snapshot.val();

    if (containsClass) {
      console.log(containsClass, listItem);
      refTaskToEdit.update({
        contenidoTask: editInput.value
      });
      editButton.innerHTML = 'Edit ';
      listItem.classList.remove('editMode');
      editInput.value = '';
    } else {
      console.log(containsClass, listItem);
      editButton.innerHTML = 'Save ';
      editInput.value = data.contenidoTask;
      listItem.classList.add('editMode');
>>>>>>> 5ff907ebe8abd67eaeaa8d35e9d69927d281df6d
    }
    postByUser();
  });

<<<<<<< HEAD
  firebase.database().ref('Mensajes')
    .on('child_added', (userKey)=>{
      wallPost.innerHTML +=
    `<div id="wallPost" class="card publication">
      <div  class="card-body">
        <p>${userKey.val().userName}</p>
        <p>${userKey.val().post}</p>
        <div class="text-right">
        <a  class="btn btn-outline-info" onclick="editPost"><i class="fas fa-thumbs-up"></i></a>
        <a  class="btn btn-outline-secondary" onclick="editPost"><i class="fas fa-edit"></i></a>
        <a class="btn btn-outline-danger" onclick="deletPost"><i class="fas fa-trash-alt"></i></a>
        </div>
      </div>
    </div>`;
    });
=======
const deleteTask = () => {
  const keyListItem = event.target.parentNode.dataset.keytask;
  const refTaskToDelete = refTask.child(keyListItem);
  refTaskToDelete.remove();
  const deleteSure = confirm("Seguro lo quieres borrar");
  if (deleteSure == true)
   refTaskToDelete();
  else
  (deleteSure ==false )
  alert("Bueno,vale!");
};
>>>>>>> 5ff907ebe8abd67eaeaa8d35e9d69927d281df6d

};



window.onload = function() {
  postCommit();
  userPorfile();
};
