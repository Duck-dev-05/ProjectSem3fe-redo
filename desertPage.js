function DesertPage() {
    return (
        <div>
            <h1>Deserts</h1>
            <ul>
                {deserts.map(desert => (
                    <li key={desert.id}>{desert.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DesertPage; 