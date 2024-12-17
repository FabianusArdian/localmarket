from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from ..models.user import User
from ..utils.auth import generate_token
from .. import db
import uuid

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@bp.route('/register', methods=['POST'])
def register():
    """
    Register a new user
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: body
        schema:
          type: object
          required:
            - name
            - email
            - password
            - role
          properties:
            name:
              type: string
              example: John Doe
            email:
              type: string
              example: john@example.com
            password:
              type: string
              example: Password123
            role:
              type: string
              enum: [consumer, seller]
              example: consumer
    responses:
      201:
        description: User registered successfully
      400:
        description: Invalid input or email already exists
    """
    data = request.get_json()

    # Validate required fields
    required_fields = ['name', 'email', 'password', 'role']
    if not all(field in data for field in required_fields):
        return jsonify({'message': 'Missing required fields'}), 400

    # Check if user already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already registered'}), 400

    # Create new user
    user = User(
        id=str(uuid.uuid4()),
        name=data['name'],
        email=data['email'],
        password=generate_password_hash(data['password']),
        role=data['role']
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        'message': 'Registration successful',
        'user': {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role
        }
    }), 201

@bp.route('/login', methods=['POST'])
def login():
    """
    Login user
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: body
        schema:
          type: object
          required:
            - email
            - password
            - role
          properties:
            email:
              type: string
              example: john@example.com
            password:
              type: string
              example: Password123
            role:
              type: string
              enum: [consumer, seller]
              example: consumer
    responses:
      200:
        description: Login successful
      401:
        description: Invalid credentials
    """
    data = request.get_json()

    # Validate required fields
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'message': 'Missing email or password'}), 400

    # Find user by email
    user = User.query.filter_by(email=data['email']).first()

    if not user:
        return jsonify({'message': 'Invalid email or password'}), 401

    # Verify role
    if user.role != data.get('role'):
        return jsonify({'message': 'Invalid role for this user'}), 401

    # Check password
    if not check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Invalid email or password'}), 401

    # Generate token
    token = generate_token(user.id)

    return jsonify({
        'token': token,
        'user': {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role
        }
    }), 200

@bp.route('/logout', methods=['POST'])
def logout():
    """
    Logout user
    ---
    tags:
      - Authentication
    responses:
      200:
        description: Logout successful
    """
    # Client should remove token
    return jsonify({'message': 'Logout successful'}), 200
