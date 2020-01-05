import React from 'react';
import marked from 'marked'
import './App.css';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
   this.handleChange = this.handleChange.bind(this);
 };
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div>
          <div style={toolbar}>Editor</div>
          <Editor markdown={this.state.markdown} 
              onChange={this.handleChange} />
        </div>
        <div>
          <div style={toolbar}>Previewer</div>
          <Preview  markdown={this.state.markdown}/>
        </div>
      </div>
    );
  }
};

const toolbar = {
      textAlign: "",
      color: "black",
      fontWeight: "bold",
      position: "relative",
      backgroundColor: "#2A9D85",
      padding: "4px 4px 3px 3px",
      width: "50%",
      margin: "auto",
      marginTop: "2em",
      border: "solid 3px black",
      borderBottom: "none"
}

const boxStyle = {
      display: "block",
      width: "50%",
      height: "auto",
      minHeight: "100px",
      margin: "auto",
      border: "solid 3px black",
      padding: ".5em",
      backgroundColor: "silver"
}

const Editor = (props) => {
  return (
    <textarea id="editor"
      value={props.markdown}
      style={boxStyle}
      onChange={props.onChange}
      type="text"/>
    )
}

const Preview = (props) => {
  return (
      <div id='preview' style={boxStyle} dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
    )
}

const placeholder =
`# h1 Heading
## h2 Heading

[Here is a link to google](https://www.google.com)

\`<div>Here is a single line code block</div>\`

\`\`\`
CodeBlock
With multiple
lines
\`\`\`

> 'Block Quotes!'

- Here is a list item

1. Here is a numbered list item

**You can have bold text**

You can add an Image:

![React Logo w/ Text](https://s.pngkit.com/png/small/80-803371_javascript-logo-number-angularjs-node-javascript-logo.png)
`

export default App;
