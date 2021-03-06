import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans', sans-serif;
  position: relative;
  background-color: #f2f2f2;
  height: 100%;
  color: #626262;
}

a {
  color: #626262;
}

.bg-danger {
  background-color: #e7445d;
  color: #fff;
}

.bg-primary {
  background-color: #4185f5;
  color: #fff;
}

.bg-success {
  background-color: #51b649;
  color: #fff;
}

.color-danger {
  color: #e7445d;
}

.color-primary {
  color: #4185f5;
}

.color-success {
  color: #51b649;
}

.bg-danger a {
  color: #fff;
  text-decoration: none;
}

.bg-primary a {
  color: #fff;
  text-decoration: none;
}

.bg-success a {
  color: #fff;
  text-decoration: none;
}

.container-fluid {
  padding-right: 15px;
  padding-left: 30px;
}

.wrapper {
  display: flex;
  align-items: stretch;
}

.navbar {
  -webkit-box-shadow: 0px 2px 7px -2px rgba(0,0,0,0.6);
  -moz-box-shadow: 0px 2px 7px -2px rgba(0,0,0,0.6);
  box-shadow: 0px 2px 7px -2px rgba(0,0,0,0.6);
}

.navbar-default {
  background-color: #ffffff;
  border-color: #e7e7e7;
}

.navbar-nav>li>a {
  padding-top: 7px;
  padding-bottom: 7px;
  line-height: 20px;
}

.navbar-brand>img {
  max-height: 50px;
  margin-top: -9px;
}

.profile-pic {
  display: inline-block;
  max-height: 50px;
  padding-right: 5px;
}

.bel-icon {
  font-size: 30px;
  top: 15px;
}

.nav li span.badge {
  position: absolute;
  border-radius: 2px;
  padding: 4px;
  font-size: 10px;
  margin-top: 7px;
  margin-left: -15px;
}

/* sidebar */
.sidebar {
  position: absolute;
  min-width: 250px;
  max-width: 250px;
  float: left;
  height: 100%;
  background-color: #ffffff;
  padding-top: 100px;
  transition: all 0.3s;
}

.sidebar ul a {
  font-size: 1.1em;
  padding-left: 30px;
  color: inherit;
  text-transform: uppercase;
}

.sidebar ul li a {
  font-size: 1.1em;
  padding-left: 30px;
  color: inherit;
  text-transform: capitalize;
}

.sidebar ul li a i {
  padding-right: 10px;
  font-size: 15px;
  color: inherit;
}

.sidebar ul li a span.badge {
  float: right;
  border-radius: 2px;
}

.sidebar a:hover,
.sidebar a:focus {
  color: #51b649;
  text-decoration: none;
}

.sidebar .active {
  color: #51b649;
}

.sidebar ul.components {
  padding: 0;
}

.sidebar ul p {
  color: #626262;
  padding: 5px;
  padding-left: 30px;
  text-transform: uppercase;
}

.sidebar ul li a {
  padding: 10px;
  padding-left: 30px;
  font-size: 1.1em;
  display: block;
  color: #626262;
}

.sidebar ul li a:hover {
  color: #51b649;
  background: #f2f2f2;
}

hr {
  margin-top: 15px;
  margin-bottom: 15px;
}

/* main content */
.main-content {
  padding-top: 100px;
  padding-left: 255px;
}

.panel-body {
  min-height: 309px;
}

.panel-primary {
  background-color: #4185f5;
  color: #fff;
  border: 0;
}

.widget {
  position: relative;
}

.widget-heading {
  min-height: 35px;
  font-size: 18px;
}

.big-text-widget {
  font-size: 50px;
  font-weight: 300;
}

.widget-footer {
  display: flow-root;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.widget-footer-primary {
  display: flow-root;
  padding: 10px 15px;
  border-top: 1px solid #5494fd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  color: #fff;
}

.widget-footer-primary a {
  color: #fff;
}

.widget-footer a:hover {
  text-decoration: none;
}

.widget-footer i {
  padding-left: 15px;
}

thead {
  font-size: 1.1em;
}

/* tabs */
.card {
  background: #FFF none repeat scroll 0% 0%;
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); */
  margin-bottom: 30px;
  min-height: 278px;
}

.tab-content{
  padding:20px
}

.tab-pane {
     padding: 15px 0;
}

.tab-nav > li > a::after {
     background: #21527d none repeat scroll 0% 0%;
     color: #fff;
}

.nav-tabs > li.active > a::after, .nav-tabs > li:hover > a::after {
     transform: scale(1);
}

.nav-tabs > li > a::after {
     content: "";
     background: #51b649;
     height: 4px;
     position: absolute;
     width: 100%;
     left: 0px;
     top: 0px;
     transition: all 250ms ease 0s;
     transform: scale(0);
}

.nav-tabs > li.active > a, .nav-tabs > li > a:hover {
     border: none;
     color: inherit;
     background: transparent;
}

.nav-tabs > li > a {
     border: none;
     color: #666;
}

.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
     border-width: 0;
}

.nav-tabs {
     border-bottom: 0;
}

`;

export default GlobalStyle;
