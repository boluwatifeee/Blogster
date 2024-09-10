import { IPost, PostCategory } from "./types";


const posts: IPost[] = [
  {
    _id: '1',
    title: '10 Best Recipes for Quick Breakfasts',
    content: 'Start your day with these quick and easy breakfast recipes...',
    likes: 123,
    date_added: "2023-09-01T10:00:00Z",
    category: PostCategory.FOOD,
    posted_by: 'John Doe',
  },
  {
    _id: '2',
    title: 'Fashion Trends to Follow in 2024',
    content: 'Stay ahead of the curve with these fashion trends...',
    likes: 245,
    date_added: "2023-09-01T10:00:00Z", // Example timestamp (September 3, 2023)
    category: PostCategory.FASHION,
    posted_by: 'Jane Smith',
  },
  {
    _id: '3',
    title: 'Top 5 Travel Destinations for 2024',
    content: 'Explore the world with these must-visit travel destinations...',
    likes: 342,
    date_added: "2023-09-01T10:00:00Z",  // Example timestamp (September 4, 2023)
    category: PostCategory.TRAVEL,
    posted_by: 'Emily Brown',
  },
  {
    _id: '4',
    title: 'How to Write Engaging Blog Posts',
    content: 'Learn the art of writing blog posts that captivate your audience...',
    likes: 198,
    date_added: "2023-09-01T10:00:00Z", // Example timestamp (September 5, 2023)
    category: PostCategory.WRITING,
    posted_by: 'Michael Johnson',
  },
  {
    _id: '5',
    title: 'Healthy Lifestyle Tips for Busy People',
    content: 'Incorporate these healthy habits into your daily routine...',
    likes: 276,
    date_added: "2023-09-01T10:00:00Z", // Example timestamp (September 6, 2023)
    category: PostCategory.LIFESTYLE,
    posted_by: 'Alice Davis',
  },
  {
    _id: '6',
    title: 'The Benefits of Learning New Skills',
    content: 'Discover why continuous learning is key to personal growth...',
    likes: 329,
    date_added: "2023-09-01T10:00:00Z", // Example timestamp (September 7, 2023)
    category: PostCategory.EDUCATIVE,
    posted_by: 'Chris Wilson',
  },
  {
    _id: '7',
    title: 'Miscellaneous Thoughts and Ideas',
    content: 'A collection of random thoughts and ideas...',
    likes: 99,
    date_added: "2023-09-01T10:00:00Z" , // Example timestamp (September 8, 2023)
    category: PostCategory.OTHERS,
    posted_by: 'Robert Miller',
  }
];

export default posts;
