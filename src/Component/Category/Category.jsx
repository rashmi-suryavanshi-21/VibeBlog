import React from 'react'
import './Category.css'
const Category = ({ category, setCategory }) => {
    return (
        <div>
            <div className="category-div">
                <div className={`category-card ${category === 'All' ? 'active' : ''}`} 
                onClick={() => setCategory('All')}>
                    All
                    </div>
                <div className={`category-card ${category === 'Tech' ? 'active' : ''}`} 
                onClick={() => setCategory('Tech')}>
                    Tech
                    </div>
                <div className={`category-card ${category === 'Lifestyle' ? 'active' : ''}`} 
                onClick={() => setCategory('Lifestyle')}>
                    Lifestyle
                    </div>
                <div className={`category-card ${category === 'Travel' ? 'active' : ''}`} 
                onClick={() => setCategory('Travel')}>
                    Travel
                    </div>
                <div className={`category-card ${category === 'Creativity' ? 'active' : ''}`} 
                onClick={() => setCategory('Creativity')}>
                    Creativity
                    </div>

            </div>
        </div>
    )
}

export default Category