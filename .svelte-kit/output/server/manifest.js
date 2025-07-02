export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["background.png","booking.ico","donut.png","favicon.png","french-fries.png","golf.png","hamburger.png","icon.ico","img.png","pizza.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DvXsTZBQ.js",app:"_app/immutable/entry/app.D0P-9JWK.js",imports:["_app/immutable/entry/start.DvXsTZBQ.js","_app/immutable/chunks/DMecHtFy.js","_app/immutable/chunks/CMWCWS23.js","_app/immutable/chunks/CV0WbJ7o.js","_app/immutable/entry/app.D0P-9JWK.js","_app/immutable/chunks/CMWCWS23.js","_app/immutable/chunks/B447aQBC.js","_app/immutable/chunks/C86OkpKZ.js","_app/immutable/chunks/CV0WbJ7o.js","_app/immutable/chunks/C1BndpW2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/booking",
				pattern: /^\/booking\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/status",
				pattern: /^\/status\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
