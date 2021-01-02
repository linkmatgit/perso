import './css/app.scss'
import Turbolinks from 'turbolinks';

import "./elements"
import { Switch } from '/elements/Switch'
import { MarkdownEditor } from '/elements/editor'
import {Alert, FloatingAlert} from "/elements/Alert";


customElements.define('alert-message', Alert)
customElements.define('alert-floating', FloatingAlert)
customElements.define('input-switch', Switch, { extends: 'input' })
customElements.define('markdown-editor', MarkdownEditor, { extends: 'textarea' })
Turbolinks.start()
