interface Store {
    currentPage: number;
    feeds: NewsFeed[];
}

interface News {
    readonly id: number;
    readonly title: string;
    readonly time_ago: string;
    readonly url: string;
    readonly user: string;
    readonly content: string;
}

interface NewsFeed extends News {
    readonly comments_count: number;
    readonly points: number;
    read?: boolean;
}

interface NewsDetail extends News {
    readonly comments: NewsComment[];
}

interface NewsComment extends News {
    readonly comments : NewsComment[];
    readonly level: number;
}

const container : HTMLElement | null = document.getElementById('root');
let ajax : XMLHttpRequest = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL= 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store: Store = {
    currentPage: 1,
    feeds: []
}

function applyApiMixin(targetClass: any, baseClass: any[]): void {
    baseClass.forEach(baseClass=> {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(propertyName => {
            const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, propertyName);

            if (descriptor) {
                Object.defineProperty(targetClass.prototype, propertyName, descriptor);
            }
        })
    })
}

class Api {
    protected getRequest<AjaxResponse>(url: string): AjaxResponse {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url , false);
        ajax.send();
    
        return JSON.parse(ajax.response);
    }
}

class NewsFeedApi {
    getData() : NewsFeed[] {
        return this.getRequest<NewsFeed[]>(NEWS_URL);
    }
}

class NewsDetailApi {
    getData(id: string) : NewsDetail {
        return this.getRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
    }
}


function getData<AjaxResponse>(url : string) : AjaxResponse {
    ajax.open('GET', url , false);
    ajax.send();

    return JSON.parse(ajax.response);
}

interface NewsFeedApi extends Api{};
interface NewsDetailApi extends Api{};
applyApiMixin(NewsFeedApi, [Api]);
applyApiMixin(NewsDetailApi, [Api]);

function makeFeeds(feeds : NewsFeed[]): NewsFeed[] {
    for (let i = 0; i < feeds.length; i+=1) {
        feeds[i].read = false;
    }

    return feeds;
}

function updateView (html : string): void {
    if (container) {
        container.innerHTML = html;
    } else  {
        console.error('안됨');
    }
}

function newsFeed(): void {
    const api = new NewsFeedApi();
    let newsFeed: NewsFeed[] = store.feeds;
    let newsList = [];

    let template = /* html */`
        <div class="bg-gray-600 min-h-screen">
            <div class="bg-white text-xl">
                <div class="mx-auto px-4">
                    <div class="flex justify-between items-center py-6">
                        <div class="flex justify-start">
                            <h1 class="font-extrabold text-xl">NEWS</h1>
                        </div>
                        <div class="items-center justify-end">
                            <a href="#/page/{{__prev_page__}}" class="text-gray-500">이전</a>
                            <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">다음</a>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="p-4 text-2xl text-gray-700">
                {{__news_feed__}}
            </ul>
        </div>
    `;

    if (newsFeed.length === 0) {
        newsFeed = store.feeds = makeFeeds(api.getData());
    }
    
    for(let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i += 1) {
        newsList.push( /* html */`

        <div class="mt-6 p-6 ${newsFeed[i].read ? ' bg-red-500' : 'bg-white'} rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
            <div class="flex">
                <div class="flex-auto">
                    <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}</a>
                </div>
                <div class="text-center text-sm">
                    <div class=""w-10 text-white bg-green-300 rounded-lg px-0 py-2">${newsFeed[i].comments_count}</div>
                </div>
            </div>
            <div class="flex mt-3">
                <div class="grid grid-cols-3 text-sm text-gray-500">
                    <div><i class="fas fa-user mr-1"></i>${newsFeed[i].user}</div>
                    <div><i class="fas fa-heart mr-1"></i>${newsFeed[i].points}</div>
                    <div><i class="fas fa-clock mr-1"></i>${newsFeed[i].time_ago}</div>
                </div>
            </div>
        </div>
        `);
    }

    template = template.replace('{{__news_feed__}}', newsList.join(''));
    template = template.replace('{{__prev_page__}}', String(store.currentPage > 1 ? store.currentPage - 1 : 1));
    template = template.replace('{{__next_page__}}', String(store.currentPage ? store.currentPage + 1 : store.currentPage));

    updateView(template);
}

function newsDetail(): void{
    const id = location.hash.substring(7);
    const api = new NewsDetailApi();
    const newsContent: NewsDetail = api.getData(id);

    let template =  /* html */`
        <div class="bg-gray-600 min-h-screen pb-8">
            <div class="bg-white text-xl">
                <div class="mx-auto px-4">
                    <div class="flex justify-between items-center py-6">
                        <div class="flex justify-start">
                            <h1 class="font-extrabold text-xl">NEWS</h1>
                        </div>
                        <div class="items-center justify-end">
                            <a href="#/page/${store.currentPage}" class="text-gray-500">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-full m-6 p-4 border rounded-xl bg-white">
                <h1>${newsContent.title}</h1>
                <div class="text-gray-400 h-20">
                    ${newsContent.content}
                </div>
    
                {{__comment__}}
            </div>
        </div>
    `;

    for (let i = 0; i < store.feeds.length; i += 1 ){
        if (store.feeds[i].id === Number(id)){
            store.feeds[i].read = true;
            break;
        }
    }

    updateView(template.replace('{{__comment__}}', makeComment(newsContent.comments)));

}

function makeComment(comments:NewsComment[]) :string {
    const commentString = [];

    for (let i = 0; i< comments.length; i += 1) {
        const comment: NewsComment = comments[i];

        commentString.push( /* html */`
            <div class="mt-4 pl-${comment.level * 5}">
                <div class="text-gray-400">
                    <i class="fa fa-sort-up mr-2"></i>
                    <strong>${comment.user}</strong> ${comment.time_ago}
                </div>
                <p class="text-gray-700">${comment.content}</p>
            </div>
        `);

        if (comment.comments.length > 0){
            commentString.push(makeComment(comment.comments));
        }
    }
    return  commentString.join('');
}

function router() : void{
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed()
    }  else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = Number(routePath.substring(7));
        newsFeed();
    }else {
        newsDetail();
    }
}

window.addEventListener('hashchange', router);

router();
