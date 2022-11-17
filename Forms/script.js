function MyForm() {
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


