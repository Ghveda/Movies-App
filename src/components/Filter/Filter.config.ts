export interface IFilter {
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
  category: string | undefined;
}
