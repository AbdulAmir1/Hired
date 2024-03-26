import axios from 'axios'
import BASEURL from '../../config'
const addNewTestType = async (testType) => {
  await axios
    .post(`${BASEURL}/tests/types`, { name: 'Yes/No' })
    .then(function (response) {
      console.log('new type created.')
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default addNewTestType
