import Container from "./Container";
import Row from "./Row";
import Logo from "./Logo";

import styles from "./Header.module.scss"


const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Logo />
                </Row>
            </Container>
        </header>
    );
};
export default Header;