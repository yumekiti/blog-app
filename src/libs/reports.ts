import client from "./client"
import { Reports } from "../interfaces/reports"

// 取得
export const getReports = (): Promise<Reports> => {
  return client.get("/")
}

// モック
export const getReportsMock = (): Reports => {
  return {
    reports: [
      {
        id: 1,
        img: 'https://source.unsplash.com/random/100x100',
        title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
        category: 'カテゴリー',
        date: '2021/10/10',
      },
      {
        id: 2,
        img: 'https://source.unsplash.com/random/100x100',
        title: '記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
        category: 'カテゴリー',
        date: '2021/10/10',
      },
      {
        id: 3,
        img: 'https://source.unsplash.com/random/100x100',
        title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
        category: 'カテゴリー',
        date: '2021/10/10',
      },
      {
        id: 4,
        img: 'https://source.unsplash.com/random/100x100',
        title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
        category: 'カテゴリー',
        date: '2021/10/10',
      },
      {
        id: 5,
        img: 'https://source.unsplash.com/random/100x100',
        title: '記事タイトル記事タイトル記事タイトルほげほげほげほげほげほげほげ',
        category: 'カテゴリー',
        date: '2021/10/10',
      },
    ]
  };
}