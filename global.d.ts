// global.d.ts or types/json.d.ts
declare module "*.json" {
    const value: any;
    export default value;
}