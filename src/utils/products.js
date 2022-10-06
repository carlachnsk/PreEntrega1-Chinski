

const products = [
    {id: 1, name: 'Lollapalooza', description: 'string', pictureUrl: 'https://assets-global.website-files.com/61648208fbba11601a19f03a/62ba0d8044a905483fd51000_Lolla%20Icono%20redes.png', stock: 'number'},
    {id: 2, name: 'Primavera Sound', description: 'string', stock: 'number', pictureUrl:'https://assets-img.primaverasound.com/2500x0/psweb/kknp5qi2ss0df636swg4_1661957859441.png'},
    {id: 3, name: 'Harry Styles', description: 'string', stock: 'number', pictureUrl:'https://www.clashmusic.com/sites/default/files/field/image/harry%20styles.jpeg'},
    {id: 4, name: 'Billie Eilish', description: 'string', stock: 'number', pictureURL:'https://pbs.twimg.com/media/FBY8StAVkAU_gYl.jpg'},
    {id: 5, name: 'Dua Lipa', description: 'string', stock: 'number', pictureUrl:'https://pbs.twimg.com/media/FBY8StAVkAU_gYl.jpg'},
    {id: 6, name: "Guns n' Roses", description: 'string', stock: 'number', pictureUrl:'https://www.lavoz.com.ar/resizer/IuWZLv-3GAHA346iuPkZlUAObRA=/1023x1350/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/4QNCSWB5XRGYBJR3JIUCSAA4IY.png'},
    {id: 7, name: 'Candelaria Zamar', description: 'string', stock: 'number', pictureUrl:'https://i.scdn.co/image/ab67706c0000bebb2cb038ae8b7c8cc62b04d3b3'},
    {id: 8, name: 'Orquesta Sinfónica Nacional', description: 'string', stock: 'number', pictureUrl:'https://norteonline.com.ar/wp-content/uploads/2022/03/Orquesta-Sinfonica-Nacional.jpeg'},
    {id: 7, name: 'Les Luthiers', description: 'string', stock: 'number', pictureUrl:'https://www.tuentrada.com/images/627a6962c8497.webp'},
    {id: 7, name: 'Babasónicos', description: 'string', stock: 'number', pictureUrl:'https://eventosenmendoza.com.ar/wp-content/uploads/2022/07/babasonicos-en-mendoza-bye-bye-tour.jpg'}
]

    const getProducts = () => {
        const promise = new Promise((resolve) => {
            return resolve(products);
        })

    return promise
    };

export const getProduct = (id) => {
    const product = products.find((product) => product.id === parseInt (id))
    setTimeout(() => {
        return resolve(products);
    }), 2000
    }

    export { products };