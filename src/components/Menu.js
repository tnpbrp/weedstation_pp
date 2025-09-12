import { Divider, Row, Col, Image, Card } from 'antd';
import { useEffect, useState } from 'react';

const { Meta } = Card;

const row_style = {
    padding: '8px 8px',
    textAlign: 'center',
    justifyContent: 'center',
};

const col_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 'fit-content'
};

const imageStyle = {
    maxWidth: '100%',
    height: '190px',
    objectFit: 'cover',
};

const textPriceStyle = {
    color: '#ee4d2d',
    fontSize: '16px',
    fontWeight: 'bold',
};

const products = [
    // {
    //     "name": "Darft",
    //     "price": 0,
    //     "img": "jpg / ",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":boolean
    // },
      {
        "name": "Weed",
        "price": "สอบถาม",
        "img": "weed.jpg",
        "cate": "item",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
     {
        "name": "Toppuff",
        "price": 180,
        "img": "toppuff.jpg",
        "cate": "item",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
 {
        "name": "Toppuff Box",
        "price": 250,
        "img": "toppuff_set.jpg",
        "cate": "item",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
    {
        "name": "ท่อใส่บ้อง",
        "price": 140,
        "img": "bong12.jpg",
        "cate": "item",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
    {
        "name": "Cone Funnel",
        "price": 80,
        "img": "cone_funnel.jpg",
        "cate": "item",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
    {
        "name": "Green crack pack",
        "price": 450,
        "img": "green_crack_pack.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
     {
        "name": "Green crack",
        "price": 100,
        "img": "green_crack2.jpg",
        "cate": "flower",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
    {
        "name": "Papers",
        "price": 100,
        "img": "papers.jpg",
        "cate": "item",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
    {
        "name": "Roll",
        "price": 200,
        "img": "roll1.jpg",
        "cate": "roll",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
     {
        "name": "อัดแท่ง",
        "price": 550,
        "img": "stick1.jpg",
        "cate": "stick",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
         {
        "name": "อัดแท่ง",
        "price": 100,
        "img": "stick2.jpg",
        "cate": "stick",
        "desc": "",
        "santiva": 0,
        "indica": 0,
        "thc": "",
        "cbd": null,
        "flovors": "",
        "effect": "",
        "sold_out":false
    },
    // {
    //     "name": "Flap Jack",
    //     "price": 350,
    //     "img": "S__50806790_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
    // {
    //     "name": "Black Fritter",
    //     "price": 400,
    //     "img": "S__50806792_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
    // {
    //     "name": "Rainbow Runtz",
    //     "price": 400,
    //     "img": "S__50806793_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
    // {
    //     "name": "Red Oreoz",
    //     "price": 350,
    //     "img": "S__50806794_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
    // {
    //     "name": "Runtz",
    //     "price": 400,
    //     "img": "S__50814985_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
    // {
    //     "name": "Wet Cherry",
    //     "price": 400,
    //     "img": "S__50814986_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
    // {
    //     "name": "P. C.",
    //     "price": 400,
    //     "img": "S__50814987_0.jpg",
    //     "cate": "flower",
    //     "desc": "",
    //     "santiva": 0,
    //     "indica": 0,
    //     "thc": "",
    //     "cbd": null,
    //     "flovors": "",
    //     "effect": "",
    //     "sold_out":true
    // },
];


function Menu() {
    // const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardWidth, setCardWidth] = useState(150); // * Default = 240
    const [responsiveSpan, setResponsiveSpan] = useState(12);
    const [productList, setProductList] = useState([]);



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                console.log("Mobile")
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                console.log("Tablet")
            } else {
                console.log("Desktop")
            }
            // setWindowWidth(window.innerWidth);
        };

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Define the sorting order of categories
        const categoryOrder = ['flower', 'trim', 'roll', 'stick', 'item'];

        // Sort the items array by category
        const sortedItems = products.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a.cate);
            const indexB = categoryOrder.indexOf(b.cate);
            return indexA - indexB;
        });
        // Sort flower , trim , roll , stick , items

        // const filteredItems = sortedItems.filter(item => {
        //     // Add cut items is not images
        //     return item.cate !== 'item';
        // });

        setProductList(sortedItems);
        // console.log(products)

    }, []);

    return (
        <>
            <Divider orientation="center" className='menu-divider'>Menu Bottom </Divider>
            <Row gutter={[
                {
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }, 24]} style={row_style} className='row-items'>
                {productList.map((item, idx) =>
                    <Col className="gutter-row" span={responsiveSpan} key={idx} style={col_style}>
                        <Card
                            hoverable
                            style={{
                                width: cardWidth,
                            }}
                            cover={<Image src={require(`../assets/images/products/` + item.img)} style={imageStyle} loading="lazy" />}
                        >

                            {item.name !== '' ?
                                <Meta title={item.name} description={<span className='text-price' style={textPriceStyle}>{item.price + ' ฿'} </span>} />
                                :
                                <Meta title={<br></br>} description={<br></br>} />
                            }

                            {
                                item.desc ?
                                    <span title={''} style={{ color: 'rgb(78, 47, 255)' }}>* {item.desc} </span> :
                                    ''
                            }


                            {
                                item.santiva || item.indica !== '' ?
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '5px 0px' }}>
                                        <span style={{ display: item.santiva ? '' : 'none', borderRight: item.indica ? 'green 1px solid' : '' }}>Santiva {item.santiva} %</span>
                                        <span style={{ display: item.indica ? '' : 'none' }}>Indica {item.indica} %</span>

                                        {/* <span title={''} description={item.santiva ? `Santiva : ${item.santiva} %` : ''} style={{ padding: '5 0px' }} />
                                        <span title={''} description={item.indica ? `Indica : ${item.indica} %` : ''} style={{ padding: '5 0px' }} /> */}
                                    </div>
                                    :
                                    <Meta title={''} description={''} />
                            }

                            {
                                item.thc > 0 || item.cbd > 0 ?
                                    <>
                                        <Meta title={''} description={item.thc ? `THC : ${item.thc} %` : ''} />
                                        <Meta title={''} description={item.cbd ? `CBD : ${item.cbd} %` : ''} />
                                    </>
                                    :
                                    <Meta title={''} description={<br></br>} />
                            }

                            {/* {
                                item.flovors || item.effect ?
                                    <>
                                        <Meta title={''} description={item.flovors ? `Flovors : ${item.flovors} ` : ''} />
                                        <Meta title={''} description={item.effect ? `Effect : ${item.effect} ` : ''} />
                                    </>
                                    :
                                    <Meta title={''} description={<br></br>} />
                            } */}


                        </Card>
                    </Col>
                )}
            </Row>
        </>

    );
}

export default Menu;

