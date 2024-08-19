import React from 'react'
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import styles from './nav.module.scss'

export const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <NavLink to="/">FORSIDE</NavLink>
            <NavLink to="/Lineup">LINEUP</NavLink>
            <NavLink to="/Program">PROGRAM</NavLink>
            <NavLink to="/Camps">CAMPS</NavLink>
            <NavLink to="/Info">INFO</NavLink>
            <NavLink to="/Billetter">KØB BILLET</NavLink>
            <NavLink to="/Login">LOGIN</NavLink>
            <li><IoSearchOutline /></li>
        </ul>
    </nav>
    </>
  )
}
