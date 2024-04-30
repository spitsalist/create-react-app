function ListsComponent() {


    const style = {
        fontSize: '25px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

    return (

    <div style={style}>
    <ol>
        <li>Frist element unordered list
            <ol>
                <li>Innest element</li>
            </ol>
        </li>
        <li>Second element unordered list</li>
        <li>Third element unordered list</li>
    </ol>
    <ul>
        <li>Frist element unordered list
            <ul>
                <li>Innest element</li>
            </ul>
        </li>
        <li>Second element unordered list</li>
        <li>Third element unordered list</li>
    </ul>
</div>
);
}


//     )
// }
export default ListsComponent;