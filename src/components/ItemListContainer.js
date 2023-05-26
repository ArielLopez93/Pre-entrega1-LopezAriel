import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [estado, setEstado] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'films');
    if (categoriaId) {
      const filtro = query(queryCollection, where('category', '==', categoriaId));
      getDocs(filtro)
        .then(res => setEstado(res.docs.map(pelis => ({ id: pelis.id, ...pelis.data() }))))
        .catch(error => console.log(error));
    } else {
      getDocs(queryCollection)
        .then(res => setEstado(res.docs.map(pelis => ({ id: pelis.id, ...pelis.data() }))))
        .catch(error => console.log(error));
    }
  }, [categoriaId]);

  return (
    <section>
      <ItemList estado={estado} />
    </section>
  );
};

export default ItemListContainer;

