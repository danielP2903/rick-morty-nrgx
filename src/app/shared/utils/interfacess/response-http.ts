import ICharacter from '../../../views/modules/interfaces/characters-model';
export interface IResponseHttp {
  info: IInfo;
  results: ICharacter[]
}

interface IInfo {
  count: number;
  next: string;
  pages: number;
  prev: null
}
export type IResponseById = Pick<ICharacter,
                                | 'created'
                                | 'episode'
                                | 'gender'
                                | 'id'
                                | 'image'
                                | 'location'
                                | 'name'
                                | 'origin'
                                | 'species'
                                | 'status'
                                | 'type'
                                | 'url'>
