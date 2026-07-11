// Resolves a public-folder path (e.g. '/projects/foo.jpg') against the
// site's base URL so images work both locally and on GitHub Pages.
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')
