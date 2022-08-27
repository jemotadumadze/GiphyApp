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
        <img src="${obj.images.original.url}" alt="${obj.title}" >
        </div>
        <div class="gif-rating">
          <h6>Rating: ${obj.rating}</h6>
        </div>
    </div>
        `
      })
      .join('')
  }

  render() {
    const content = this._renderGifsList(this.data)
    this.setContent(content)
  }
}
