import React from 'react'
import "./Plants.css"

function Plants() {
    const products = [
        {
            id: 1,
            name: "Snake Plant",
            category: "Plants",
            sale: 0,
            image: "https://www.flowerdaise.com.au/wp-content/uploads/2021/02/0179-scaled.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 50,
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 2,
            name: "Peace Lily",
            category: "Plants",
            sale: 1,
            image: "https://cff2.earth.com/uploads/2017/10/24094018/Peace-Lily.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 100, // Higher than selling price
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 3,
            name: "Money Plant",
            category: "Plants",
            sale: 1,
            image: "https://geturpet.com/wp-content/uploads/2021/01/Money-Plant-1.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 100, // Higher than selling price
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 4,
            name: "Areca Palm",
            category: "Cactus",
            sale: 1,
            image: "https://www.gardeningknowhow.com/wp-content/uploads/2013/01/areca-palm-1152x1536.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 100, // Higher than selling price
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 5,
            name: "Aloe Vera",
            category: "Cactus",
            sale: 1,
            image: "https://greenripegarden.com/wp-content/uploads/2020/04/Aloe-Vera-Plant-2048x1365.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 100, // Higher than selling price
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 6,
            name: "Spider Plant",
            category: "Cactus",
            sale: 0,
            image: "https://img.crocdn.co.uk/images/products2/pl/20/00/03/17/pl2000031745.jpg?width=940&height=940",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 50,
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 7,
            name: "Rubber Plant",
            category: "Plants",
            sale: 0,
            image: "https://i.pinimg.com/originals/3d/87/fa/3d87fae0f2b881f7e0a6f97c16002618.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 50,
            sellingPrice: Math.floor(Math.random() * 51) + 50
        },
        {
            id: 8,
            name: "ZZ Plant",
            category: "Plants",
            sale: 1,
            image: "https://www.petalrepublic.com/wp-content/uploads/2020/09/ZZ-Plants-Origins-History-and-Scientific-Facts-1170x1170.jpg",
            price: Math.floor(Math.random() * 51) + 50,
            originalPrice: Math.floor(Math.random() * 51) + 100, // Higher than selling price
            sellingPrice: Math.floor(Math.random() * 51) + 50
        }
    ]



    console.log(products)




    return (
        <div>
            <div className="text-center mb-5">
                <h1 className='mb-3'>Featured Plants</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">

                        <div className="product-image">
                            {product.sale === 1 && <span className="sale-badge" >Sale!</span>}
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>
                        <div className="product-data d-flex flex-column align-items-start">
                            <p className="product-category">{product.category}</p>
                            <h3 className="product-title">{product.name}</h3>
                            <img src="http://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Review-Transparent-PNG.png" alt="" width={""} height={"20px"} />
                            {/* <span className='product-price'>$ {product.price}</span> */}
                            <div className="product-price">
                                {product.sale === 1 ? (
                                    <>
                                        <span className="original-price">${product.originalPrice}</span>
                                        <span className="sale-price">${product.sellingPrice}</span>
                                    </>
                                ) : (
                                    <span>${product.price}</span>
                                )}
                            </div>

                            <button className='btn btn-warning mt-3 text-white'>Add</button>

                        </div>


                    </div>
                ))}
            </div>


        </div>
    )
}

export default Plants