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


const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        <p>Age : {user.age}</p>
        {getLocation(user.location)}
    </div>
);

const appElement = document.getElementById("app");

ReactDOM.render(template,appElement);