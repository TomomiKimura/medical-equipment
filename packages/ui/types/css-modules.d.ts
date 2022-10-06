/**
 * This tells TypeScript that any time we import a file that hos a .module.css
 * extension, it can expect that file to contain a default export of Record
 */
declare module "*.module.css" {
 const styles: Record<string, string>;
 export default styles;
}