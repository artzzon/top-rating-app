import { SortEnum } from "@/components/Sort/Sort.props";
import { ProductModel } from "@/interfaces/product.interface";
import { stat } from "fs";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Price:
      return {
        products: state.products.sort((a, b) => {
          return a.price - b.price;
        }),
        sort: SortEnum.Price,
      };
    case SortEnum.Rating:
      return {
        products: state.products.sort((a, b) => {
          return b.initialRating - a.initialRating;
        }),
        sort: SortEnum.Rating,
      };
    default:
      throw new Error("Неверный тип сортировки");
  }
};
