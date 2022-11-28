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
import { requestGetParamsValidator } from "../utils/methods";

const model = ProductCategoryModel;
const resourceName = "product_categories";

export async function getProductCategories(
  req: any,
  res: Response<GenericServiceResponse | GenericServiceErrorResponse>
) {
  const query = req.query
  const attributes = ["id_product_category", "product_category_name"]

  try {
    const categories = await model.findAll({attributes: ["id_product_category", "product_category_name"], where: requestGetParamsValidator(query, attributes)})
    getGenericResponseHelper(categories, resourceName, res);

  } catch (error) {
    return res.status(500).json(status500InternalServerError(`${error}`));

  }
}