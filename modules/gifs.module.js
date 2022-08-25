import { Base } from '../common/base.js'

export class gifItems extends Base {
  constructor(id, data) {
    // super();
    super(id, data)
  }

  _renderGifsList(list) {
    return list
      .map((obj) => {
        return `
         <div class="gif-item">
            <div class="gif">
            <img src="" alt="" >
            </div>
            <div class="gif-rating">
              <span>Rating:</span>
            </div>
        </div>
        `
      })
      .join('')
  }

  render() {
    const content = this._renderGifsList(this.data)
    this.setHtmlContent(content)
  }
}
