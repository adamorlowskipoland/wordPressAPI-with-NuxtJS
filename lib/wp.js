import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  posts (options) {
    const params = {
      page: 1,
      per_page: 5,
      ...options
    }
    return axios.get(`${this.apiBase}/wp/v2/posts`, { params })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => ({ error: e }))
  }

  authors (options) {
    const params = {
      page: 1,
      per_page: 20,
      ...options
    }
    return axios.get(`${this.apiBase}/wp/v2/users`, { params })
      .then(json => {
        return { users: json.data }
      })
      .catch(e => ({ error: e }))
  }

  siteData () {
    return axios.get(this.apiBase)
      .then(json => {
        const { name, description, url, home, gmt_offset, timezone_string } = json.data
        return { site_data: { name, description, url, home, gmt_offset, timezone_string } }
      })
      .catch(e => ({ error: e }))
  }
}

const wp = new WpApi('http://src.wordpress-develop.test/')

export default wp
