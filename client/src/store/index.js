import { proxy } from "valtio";
const state = proxy({
    intro: true,//check we are in home page or not;
    color : '#2a2727',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './sigma.png',
    fullDecal: './deadpool.jpg',
});

export default state;
