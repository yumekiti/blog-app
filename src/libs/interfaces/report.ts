import { CategoryRelation } from './category';
import { TagRelation } from './tag';

export default interface Report {
  data: {
    id: number;
    attributes: {
      img: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
          };
        };
      };
      title: string;
      body: string;
      category: CategoryRelation;
      tags: TagRelation;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
