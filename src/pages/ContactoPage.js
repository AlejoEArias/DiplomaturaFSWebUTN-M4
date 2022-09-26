const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Contactemos</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="Nombre y Apellido">Nombre y Apellido:</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="Email">Email:</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="Teléfono">Teléfono:</label>
                    <input type="number" name=""/>
                </p>
                <p>
                    <label for="Mensaje">Mensaje:</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones">
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div className="datos">

            <ul>
                <li><span className="negrita">Teléfono</span>: +34 951 53 90 44</li>
                <li><span className="negrita">Email</span>: eldescorchedecervantes@gmail.com</li>
                <li><span className="negrita">Dirección</span>: Calle Álamos, 8, Málaga, España</li>
            </ul>
        </div>
    </main>
    
    );

}

export default ContactoPage;