import About from './pages/About';
import Assistant from './pages/Assistant';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import WhatWeDo from './pages/WhatWeDo';
import WhyAgriLink from './pages/WhyAgriLink';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Assistant": Assistant,
    "Contact": Contact,
    "Resources": Resources,
    "WhatWeDo": WhatWeDo,
    "WhyAgriLink": WhyAgriLink,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};