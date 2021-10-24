

import Link from 'next/link'

const Navbar = () =>{
    const username = true
    const user = true
    return(
        <nav className="mainnav">
            <ul>
                <li><Link href='/'>MAIN</Link></li>
            </ul>

            {username && (
            <div>
                <Link href='/admin'>+Add Post</Link>
                <Link href={`/${username}`}><img src={user?.photoURL} alt="" /></Link>

            </div>)}


            {!username && (
            <div>
                <Link href="/signup">Sign Up</Link>
            </div>)}
        </nav>
    )
}

export default Navbar