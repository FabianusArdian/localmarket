```markdown
# Local Food Market

A full-stack web application for connecting local food producers with consumers.

## Prerequisites

- Python 3.12+
- Node.js 18+
- MySQL 8.0+

## Quick Start

1. Clone the repository
2. Copy and configure environment files:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```
3. Install dependencies:
```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend
cd ../frontend
npm install
```

4. Initialize database:
```bash
cd backend
python init_db.py
```

5. Start development servers:
```bash
# Make script executable
chmod +x dev.sh
# Run both servers
./dev.sh
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/docs

## Project Structure

```
.
├── backend/
│   ├── app/
│   │   ├── config/         # Configuration files
│   │   ├── models/         # Database models
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── database/           # SQL files
│   └── tests/              # Backend tests
│
└── frontend/
    ├── app/                # Next.js pages
    ├── components/         # React components
    ├── lib/
    │   ├── config/        # Frontend configuration
    │   ├── hooks/         # Custom React hooks
    │   ├── services/      # API services
    │   ├── types/         # TypeScript types
    │   └── utils/         # Helper functions
    └── public/            # Static assets
```

## Development

- Format code:
  ```bash
  # Backend
  cd backend
  black .
  
  # Frontend
  cd frontend
  npm run format
  ```

- Lint code:
  ```bash
  # Backend
  cd backend
  pylint app
  
  # Frontend
  cd frontend
  npm run lint
  ```

- Run tests:
  ```bash
  # Backend
  cd backend
  pytest
  
  # Frontend
  cd frontend
  npm test
  ```

## API Documentation

- Interactive API docs: http://localhost:5000/docs
- OpenAPI spec: http://localhost:5000/apispec.json

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```#   l o c a l m a r k e t  
 