export default function Something() {
    return <div onClick={() => { throw new Error("Selam") }}>test</div>
}