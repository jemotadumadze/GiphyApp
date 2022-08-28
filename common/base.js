export class Base {
  id = ''
  data = []
  constructor(id, data) {
    this.id = id
    this.data = data
  }
  setContent(content) {
    this.id.innerHTML = content
  }
}
