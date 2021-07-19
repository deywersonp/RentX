import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private listCategoriesRepository: ICategoriesRepository) { }

  execute(): Category[] {
    const all = this.listCategoriesRepository.list();

    return all;
  }
}

export { ListCategoriesUseCase };
