import { product_media_model } from "../model";
import {
  GenericServiceErrorResponse,
  GenericServiceResponse,
} from "../utils/interfaces/responses";
import {
  status200Ok,
  status201Created,
  status400BadRequest,
  status401Unauthorized,
  status404NotFound,
  status500InternalServerError,
} from "../utils/methods/httpResponses";
import { Request, Response } from "express";

const model = product_media_model;
const resourceName = "productMedia";

export async function getProductMedia(
  req: any,
  res: Response<GenericServiceResponse | GenericServiceErrorResponse>
) {
  const { categoryId, productId } = req.params;

  try {
    const productImages = await model.find(
      productId
        ? { productCategoryId: categoryId, globalProductId: productId }
        : { productCategoryId: categoryId }
    );
    if (!productImages) {
      return res
        .status(404)
        .json(status404NotFound(resourceName, "Resource not found"));
    }
    return res.status(200).json(status200Ok(productImages, resourceName));
  } catch (error) {
    return res.status(500).json(status500InternalServerError(`${error}`));
  }
}