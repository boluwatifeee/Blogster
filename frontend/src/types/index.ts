export enum PostCategory {
    FOOD = "food",
    FASHION = "fashion",
    TRAVEL = "travel",
    EDUCATIVE= "educative",
    LIFESTYLE = "lifestyle",
    WRITING = "writing",
    OTHERS = "others"
}

export interface IPost {
    _id: string;
    title: string;
    content: string;
    likes: number;
    date_added: string;
    category: PostCategory;
    posted_by: string;
}