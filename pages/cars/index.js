import pageWrapper from "@components/PageWrapper";
import {gridViewBuilder} from "@components/content/GridViewBuilder";


import list from './carsList.json';

export default pageWrapper(gridViewBuilder(list));