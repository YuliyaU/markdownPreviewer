import {Previewer} from './Previewer';
import {Footer} from './Footer';

export const App = () => {
    return (
        <div className="container">
            <h1>Markdown Previewer</h1>  
            <Previewer />   
            <Footer />       
        </div>
    );
};