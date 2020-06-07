
let show = false;

let app = {
    "showText" : "Show",
    "hideText" : "Hide",
    "buttonText" : "Show"
};

const toggleDetails = () => {
    console.log("toggle");
    show = !show;
    app.buttonText = show ? app.hideText : app.showText;
    renderVisibilityApp();
}

const renderVisibilityApp = () => {

    const template = (
        <div>
        <h1>Visibility</h1>
        <button onClick={toggleDetails}>{app.buttonText}</button>
        {
            show ? <p>here goes some content for which you can toggle the Visibility!</p> : ""
        }
        </div>
    );
    ReactDOM.render(template,appRoot);
}

const appRoot = document.getElementById("app");
renderVisibilityApp();