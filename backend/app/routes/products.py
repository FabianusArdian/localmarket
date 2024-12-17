
from flask import Blueprint, request, jsonify
from ..services.product_service import ProductService
from ..utils.security import token_required

bp = Blueprint('products', __name__, url_prefix='/api/products')
product_service = ProductService()

@bp.route('', methods=['GET'])
def get_products():
    """
    Get all products
    ---
    tags:
      - Products
    parameters:
      - name: category
        in: query
        type: string
        required: false
      - name: type
        in: query
        type: string
        required: false
      - name: min_price
        in: query
        type: number
        required: false
      - name: max_price
        in: query
        type: number
        required: false
      - name: min_rating
        in: query
        type: number
        required: false
      - name: search
        in: query
        type: string
        required: false
    responses:
      200:
        description: List of products
        schema:
          type: array
          items:
            $ref: '#/definitions/Product'
    """
    filters = {
        'category': request.args.get('category'),
        'type': request.args.get('type'),
        'min_price': request.args.get('min_price'),
        'max_price': request.args.get('max_price'),
        'min_rating': request.args.get('min_rating'),
        'search': request.args.get('search')
    }
    products = product_service.get_products(filters)
    return jsonify(products), 200

@bp.route('/<product_id>', methods=['GET'])
def get_product(product_id):
    """
    Get a specific product
    ---
    tags:
      - Products
    parameters:
      - name: product_id
        in: path
        type: string
        required: true
    responses:
      200:
        description: Product details
        schema:
          $ref: '#/definitions/Product'
      404:
        description: Product not found
    """
    product = product_service.get_product_by_id(product_id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify(product), 200

@bp.route('', methods=['POST'])
@token_required
def create_product(current_user):
    """
    Create a new product (Seller only)
    ---
    tags:
      - Products
    security:
      - Bearer: []
    parameters:
      - in: body
        name: body
        schema:
          $ref: '#/definitions/ProductInput'
    responses:
      201:
        description: Product created successfully
        schema:
          $ref: '#/definitions/Product'
      403:
        description: Only sellers can create products
      400:
        description: Invalid input
    """
    if current_user.role != 'seller':
        return jsonify({'error': 'Only sellers can create products'}), 403
        
    data = request.get_json()
    try:
        product = product_service.create_product(current_user.id, data)
        return jsonify(product), 201
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

@bp.route('/<product_id>', methods=['PUT'])
@token_required
def update_product(current_user, product_id):
    """
    Update a product (Seller only)
    ---
    tags:
      - Products
    security:
      - Bearer: []
    parameters:
      - name: product_id
        in: path
        type: string
        required: true
      - in: body
        name: body
        schema:
          $ref: '#/definitions/ProductInput'
    responses:
      200:
        description: Product updated successfully
        schema:
          $ref: '#/definitions/Product'
      403:
        description: Only sellers can update products
      404:
        description: Product not found
      400:
        description: Invalid input
    """
    if current_user.role != 'seller':
        return jsonify({'error': 'Only sellers can update products'}), 403
        
    data = request.get_json()
    try:
        product = product_service.update_product(current_user.id, product_id, data)
        return jsonify(product), 200
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

# Add Swagger definitions at the bottom of the file
"""
definitions:
  Product:
    type: object
    properties:
      id:
        type: string
      name:
        type: string
      description:
        type: string
      price:
        type: number
      stock:
        type: integer
      category:
        type: string
      type:
        type: string
        enum: [standard, premium]
      images:
        type: array
        items:
          type: string
      rating:
        type: number
      sellerId:
        type: string
      createdAt:
        type: string
        format: date-time
  
  ProductInput:
    type: object
    required:
      - name
      - description
      - price
      - stock
      - category
      - type
    properties:
      name:
        type: string
        example: "Organic Vegetable Box"
      description:
        type: string
        example: "Fresh organic vegetables from local farms"
      price:
        type: number
        example: 150000
      stock:
        type: integer
        example: 50
      category:
        type: string
        example: "Fresh Produce"
      type:
        type: string
        enum: [standard, premium]
        example: "premium"
      images:
        type: array
        items:
          type: string
        example: ["https://example.com/image.jpg"]
"""
