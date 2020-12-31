import './css/admin.scss'

import { DatePicker } from '/elements/DatePicker'
import { UserSelect } from '/elements/admin/UserSelect'
import InputAttachment from './elements/admin/InputAttachment.js'
import FileManager from './elements/admin/filemanager/index.js'

customElements.define('input-attachment', InputAttachment, { extends: 'input' })
customElements.define('file-manager', FileManager)
customElements.define('date-picker', DatePicker, { extends: 'input' })
customElements.define('user-select', UserSelect, { extends: 'select' })
