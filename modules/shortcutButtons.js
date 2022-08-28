import { Base } from '../common/base.js'

export class shortcutBtnsBlock extends Base {
  constructor(id, data) {
    super(id, data)
  }
  _renderBtnsList(list) {
    return list
      .map((btnValue) => {
        return `
          <div class="shortcut-btn">${btnValue}</div>
          `
      })
      .join('')
  }
  render() {
    const content = this._renderBtnsList(this.data)
    this.setContent(content)
  }
}
