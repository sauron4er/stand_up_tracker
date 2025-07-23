# Stand-Up Tracker - Project Context

## Project Overview
A Django-based web application for rating and reviewing comedy specials and comedians. The platform is designed with a mobile-first approach and features an interactive card-based UI.

## Technology Stack
- **Backend**: Django (4.1.1 - compatible with Python <= 3.9.23)
- **Frontend**: React + Bootstrap (mobile-first design)
- **Database**: MySQL (using mysqlclient 2.1.1)
- **Additional**: Webpack for bundling, Pillow for image handling

## Core Features

### Main Page
- List of comedians displayed as interactive cards
- Card flip animation to reveal list of specials
- Click-through to detailed comedian/special pages with reviews

### User Interaction
- User reviews and ratings system
- Average rating calculations
- "Want to watch" functionality for specials

### Key Pages
1. **Main Page**: Interactive comedian cards with specials
2. **Coming Next**: Announced upcoming specials
3. **My Calendar**: User's "want to watch" list
4. **Profile**: User info and statistics
5. **Subscribe**: Monetization features
6. **Contact Us**: Support/contact information

## Database Models

### Core Entities
- **Comedian**: Main comedian profiles with ratings, bio info, country, pictures
- **Special**: Comedy specials linked to comedians with ratings, streaming info, posters
- **Streaming**: Streaming platforms (Netflix, HBO, etc.)

### User System
- **Account**: Extended user profile with theme, language, country preferences
- **User_Comedian_Rating**: Individual user ratings for comedians
- **User_Special_Rating**: Individual user ratings for specials

### User Lists & Favorites
- **Favorite_Comedians**: User's favorite comedian lists
- **Favorite_Specials**: User's favorite special lists
- **To_Watch**: User's watchlist for specials (powers "My Calendar")

### Social Features
- **Comedian_Comments**: Reviews/comments on comedians (with threading)
- **Special_Comments**: Reviews/comments on specials (with threading)
- **Special_Cast**: Many-to-many relationship for special cast members

### Customization
- **Theme**: UI themes (dark/light navbar options)
- **Language**: Internationalization support
- **Country**: User location and comedian origin tracking

## Technical Constraints
- Python version <= 3.9.23 (server limitation)
- Django 4.1.1 (current version in requirements.txt)
- Mobile-first responsive design required
- MySQL database backend

## Project Structure
```
stand_up_tracker/
├── components/          # React components
├── core/               # Django core settings
├── corporate_pages/    # Static pages (contact, subscribe)
├── home/              # Main page functionality
├── library/           # Core models (comedians, specials)
├── my_calendar/       # User watchlist functionality
├── my_specials/       # User's special interactions
├── profile/           # User profile and account models
├── static/            # Static assets
├── templates/         # Django templates
├── manage.py          # Django management
├── requirements.txt   # Python dependencies
├── package.json       # Node.js dependencies
└── webpack.config.js  # Frontend build configuration
```

## Development Notes
- Uses webpack for React/JS bundling
- Image uploads for comedian pictures, special posters, country flags
- Soft delete pattern (is_active fields) across models
- Foreign key relationships use RESTRICT to prevent accidental deletions
- Support for threaded comments/reviews
- Rating system with decimal precision (max_digits=2, decimal_places=1)

## Future Development Priorities
- Implement card flip animations for comedian/special display
- Build responsive mobile-first UI with Bootstrap
- Integrate React components with Django templates
- Develop rating aggregation system
- Create user dashboard and statistics
- Implement subscription/monetization features
