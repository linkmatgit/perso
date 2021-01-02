import './css/admin.scss'
import { DatePicker } from '/elements/DatePicker'
import { UserSelect } from '/elements/admin/UserSelect'
import InputAttachment from './elements/admin/InputAttachment.js'
import FileManager from './elements/admin/filemanager/index.js'
import { DiffEditor } from '/elements/DiffEditor'
import { ChaptersEditor } from '/elements/admin/ChaptersEditor'
import { ItemSorter } from '/elements/admin/ItemSorter'
import { FormNotification } from '/elements/admin/FormNotification'
import preactCustomElement from './functions/preact'
import Spotlight from '/elements/admin/Spotlight'

customElements.define('spotlight-bar', Spotlight)
customElements.define('input-attachment', InputAttachment, { extends: 'input' })
customElements.define('file-manager', FileManager)
customElements.define('date-picker', DatePicker, { extends: 'input' })
customElements.define('diff-editor', DiffEditor, { extends: 'textarea' })
customElements.define('chapters-editor', ChaptersEditor, {
  extends: 'textarea'
})
customElements.define('item-sorter', ItemSorter)
customElements.define('user-select', UserSelect, { extends: 'select' })
preactCustomElement('form-notification', FormNotification)
