import LineGraph from './components/LineGraph'
import './App.css'
import SampleForm from './components/SampleForm'
function App() {
    const data = [
        { x: 1, y: 15 },
        { x: 2, y: 16 },
        { x: 3, y: 17 },
        { x: 4, y: 18 },
        { x: 5, y: 19 },
    ]
    return (
        <>
            <div>
                <LineGraph data={data} width={750} height={500} />
                <SampleForm
                    title="Test Form"
                    onSubmit={(e) => console.log(e)}
                />
            </div>
        </>
    )
}

export default App
