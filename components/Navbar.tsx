import Link from "next/link";
import { useRouter } from 'next/router';
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from '../lib/firebase';

export default function Navbar() {

    const { user, username } = useContext(UserContext)

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">NXT</button>
                    </Link>
                </li>
                
                {username && (
                    <>
                        <li className="push-left">
                            <button onClick={ () => auth.signOut() }>Sign Out</button>
                        </li>
                        <li>
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL || '/hacker.png'} alt="user photo" />
                            </Link>
                        </li>
                    </>
                )}

                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}

            </ul>
        </nav>
    );
}