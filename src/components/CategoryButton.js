function CategoryButton({ element, setType }) {
    
    return (
        <button onClick={() => setType(element)} className='mealtime-box'>{element}</button>
    );
}

export default CategoryButton;