import {Previewer} from './Previewer';
import {Footer} from './Footer';

export const App = () => {
    return (
        <div className="container">
            <header>Markdown Previewer</header>  
            <Previewer />   
            <Footer />       
        </div>
    );
};