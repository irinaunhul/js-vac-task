let userData = [
    {
        id: 1,
        name: 'John',
        description: 'Backend Developer',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/1.jpg'
    },
    {
        id: 2,
        name: 'Josh',
        description: 'Frontend Developer',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/2.jpg'
    },
    {
        id: 3,
        name: 'Jane',
        description: 'Project Manager',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/3.jpg'
    },
    {
        id: 4,
        name: 'Iness',
        description: 'QA Engineer',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/4.jpg'
    },
    {
        id: 5,
        name: 'Alex',
        description: 'Data Scientist',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/5.jpg'
    },
    {
        id: 6,
        name: 'Nathan',
        description: 'DevOps',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/6.jpg'
    },
    {
        id: 7,
        name: 'James',
        description: 'Designer',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/7.jpg'
    },
    {
        id: 8,
        name: 'Tracy',
        description: 'Business Analyst',
        profilePicture: '/Users/irynaunhul/STUDY/JS/vacation_task/images/8.jpg'
    }
]

root = document.getElementsByClassName('root');
section = document.createElement ('section');
article1 = document.createElement ('article');
img = document.createElement ('img');
img.className = 'image';
fullname = document.createElement ('h1');
fullname.className = 'username';
desc = document.createElement ('h2');
desc.className = 'description';
button = document.createElement ('button');
button.textContent = 'Connect';
section.append (article1);
article1.append(img, fullname, desc, button);

for (var i=0; i<userData.length; i++) {
    let newArticle = article1.cloneNode(true);
    newArticle.getElementsByClassName('username')[0].textContent = userData[i].name;
    newArticle.getElementsByClassName('image')[0].setAttribute('src', userData[i].profilePicture);
    newArticle.addEventListener('click', toggleBorderclas)
    root[0].appendChild(newArticle);
}
    
function toggleBorderclas(event) {
    let element = event.currentTarget;
    document.querySelectorAll('.card-selected').forEach(item => {
        if  (element !== item) {
            item.classList.remove('card-selected')
        }
    });
    element.classList.add('card-selected');
}
