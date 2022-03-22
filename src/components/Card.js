import { useEffect, useState } from "react"

function Card({ card, type }) {

    const [display, setDisplay] = useState('none')

    const title = card.title.rendered
    const price = card.acf.price
    const content = card.content.rendered
    const category = card._embedded['wp:term'][0][0].name
    const imageUrl = card._embedded['wp:featuredmedia'][0].source_url


    useEffect(() => {
        if (type === category) {
            setDisplay('flex')
        } else if (type === "All") {
            setDisplay('flex')
        } else {
            setDisplay('none')
        }
    }, [])


    return (
        <div className="card" style={{ display: display }}>
            <img className="main-img" src={imageUrl} alt="" />
            <div className="card-content">
                <div className="header-wrapper">
                    <h3 className="header-content">{title}</h3>
                    <div className="price">${price}</div>
                </div>
                <p className="text-content" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    );
}

export default Card;