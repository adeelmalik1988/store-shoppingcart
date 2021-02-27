

export interface ProductItem {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    added?: boolean
  }


const INITIAL_STATE: ProductItem[] = [
  {
    id: "123",
    title: "Blue t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: "/blue-tshirt.png",
    price: 399
  },
  {
    id: "456",
    title: "Yellow t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: "/yellow-tshirt.png",
    price: 499
  },
  {
    id: "789",
    title: "Red t-shirt",
    description: "air-jordan-3-valor-blue",
    imageUrl: "/red-tshirt.png",
    price: 799
  },
  {
    id: "101112",
    title: "VALOUR BLUE",
    description: "air-jordan-3-valor-blue",
    imageUrl: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: 1399
  },
  {
    id: "131415",
    title: "JORDAN MARS 270 LONDON",
    description: "jordan-mars-270-london",
    imageUrl: "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: 1599
  },
  {
    id: "161718",
    title: "RACER BLUE",
    description: "air-jordan-1-zoom-racer-blue",
    imageUrl: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    price: 1799
  },




]


export { INITIAL_STATE }
