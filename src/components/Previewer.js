import {Component} from "react";
import marked from 'marked';

export class Previewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textToConvert: '# Marked in browser\n\nRendered by **marked**.'
        };
//        this.convertMarkdown = this.convertMarkdown.bind(this);
    }

    // convertMarkdown() {
    //     // this.setState({
    //     //     textToConvert: _input
    //     // });
    //     document.getElementById('preview-field').innerHTML = 
    //         marked(this.state.textToConvert);
    // }

    componentDidMount() {        
        document.getElementById('preview-field').innerHTML = 
            marked(this.state.textToConvert);
    }

    render() {        
        return (
            <form>
                <textarea defaultValue={this.state.textToConvert}/>
                <output id="preview-field"/>
            </form>
        );
    }
}