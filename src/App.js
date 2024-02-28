import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion/index';
import Slider from './components/image_slider/index';
import RandomColor from './components/randomColor/index';
import Star from './components/star_rating/star';
import LoadMore from './components/loadMore';
import TreeView from './components/TreeView';
import menus from './components/TreeView/data';
import QR from './components/qr-generator';
import LightDarkMode from './components/light-dark';
import ScrollIndicator from './components/scrollIndicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/modal-popup/modal-test';
import GithubFinder from './components/githubFinder';
import SearchAutocomplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature_flags/context';
import FeatureFlags from './components/feature_flags/main';
import UseFecthHookTest from './components/custom_hook/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollTopAndBottom from './components/scroll-to-top-and-bottom';

function App() {
  return (
    <div className='App'>
     {/* <Accordion />*/}
     {/*<Slider url="https://picsum.photos/v2/list" limit={10} page={1}/> */}
     {/* <RandomColor /> */}
     {/* <Star noOfStars={5}/> */}
     {/* <LoadMore /> */}
     {/* <TreeView menus={menus}/> */}
     {/* <QR /> */}
     {/* <LightDarkMode /> */}
     {/* <ScrollIndicator url='https://dummyjson.com/products?limit=100'/> */}
     {/* <TabTest /> */}
     {/* <ModalTest /> */}
     {/* <GithubFinder /> */}
     {/* <SearchAutocomplete /> */}
     <TicTacToe />
     {/* <FeatureFlagGlobalState>
      <FeatureFlags />
     </FeatureFlagGlobalState> */}
     {/* <UseFecthHookTest /> */}
     {/* <UseOnClickOutsideTest /> */}
     {/* <UseWindowResizeTest /> */}
     {/* <ScrollTopAndBottom /> */}
    </div>

  );
}

export default App;
