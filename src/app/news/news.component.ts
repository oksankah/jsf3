import { Component, OnInit } from '@angular/core';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: NewsArticle[] = [
    {
      id: 1,
      title: 'Tech Innovation Reaches New Heights',
      date: 'November 18, 2025',
      excerpt: 'Latest developments in technology are transforming how we work and live.'
    },
    {
      id: 2,
      title: 'Global Markets Show Positive Trends',
      date: 'November 17, 2025',
      excerpt: 'Economic indicators suggest continued growth across major markets.'
    },
    {
      id: 3,
      title: 'Environmental Initiatives Gain Momentum',
      date: 'November 16, 2025',
      excerpt: 'New policies aim to address climate challenges with innovative solutions.'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}