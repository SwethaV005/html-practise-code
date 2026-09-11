export interface Product{
  id:number,
  name:string,
  price:string,
  img:string,
}
export const productItemsData = [
  {
    id: 1001,
    name: "RALLY BOARD 65",
    price: "1000",
    img: new URL("../assets/rally-board-65-graphite-01.webp", import.meta.url).href,
  },
  {
    id: 1002,
    name: "RALLY AI CAMERA",
    price: "1000",
    img: new URL("../assets/rally-ai-camera-graphite-front-01.webp", import.meta.url).href,
  },
  {
    id: 1003,
    name: "RALLY AI CAMERA PRO",
    price: "1000",
    img: new URL("../assets/rally-ai-camera-pro-graphite-front-01.webp", import.meta.url).href,
  },
  {
    id: 1004,
    name: "RALLY PLUS",
    price: "1000",
    img: new URL("../assets/rally-plus-01b.webp", import.meta.url).href,
  },
  {
    id: 1005,
    name: "RALLY BAR",
    price: "1000",
    img: new URL("../assets/rally-bar-graphite-01.webp", import.meta.url).href,
  },
  {
    id: 1006,
    name: "RALLY BAR MINI",
    price: "1000",
    img: new URL("../assets/rally-bar-mini-taa-gallery-1.webp", import.meta.url).href,
  },
  {
    id: 1007,
    name: "RALLY BAR HUDDLE",
    price: "1000",
    img: new URL("../assets/rally-bar-huddle-front-01-new.webp", import.meta.url).href,
  },
  {
    id: 1008,
    name: "MEETUP 2",
    price: "1000",
    img: new URL("../assets/meetup-2-graphite-01.webp", import.meta.url).href,
  },
  {
    id: 1009,
    name: "RALLY CAMERA",
    price: "1000",
    img: new URL("../assets/meetup-gallery-global-1.webp", import.meta.url).href,
  },
  {
    id: 1010,
    name: "GROUP",
    price: "1000",
    img: new URL("../assets/group-gallery-1.webp", import.meta.url).href,
  },
  {
    id: 1011,
    name: "LOGITECH SIGHT",
    price: "1000",
    img: new URL("../assets/sight-facing-front-graphite-1.webp", import.meta.url).href,
  },
  {
    id: 1012,
    name: "CONNECT",
    price: "1000",
    img: new URL("../assets/connect-gallery-1.webp", import.meta.url).href,
  },
  {
    id: 1013,
    name: "BCC950",
    price: "1000",
    img: new URL("../assets/bcc950-gallery-1.webp", import.meta.url).href,
  },
  {
    id: 1014,
    name: "PTZ PRO 2",
    price: "1000",
    img: new URL("../assets/ptz-pro-2-gallery-1.webp", import.meta.url).href,
  },
]

export default productItemsData
