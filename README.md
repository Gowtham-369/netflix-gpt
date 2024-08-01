# NetflixGPT
- Created using create-react-app
- Configured TailwindCSS
- Header
- Routing of App
- Sign In/Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase SetUp
- Deploy App to Production
- Create Signed Up Users Accounts in Firebase
- Implemented Sign In API
- Created Redux Store with usedSlice
- Implemented Sign Out
- Managing Users - updateProfile API call after successfull signup using Email and Password
- Bug Fix - Blocked Signed Out Users to access route ("/browse") by redirecting to Login route ("/") and 
also redirected Signed users to ("/browse") when try to access Login route ("/") using onAuthStateChanged API call to manage navigation centrally.
- Sanitary Fix - Used constants in utils/constant.js
- Unregistered onAuthStateChanged Event during unmounting of Header in useEffect
- Get TMDB API, create Developer Account and get API Access Token
- fetched nowplaying/latest movies list from TMDB
- Custom Hook for Now Playing Movies
- Create Movie Slice
- Update Store with now playing movies Data
- Planning for Main Container & Secondary Container
- Fetch Data for Trailer Video
- Update Store with Trailer Video data
- Embedded the Main Movie Youtube Trailer and make it autoplay on mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component

# Features
- Login/Sign Up
    - Sign In/ Sign Up Page
    - Redirect to Browse Page after authentication
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description 
        - Movie Suggestions by Genres and Popular Movies
            - MovieLists * N

- NetflixGPT
    - Search Bar
    - Movie Suggestions
