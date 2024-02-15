import Task from "./listpill"

export default function Body(){
    return(
        <div id="body-container">
            <div id="body-header">
                Daily
            </div>

            <div id="body-list">
                <Task></Task>
                <Task></Task>
                <Task></Task>
            </div>
        </div>
    )
}