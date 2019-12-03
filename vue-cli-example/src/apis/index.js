import axios from 'axios'
import './config'

async function getDemoData () {
  const res = await axios.get(`https://api.apiopen.top/musicRankings`)
  return res.data;
}
export {
  getDemoData
}