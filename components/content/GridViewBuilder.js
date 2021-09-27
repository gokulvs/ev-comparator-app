
import renderCard from '@components/content/VehicleView';

export const gridViewBuilder = (list) => {

    const buildContent = (list) => {

        let i,j, temporary = [], chunk = 4;
        for (i = 0,j = list.length; i < j; i += chunk) {
            temporary[i] = list.slice(i, i + chunk);
            // do whatever
        }
    
       
        return temporary.map(group => {
    
            console.log('group',group.length);
            if(group.map){
                return (
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                        {group.map(item => renderCard(item))}
                    </div>
                )
            }
            
        });
    }

    return () => {
        return (
            <>
                 {buildContent(list)}
            </>
        );
    }
}

