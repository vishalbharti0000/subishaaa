import React from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "../../components/atoms/Toolbar/Toolbar";
import Footer from "../../components/organisms/Footer/Footer";
import NavBar from "../../components/organisms/NavBar/NavBar";
import {
    ContentWrapper,
    FooterWrapper,
    Header,
    Main,
} from "./HomeTemplate.styles";

function HomeTemplate() {
    return (
        <>
            <ContentWrapper>
                <Header>
                    <NavBar />
                    <Toolbar />
                </Header>
                <Main>
                    <Outlet />
                </Main>

                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </ContentWrapper>
        </>
    );
}

export default HomeTemplate;
