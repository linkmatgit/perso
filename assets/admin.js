import './css/admin.scss'

import { DatePicker } from '/elements/DatePicker'
import { UserSelect } from '/elements/admin/UserSelect'

customElements.define('date-picker', DatePicker, { extends: 'input' })
customElements.define('user-select', UserSelect, { extends: 'select' })
