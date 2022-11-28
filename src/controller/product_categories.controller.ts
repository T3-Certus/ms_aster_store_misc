import {
  ProductCategoryModel,
} from "../model";
import {
  GenericServiceErrorResponse,
  GenericServiceResponse,
} from "../utils/interfaces/responses";
import {
  status500InternalServerError,
} from "../utils/methods/httpResponses";
import { Request, Response } from "express";
import { getGenericResponseHelper } from "../utils/methods/responseHelpers";

const model = ProductCategoryModel;
const resourceName = "product_categories";

export async function getProductCategories(
  req: any,
  res: Response<GenericServiceResponse | GenericServiceErrorResponse>
) {
  try {
    const categories = await model.findAll({attributes: ["id_product_category", "product_category_name"]})
    getGenericResponseHelper(categories, resourceName, res);

  } catch (error) {
    return res.status(500).json(status500InternalServerError(`${error}`));

  }
}