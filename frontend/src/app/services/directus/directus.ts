import { Injectable } from '@angular/core';
import {
  createDirectus,
  rest,
  readItems,
  readItem,
  createItem,
  updateItem,
  deleteItem
} from '@directus/sdk';
import { CommonDto } from '../../dtos/common-dto';
import { ArticleDto } from '../../dtos/article-dto';
import { environment } from '../../../environments/environment';

const directus = createDirectus(environment.apiUrl).with(rest());

@Injectable({
  providedIn: 'root'
})
export class Directus {

  async getCommonData(): Promise<CommonDto> {
    const response = await directus.request(readItems('common', {}));
    const data = response as unknown as CommonDto[];
    return data[0];
  }

  async getArticles(): Promise<ArticleDto[]> {
    const filter = {filter: {status: {_eq: 'published'}}};
    const response = await directus.request(readItems('articles', filter));
    return response as unknown as ArticleDto[];
  }

  async getArticle(id: string | number): Promise<ArticleDto> {
    const response = await directus.request(readItem('articles', id));
    return response as unknown as ArticleDto;
  }

}
