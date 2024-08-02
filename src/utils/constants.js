export const NETFLIX_LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_ICON =
	"https://occ-0-955-1723.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad";
export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer " + process.env.REACT_APP_TMDB_API_KEY,
	},
};

export const MOVIE_CARD_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
	"https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/e86a75da-ce78-4129-9e7d-c056f1c3363b/US-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_e46f05a7-c909-4aaf-9e3c-c832bbca606c_small.jpg";

export const SUPPORTED_LANGUAGES = [
	{ name: "English", identifier: "en" },
	{ name: "Spanish", identifier: "spanish" },
	{ name: "Hindi", identifier: "hindi" },
];