

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Wz5RXw7i.js","_app/immutable/chunks/C86OkpKZ.js","_app/immutable/chunks/CMWCWS23.js"];
export const stylesheets = [];
export const fonts = [];
