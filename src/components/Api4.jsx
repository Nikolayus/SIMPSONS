import { useEffect, useState, useRef } from "react";
import "./css/api.css";
import './css/popup.css';

const Api4 = () => {
    const [personajes, setPersonajes] = useState([]);
    const [selectPersonaje, setSelectPersonaje] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        fetchCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (containerRef.current) {
        observer.observe(containerRef.current);
        }

        return () => {
        if (containerRef.current) {
            observer.unobserve(containerRef.current);
        }
        };
    }, [personajes]);

    const fetchCharacters = () => {
        const apiUrl = `https://apisimpsons.fly.dev/api/personajes?limit=20&page=${page}`;
        setLoading(true);
        fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
            let data = responseData.docs;
            setPersonajes((prevPersonajes) => [...prevPersonajes, ...data]);
            setPage((prevPage) => prevPage + 1);
            setLoading(false);
        });
    };

    const handleCardClick = (personaje) => {
        setSelectPersonaje(personaje);
        setShowPopup(true);
    };

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
        fetchCharacters();
        }
    };

    return (
        <>
        <div className="contenedor">
            {personajes.map((personaje) => (
            <div
                className="card"
                key={personaje._id}
                onClick={() => handleCardClick(personaje)}
            >
                <img src={personaje.Imagen} alt="personaje" />
                <p className="nombre">{personaje.Nombre}</p>
            </div>
            ))}
        </div>

        {loading && <p>Loading...</p>}

        <div ref={containerRef} style={{ height: "1px" }} />

        {showPopup && (
            <div className="popup">
            <div className="popup-content">
                <p className="text-popup nombre-popup">{selectPersonaje.Nombre}</p>
                <div className="fondo-popup">
                <div className="line-popup">
                    <p className="text-popup">Genero: {selectPersonaje.Genero}</p>
                    <p className="text-popup">Estado: {selectPersonaje.Estado}</p>
                </div>
                <p className="text-popup">Ocupación: {selectPersonaje.Ocupacion}</p>
                <p className="text-popup">{selectPersonaje.Historia}</p>
                </div>
                <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
            </div>
        )}
        </>
    );
};

export default Api4;