console.log("running the app");

// JSX Javascript XML
const app = {
    title: "In-Decision",
   subtitle: "My project as part of the React course",
   options: ["one", "two"]
};

function showOptions(options) {

}

const template = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>{app.subtitle}</p> }
        { app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </div>
);


const user = {
    name: "Chethan K",
    age: "30",
    location: "Bengaluru"
};

function getLocation(location) {
    if(location) {
        return <p>Location : {location}</p>
    }
}

let count = 0;

const addOne = ()=> {
    count += 1;
    console.log(count);
    renderCounterApp();
}

const minusOne = ()=> {
    count -= 1;
    console.log(count);
    renderCounterApp();
}

const reset = ()=> {
    console.log("Reset!");
    count = 0;
    console.log(count);
    renderCounterApp();
}

const appElement = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count :{count}</h1>
        <button id="add" onClick={addOne} className="button">+1</button>
        <button id="sub" onClick={minusOne} className="button">-1</button>
        <button id="reset" onClick={reset} className="button">RESET</button>
        </div>
    );
    
    ReactDOM.render(templateTwo,appElement);
};

renderCounterApp();

