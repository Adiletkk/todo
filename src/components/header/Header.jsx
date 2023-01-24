import './Header.css'

const Header = (props) => {
    return <header>
    Todos({props.complete})  / ({props.todosLen})
    </header>
}

export default Header