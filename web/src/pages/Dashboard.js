import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        // Fetch user data
        setUser({
            name: 'Kait',
            email: 'kait@gmail.com',
            avatar: 'https://ui-avatars.com/api/?name=Kait&background=6366f1&color=fff&size=100'
        });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Sample movie data
    const movies = [
        {
            id: 1,
            title: 'The Shawshank Redemption',
            year: '1994',
            rating: 9.3,
            genre: 'Drama',
            duration: '142 min',
            image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.'
        },
        {
            id: 2,
            title: 'The Dark Knight',
            year: '2008',
            rating: 9.0,
            genre: 'Action',
            duration: '152 min',
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
            description: 'Batman must accept one of the greatest psychological tests to fight injustice.'
        },
        {
            id: 3,
            title: 'Inception',
            year: '2010',
            rating: 8.8,
            genre: 'Sci-Fi',
            duration: '148 min',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
            description: 'A thief who steals corporate secrets through dream-sharing technology.'
        },
        {
            id: 4,
            title: 'Pulp Fiction',
            year: '1994',
            rating: 8.9,
            genre: 'Crime',
            duration: '154 min',
            image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
            description: 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.'
        },
        {
            id: 5,
            title: 'Forrest Gump',
            year: '1994',
            rating: 8.8,
            genre: 'Drama',
            duration: '142 min',
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
            description: 'The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.'
        },
        {
            id: 6,
            title: 'The Matrix',
            year: '1999',
            rating: 8.7,
            genre: 'Sci-Fi',
            duration: '136 min',
            image: 'https://images.unsplash.com/photo-1574267432644-f737f0d95187?w=400&h=600&fit=crop',
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.'
        },
        {
            id: 7,
            title: 'Interstellar',
            year: '2014',
            rating: 8.6,
            genre: 'Sci-Fi',
            duration: '169 min',
            image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
        },
        {
            id: 8,
            title: 'The Godfather',
            year: '1972',
            rating: 9.2,
            genre: 'Crime',
            duration: '175 min',
            image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop',
            description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.'
        },
        {
            id: 9,
            title: 'Gladiator',
            year: '2000',
            rating: 8.5,
            genre: 'Action',
            duration: '155 min',
            image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop',
            description: 'A former Roman General sets out to exact vengeance against the corrupt emperor.'
        },
        {
            id: 10,
            title: 'Parasite',
            year: '2019',
            rating: 8.6,
            genre: 'Thriller',
            duration: '132 min',
            image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
            description: 'Greed and class discrimination threaten the newly formed symbiotic relationship.'
        },
        {
            id: 11,
            title: 'Avengers: Endgame',
            year: '2019',
            rating: 8.4,
            genre: 'Action',
            duration: '181 min',
            image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
            description: 'After devastating events, the Avengers assemble once more to reverse Thanos\' actions.'
        },
        {
            id: 12,
            title: 'Joker',
            year: '2019',
            rating: 8.4,
            genre: 'Drama',
            duration: '122 min',
            image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
            description: 'A mentally troubled comedian embarks on a downward spiral of revolution and crime.'
        }
    ];

    const categories = ['all', 'Action', 'Drama', 'Sci-Fi', 'Crime', 'Thriller'];

    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            movie.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || movie.genre === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="movie-header">
                <div className="header-content">
                    <div className="header-left">
                        <h1 className="brand">🎬 CineTrack</h1>
                        <nav className="main-nav">
                            <a href="#home" className="nav-link active">Home</a>
                            <a href="#movies" className="nav-link">Movies</a>
                            <a href="#series" className="nav-link">TV Series</a>
                            <a href="#trending" className="nav-link">Trending</a>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="search-bar">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search movies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="user-menu-wrapper">
                            <div 
                                className="user-menu" 
                                onClick={() => setShowUserMenu(!showUserMenu)}
                            >
                                <img src={user?.avatar} alt="User" className="user-avatar" />
                                <span className="user-name">{user?.name}</span>
                                <span className="dropdown-arrow">{showUserMenu ? '▲' : '▼'}</span>
                            </div>
                            
                            {showUserMenu && (
                                <div className="user-dropdown">
                                    <div className="dropdown-header">
                                        <img src={user?.avatar} alt="User" className="dropdown-avatar" />
                                        <div className="dropdown-info">
                                            <span className="dropdown-name">{user?.name}</span>
                                            <span className="dropdown-email">{user?.email}</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item">
                                        <span className="dropdown-icon">👤</span>
                                        <span>My Profile</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <span className="dropdown-icon">❤️</span>
                                        <span>My Favorites</span>
                                    </button>
                                    <button className="dropdown-item">
                                        <span className="dropdown-icon">⚙️</span>
                                        <span>Settings</span>
                                    </button>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item logout" onClick={handleLogout}>
                                        <span className="dropdown-icon">🚪</span>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <span className="hero-badge">Featured</span>
                    <h2 className="hero-title">Welcome to CineTrack</h2>
                    <p className="hero-description">
                        Discover thousands of movies and TV shows. Watch anywhere, anytime.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-play">▶ Play Now</button>
                        <button className="btn-info">ℹ More Info</button>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Category Filter */}
            <div className="container">
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category === 'all' ? 'All Movies' : category}
                        </button>
                    ))}
                </div>

                {/* Movies Grid */}
                <div className="movies-section">
                    <h2 className="section-title">
                        {selectedCategory === 'all' ? 'Popular Movies' : selectedCategory + ' Movies'}
                    </h2>
                    <div className="movies-grid">
                        {filteredMovies.map(movie => (
                            <div key={movie.id} className="movie-card">
                                <div className="movie-poster">
                                    <img src={movie.image} alt={movie.title} />
                                    <div className="movie-overlay">
                                        <button className="play-btn">▶</button>
                                        <div className="overlay-actions">
                                            <button className="action-btn" title="Add to favorites">❤️</button>
                                            <button className="action-btn" title="Add to watchlist">➕</button>
                                        </div>
                                    </div>
                                    <div className="movie-rating">⭐ {movie.rating}</div>
                                </div>
                                <div className="movie-info">
                                    <h3 className="movie-title">{movie.title}</h3>
                                    <div className="movie-meta">
                                        <span className="movie-year">{movie.year}</span>
                                        <span className="movie-divider">•</span>
                                        <span className="movie-genre">{movie.genre}</span>
                                        <span className="movie-divider">•</span>
                                        <span className="movie-duration">{movie.duration}</span>
                                    </div>
                                    <p className="movie-description">{movie.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredMovies.length === 0 && (
                        <div className="no-results">
                            <p className="no-results-icon">🎬</p>
                            <p className="no-results-text">No movies found</p>
                            <p className="no-results-subtext">Try searching for something else</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;