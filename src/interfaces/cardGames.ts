export interface IMemoryCard {
  expr: string;
  id: string;
  color: string;
};

export interface ICard {
  term: string;
  definition: string;
  id: string;
  studyset_id?: number
}