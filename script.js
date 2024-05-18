const api = 'https://coding-week-2024-api.onrender.com/api/data';
    fetch_data();

async function fetch_data() {
    const res = await fetch(api);
    const data = await res.json();
    in_sidebar(data);

}

function in_sidebar(data){
    const new_news = document.getElementById('scroll_bar');
    const sec1 = document.getElementById('sec1');
    const sub_sec1 = document.getElementById('sub_sec1');
    data.forEach((news,index) => {
        if(index>=4){
            const new_newsss = document.createElement('div');
            new_newsss.classList.add('box6');
            new_newsss.innerHTML = 
            `<img class = "ph1" src="${news.image}" ">
                <a class="boxtext">${news.headline}</a>
                <i class="fa-regular fa-calendar"></i>
                <a class = "texts1">${news.date}</a>
            `
            new_newsss.addEventListener('click', ()=> pop_uppp(news));
            new_news.appendChild(new_newsss)
        }
        else if(index === 1 || index === 0 )
        {
            const new_newsss = document.createElement('div');
            new_newsss.classList.add(`box${index+1}`);
            new_newsss.style.backgroundImage = `url(${news.image})`;
            new_newsss.innerHTML = 
            `<h6>
                <span>${news.type}</span>
                <span>Featured</span>
            </h6>
            <h4>${news.headline}</h4>
            <h5>${news.author}    <i class="fa-regular fa-calendar"></i>
            <a class = "texts1">${news.date}</a></h5>`
            new_newsss.addEventListener('click', ()=> pop_uppp(news));

            sec1.appendChild(new_newsss)
        }
        else
        {
            const new_newsss = document.createElement('div');
            new_newsss.classList.add(`box${index+1}`);
            new_newsss.style.backgroundImage = `url(${news.image})`;
            new_newsss.innerHTML =
            `<h6>
            <span>${news.type}</span>
            <span>Featured</span>
            </h6>
            <h4>${news.headline}</h4>
            <h5>${news.author}    <i class="fa-regular fa-calendar"></i>
            <a class = "texts1">${news.date}</a></h5>`
            new_newsss.addEventListener('click', ()=> pop_uppp(news));
            sub_sec1.appendChild(new_newsss)
        }
    }

);
}
function pop_uppp(news) {
    const popup = document.getElementById('popup');
    const to_add = document.getElementById('pop_up');
    to_add.innerHTML = `
        <span class="to_close" id="button" >&times;</span>
        <p>${news.content}</p>
    `;
    popup.style.display = 'block';
    document.getElementById('button').addEventListener('click', () => {
        popup.style.display = 'none';
    });
}