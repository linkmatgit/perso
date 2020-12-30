import './css/app.scss'
import Turbolinks from 'turbolinks';

import "./elements"
import { Switch } from '/elements/Switch'
import { MarkdownEditor } from '/elements/editor'



customElements.define('input-switch', Switch, { extends: 'input' })
customElements.define('markdown-editor', MarkdownEditor, { extends: 'textarea' })
Turbolinks.start()
