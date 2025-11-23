# My Café API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### Menu Items

#### Get All Menu Items
```
GET /api/menu
```

**Query Parameters:**
- `category` - Filter by category name (string)
- `featured` - Filter featured items (true/false)
- `available` - Filter available items (true/false)
- `search` - Search in name and description (string)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 12)

**Example:**
```
GET /api/menu?category=coffee&featured=true&page=1&limit=10
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "total": 25,
  "page": 1,
  "pages": 3,
  "data": [...]
}
```

#### Get Single Menu Item
```
GET /api/menu/:id
```

#### Create Menu Item
```
POST /api/menu
```

**Body:**
```json
{
  "name": "Espresso",
  "description": "Rich and bold espresso",
  "price": 3.50,
  "category": "category_id",
  "image": "url",
  "featured": true,
  "available": true,
  "ingredients": ["coffee", "water"],
  "nutrition": {
    "calories": 5,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  }
}
```

#### Update Menu Item
```
PUT /api/menu/:id
```

#### Delete Menu Item
```
DELETE /api/menu/:id
```

---

### Categories

#### Get All Categories
```
GET /api/categories
```

**Query Parameters:**
- `active` - Filter active categories (true/false)

#### Get Single Category
```
GET /api/categories/:id
```

#### Create Category
```
POST /api/categories
```

**Body:**
```json
{
  "name": "coffee",
  "description": "Hot and cold coffee beverages",
  "icon": "☕",
  "isActive": true
}
```

#### Update Category
```
PUT /api/categories/:id
```

#### Delete Category
```
DELETE /api/categories/:id
```

---

### Testimonials

#### Get All Testimonials
```
GET /api/testimonials
```

**Query Parameters:**
- `approved` - Filter approved testimonials (true/false)
- `featured` - Filter featured testimonials (true/false)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

#### Get Single Testimonial
```
GET /api/testimonials/:id
```

#### Create Testimonial
```
POST /api/testimonials
```

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "rating": 5,
  "comment": "Amazing coffee and service!",
  "image": "url"
}
```

#### Update Testimonial
```
PUT /api/testimonials/:id
```

#### Delete Testimonial
```
DELETE /api/testimonials/:id
```

---

### Test Endpoints

#### Test Database Connection
```
GET /api/test/db
```

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error message here"
}
```

**Status Codes:**
- 200 - Success
- 201 - Created
- 400 - Bad Request (Validation Error)
- 404 - Not Found
- 500 - Server Error

---

## Notes

- All timestamps are automatically added (createdAt, updatedAt)
- Authentication will be added in a future phase
- Testimonials require admin approval before being displayed publicly

