const Nav = () => {
    //javascript
    const company = "Learn with me";
    return (
        <>
        <div id="nav">
            <ul>
                <li>
                    <a href="http://learnwithme.com">{company}</a>
                    <a href="home">Home</a>
                    <a href="about">About</a>
                    <a href="products">Products</a>
                    <a href="contacts">Contacts</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Nav



