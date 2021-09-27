import pageWrapper from "@components/PageWrapper";
import {gridViewBuilder} from "@components/content/GridViewBuilder";


import list from './carsList.json';

function Page() {
  console.log(list);
  return (
    <>
      {list.map(View)}
    </>
  )
};

export default pageWrapper(gridViewBuilder(list));