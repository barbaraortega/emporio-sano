import {useParams} from "react-router-dom";
import { Layout } from '../componentes/Layout';
import {item} from "../mocks/items.mock";
import Item from "../componentes/Item";
import ItemListContainer from "../componentes/ItemListContainer";


const CategoryView =() => {
 
    return ( 
   
    <Layout> 
        <ItemListContainer/>
    </Layout> 
    );
};


export default CategoryView;