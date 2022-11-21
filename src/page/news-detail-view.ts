import View from '../core/view';
import { NewsDetailApi } from '../core/api';
import {NewsDetail, NewsComment} from '../types/index';
import {CONTENT_URL} from '../config';

export default class NewsDetailView extends View {
    constructor(containerId: string) {
    
        let template =  /* html */ `
            <div class="bg-gray-600 min-h-screen pb-8">
                <div class="bg-white text-xl">
                    <div class="mx-auto px-4">
                        <div class="flex justify-between items-center py-6">
                            <div class="flex justify-start">
                                <h1 class="font-extrabold text-xl">NEWS</h1>
                            </div>
                            <div class="items-center justify-end">
                                <a href="#/page/{{__currentPage__}}" class="text-gray-500">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-full m-6 p-4 border rounded-xl bg-white">
                    <h1>{{__title__}}</h1>
                    <div class="text-gray-400 h-20">
                       {{__content__}}
                    </div>
        
                    {{__comment__}}
                </div>
            </div>
        `;

        super(containerId, template);
    }

    render() {
        const id = location.hash.substring(7);
        const api = new NewsDetailApi(CONTENT_URL.replace('@id', id));
        const newsDetail: NewsDetail = api.getData();
    
        for (let i = 0; i < window.store.feeds.length; i += 1 ){
            if (window.store.feeds[i].id === Number(id)){
                window.store.feeds[i].read = true;
                break;
            }
        }

        this.setTemplate('comment', this.makeComment(newsDetail.comments));
        this.setTemplate('currentPage', String(window.store.currentPage));
        this.setTemplate('title', newsDetail.title);
        this.setTemplate('content', newsDetail.content);
        this.updateView();
    }

    private makeComment(comments:NewsComment[]) :string {
        const commentString = [];
    
        for (let i = 0; i< comments.length; i += 1) {
            const comment: NewsComment = comments[i];
    
            this.addHtml( /* html */`
                <div class="mt-4 pl-${comment.level * 5}">
                    <div class="text-gray-400">
                        <i class="fa fa-sort-up mr-2"></i>
                        <strong>${comment.user}</strong> ${comment.time_ago}
                    </div>
                    <p class="text-gray-700">${comment.content}</p>
                </div>
            `);
    
            if (comment.comments.length > 0){
                this.addHtml(this.makeComment(comment.comments));
            }
        }
        return  this.getHtml();
    }
    
}
