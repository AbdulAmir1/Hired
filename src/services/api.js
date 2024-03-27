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

const getTestsForUser = async (user_id) => {
  await axios
    .get(`${BASEURL}/tests_groups/users/${user_id}`)
    .then(function (response) {
      console.log('new type created.')
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { addNewTestType, getTestsForUser }
