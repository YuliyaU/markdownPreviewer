import {Component} from "react";
import marked from 'marked';

export class Previewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textToConvert: '# Marked in browser\n\nRendered by **marked**.'
        };
       this.convertMarkdown = this.convertMarkdown.bind(this);
       this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    convertMarkdown() {         
        document.getElementById('preview-field').innerHTML = 
            marked(this.state.textToConvert);
    }

    onChangeHandler(event) {
        if (event) {
            this.setState({
                textToConvert: event.target.value
            // This callback function lets to set state without any delay
            }, () => {
                this.convertMarkdown();
            });
        }       
    }

    componentDidMount() {        
        this.convertMarkdown();
    }

    render() {        
        return (
            <form>
                <textarea onChange={this.onChangeHandler} 
                          defaultValue={this.state.textToConvert}/>
                <output id="preview-field"/>
            </form>
        );
    }
}