import {useState,useCallback} from 'react';
import Image from 'next/image'
import debounce from 'lodash.debounce';
import Logo from '../../logos/appLogo';
import {menu} from './menu';


export default function Header({ title }) {

  const [menuItem,setMenuItem] = useState(null);

  

  const setMenu = (key) => {
    console.log("key - ",key);
    setMenuItem(key);
  }
  const changeHandler = data => {
    setMenu(data);
  };

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
  , []);

  const resetMenu = () => {
   //setMenuItem(null);
  }
  const renderMenu = (list) => {

    return list.map(({label,icon,key,children,route}) => (
      <li key={key} className="ml-16"
      onMouseEnter={() => {
        debouncedChangeHandler({label,key,children})
      }}
      onMouseLeave={() => {

      }}>
        <a href={`${route}`} className="text-dark-gray font-semibold flex transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" >
          <span>{label}</span>
          <span className="text-primary-orange ml-1">{icon}</span>
        </a>
      </li>
    ));
  }

  const renderSubMenu = (menu) => {
    let {key,label,children} = menu?menu:{key:"",label:"",children:[]};

    if(key === ""){
      return null;
    }

    const renderItems = ({label,img}) => {
      return (
        <a href="#" className="ml-3 mb-1 p-2 text-center border-yellow-500 shadow bg-white flex-shrink md:flex-shrink-0">
          <div class="w-24 min-h-full rounded overflow-hidden">
              <Image className="w-full" width="100%" height="50px" src={img} alt={label}/>
            
            <div class="px-1 py-1">
              <div class="font-bold text-xs mb-1">{label}</div>
            </div>
          </div>
        </a>
      )
    }
    

    return (
      <div className="submenu-container pb-4 max-h-auto mt-5" onMouseLeave={() => {resetMenu()}}>
        <div className="flex flex-wrap" >
            {children && children.map(renderItems)}
            {children && 
            <a href="#">
              <div class="w-24 h-10 rounded overflow-hidden text-center p-3 mt-6">
                <div class="px-1 py-1">
                  <div class="font-bold text-xs mb-1">More ... </div>
                </div>
              </div>
            </a>
            }
        </div>
      </div>
    );
  }


  return (
    <>
      <nav className="app-nav flex flex-col bg-teal-500bg-white shadow my-1" onMouseLeave={() => {resetMenu()}}>
        <div className="level-0 flex p-3">
          <div className="w-auto mr-6 text-center leading-loose">
            <a href="/">
            <Logo width="130px" />
            </a>
          </div>
          <div className="pt-2 w-1/4 h-24 max-h-24 lg:w-3/4 mt-6 text-gray-600 relative ">
            <input className="w-full h-3/5 border-2 border-yellow-500 bg-white h-10 px-5 pr-5 rounded-lg text-sm focus:outline-none shadow-inner shoadow-xl"
              type="search" name="search" placeholder="Looking for next right motor ..." />
            <button type="submit" className="absolute right-0 top-1 mt-5 mr-4">
              <svg className="text-primary-orange h-4 w-4 fill-current" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="flex mt-10" >
            <ul className="flex">
              {renderMenu(menu)}
            </ul>
            
          </div>
        </div>
        <div className="level-1 bg-primary-orange">
          {menuItem && menuItem.children && renderSubMenu(menuItem)}
        </div>
      </nav>
    </>
  )
}
