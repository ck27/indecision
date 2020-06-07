console.log("running the app");

// JSX Javascript XML
const app = {
    title: "In-Decision",
   subtitle: "My project as part of the React course",
   options: []
};

const appElement = document.getElementById("app");

const submit = (e)=> {
    e.preventDefault();
    console.log("on submit");

    let form = e.target.elements;
    let newEntry = form.option.value;

    if(newEntry.length > 0)
        app.options.push(newEntry);
    form.option.value = "";

    renderApp();
};

const resetOptions = () => {
    app.options = [];
    renderApp();
}

const makeDecision = () => {
    let choice = Math.floor(Math.random() * app.options.length);
    alert(app.options[choice]);
}
    
    
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            { app.options.length > 0 ? <p>Here are your options ({app.options.length})</p> : <p>No Options</p>}
            <button disabled={app.options.length <= 0} onClick={makeDecision}>What should I do ?</button>
            <button onClick={resetOptions}>REMOVE ALL</button>
            <ol>
            {
                app.options.map( (option) => <li key={option}>{option}</li> )
            }
            </ol>
            <form onSubmit={submit}>
                <input type="text" name="option" />
                <button type="submit">ADD</button>
            </form>
            
        </div>
    );
    
    ReactDOM.render(template,appElement);
};

renderApp();

