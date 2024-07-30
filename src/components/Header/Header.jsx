import Link from "next/link";
import classes from './Header.module.scss';

const { headerContainer, navigationContainer, navLinks } = classes;

const Header = ({ }) => {
    return (
        <header>
            <nav className={navigationContainer}>
                <Link href="/">
                    <h1>Library Sandbox</h1>
                </Link>
                <div className={navLinks}>
                    <Link href="/">
                        Home
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;