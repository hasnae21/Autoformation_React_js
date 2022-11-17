function MyForm() {
    return (
        <form>
            <label>
                Nom :
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


