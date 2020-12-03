const InitialState = [
    {
        id:1,
        name:"IP 7 Plus",
        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUqoxtSRZwdZqd5Vq-3F9LCNlNqqmfk-jYcjTcjZ9-G1foXMlyvzU1kock7ycj&usqp=CAc",
        description:"Sản phẩm này do Apple sản xuất",
        price:500,
        inventory:10,
        rating :4
    },
    {
        id:2,
        name:"Samsung galaxy 7",
        image:"https://skypantech.vn/wp-content/uploads/2018/08/s7-4.jpg",
        description:"Sản phẩm này do Samsung sản xuất",
        price:400,
        inventory:15,
        rating:3
    },
    {
        id:3,
        name:"Oppo F1s",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLh1sYwfRfvkwyhpu3tsPyRwwwZtTRow9lw&usqp=CAU",
        description:"Sản phẩm này do China sản xuất",
        price:450,
        inventory: 5,
        rating:5
    }
]
const Products = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}
export default Products;