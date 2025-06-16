
import React from "react";
import AboSec from "../Components/AboSec"
import CertiSec from "../Components/CertiSec"
import HomSec from "../Components/HomSec"
import ProjSec from "../Components/ProjSec"
import ContSec from "../Components/ContSec"
const NavBarData=[
{
    path:'/AboSec',
    element:<AboSec />,
    label:"Sober Mí"
},
{
    path:'/CertiSec',
    element:<CertiSec />,
    label:"Mis certificaciones"
},
{
    path:'/HomSec',
    element:<HomSec />,
    label:"Inicio"
},
{
    path:'/ProjSec',
    element:<ProjSec />,
    label:"Proyectos"
},
{
    path:'/ContSec',
    element:<ContSec/>,
    label:"Contactame"
}
]
export default NavBarData