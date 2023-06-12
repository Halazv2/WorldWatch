# WorldWatch

## Description

WorldWatch is a news aggregator that allows users to view news from around the world. Users can view news from different countries and filter news by category, author, and source.

## Installation

1. Clone the repository

### Backend

1. cd into the backend directory and Build and run the Docker containers
```bash
docker-compose up 
```

2. run migrations
```bash
docker-compose exec app php artisan migrate
```

### Frontend

1. cd into the frontend directory and run
```bash
docker build -t frontend .
```

2. run the container
```bash
docker-compose up 
```

## Resources

- [Laravel](https://laravel.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [News API](https://newsapi.org/)
- [Heroicons](https://heroicons.com/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Docker](https://www.docker.com/)

## Author

[Halav2](https://github.com/Halazv2)



