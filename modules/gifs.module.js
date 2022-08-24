import { Base } from "../common/base.js";

export class gifItems extends Base {
  constructor(id, data) {
    super(id, data);
  }

  _renderGifsList(list) {
    return list
      .map((obj) => {
        return ``;
      })
      .join("");
  }

  render() {
    const content = this._renderGifsList(this.data);
    this.setHtmlContent(content);
  }
}