const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="columna">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, debitis dolor placeat optio ad,
                    consequatur ea laborum adipisci ipsa magni totam dolores nisi quaerat ipsam nostrum commodi
                    necessitatibus
                    unde neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla quia, magni
                    dolorum laboriosam veniam quos quae temporibus voluptate dolore numquam ad repellendus, dicta, id
                    animi reiciendis ipsum aspernatur.
                </p>
            </div>
            <div className="valoraciones">
                <h2>Valoraciones</h2>
                <div className="valoracion">
                    <span className="cita">"El mejor restaurante de Málaga"</span>
                    <span className="cliente">Pedro Jiménez</span>
                </div>
            </div>
        </div>
    </main>
    
    );

}

export default HomePage;