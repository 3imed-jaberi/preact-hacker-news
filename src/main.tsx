import { render } from 'preact'
import App from './app'
import './globalStyles.scss'

render(<App />, document.getElementById('app') as HTMLElement)
