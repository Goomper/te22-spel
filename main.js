import './style.css'
import { setup } from './src/setup.js'

const canvas = document.querySelector('#game')
const dummy = document.querySelector("#dummy")
setup(canvas, dummy)