const ul = document.getElementById('post-list');
const list = document.createDocumentFragment();
const url = 'https://jsonplaceholder.typicode.com/posts';
let curData = [];

// Element input form
const userIdInput = document.getElementById('user-id');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

const renderPostList = (data) => {
  const postListData = [...data];
  // Clear current text
  ul.innerHTML = '';

  postListData.map((postItem) => {
    const li = document.createElement('li');
    const userId = document.createElement('span');
    const title = document.createElement('h1');
    const content = document.createElement('p');

    userId.innerHTML = `${postItem.userId}`;
    title.innerHTML = `${postItem.title}`;
    content.innerHTML = `${postItem.body}`;

    li.appendChild(userId);
    li.appendChild(title);
    li.appendChild(content);
    ul.appendChild(li);
  });
};

const fetchPost = async () => {
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  curData = [...data];
  renderPostList(curData);
};

const createPost = async () => {
  let newPost = {
    title: titleInput.value,
    body: contentInput.value,
    userId: userIdInput.value,
  };

  const post = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((post) => post);

  console.log(post);

  // insert newPost to head array
  curData = [post, ...curData];
  renderPostList(curData);
};
