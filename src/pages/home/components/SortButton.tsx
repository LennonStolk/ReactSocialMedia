import { useState } from 'react'
import './SortButton.css'

function SortButton(props: { sortChanged: any }) {

    const [newFirst, setNewFirst] = useState(true);

    function renderButtonText() {
        if (newFirst)
            return "Newest -> oldest";
        else
            return "Oldest -> newest"
    }

    function toggleButton() {
        setNewFirst(!newFirst);
        props.sortChanged(!newFirst);
    }

    return (
        <section>
            <h3 className="sort-label">Sort:</h3>
            <button className="sort" onClick={toggleButton}>
                { renderButtonText() }
            </button>
        </section>
        
    )
}

export default SortButton