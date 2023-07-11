import LineGraph from "./components/LineGraph";
import "./App.css";

function App() {
    const data = [
        { x: 1, y: 15 },
        { x: 2, y: 16 },
        { x: 3, y: 17 },
        { x: 4, y: 18 },
        { x: 5, y: 19 },
    ];
    return (
        <>
            <div>
                <LineGraph data={data} width={750} height={500} />
            </div>
        </>
    );
}

export default App;
