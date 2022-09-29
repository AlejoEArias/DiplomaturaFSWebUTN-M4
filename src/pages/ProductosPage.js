import '../styles/components/pages/ProductosPage.css'
const ProductosPage = (props) => {
    return (
        <main className="holder">
            <div className="productos">
                <img src="img/entrada comida.jpg" width="300" alt="tacos" />
                <div className="info">
                    <h4>Entradas</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates earum minima nisi. Accusamus,
                        in, ullam consequuntur modi recusandae eaque maiores consequatur perspiciatis similique nam harum
                        atque dolor molestiae error incidunt!
                    </p>
                </div>
            </div>
            <div className="productos">
                <img src="img/plato principal.jpg" width="300" alt="pulpo con papas" />
                <div className="info">
                    <h4>Platos Principales</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates earum minima nisi. Accusamus,
                        in, ullam consequuntur modi recusandae eaque maiores consequatur perspiciatis similique nam harum
                        atque dolor molestiae error incidunt!
                    </p>
                </div>
            </div>
            <div className="productos">
                <img src="img/postre cheesecake.jpg" width="300" alt="cheesecake" />
                <div className="info">
                    <h4>Postres</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates earum minima nisi. Accusamus,
                        in, ullam consequuntur modi recusandae eaque maiores consequatur perspiciatis similique nam harum
                        atque dolor molestiae error incidunt!
                    </p>
                </div>
            </div>
            <div className="productos">
                <img src="img/vinos tinto, blanco.jpg" width="300" alt="Vinos" />
                <div className="info">
                    <h4>Vinos</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates earum minima nisi. Accusamus,
                        in, ullam consequuntur modi recusandae eaque maiores consequatur perspiciatis similique nam harum
                        atque dolor molestiae error incidunt!
                    </p>
                </div>
            </div>
        </main>

    );

}

export default ProductosPage;