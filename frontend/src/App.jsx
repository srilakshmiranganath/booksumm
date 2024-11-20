export default function App() {
  return <form className="new-form-item">
    <label>Upload File</label>
    <input type="file" accept=".pdf" onChange={(event) => this.setState({ selectedFile: event.target.files[0] })} />
  </form>
}