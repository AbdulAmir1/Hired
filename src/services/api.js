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
  // const response = await axios.get(
  //   'http://localhost:3000/tests_groups/users/66027a649471f3ab9ae58aec'
  // )
  // .then(function (response) {
  //   console.log('axios get done')
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   console.log('ERROR ===> ', error)
  // })

  const response = await axios
    .get(`${BASEURL}/tests_groups/users/${user_id}`)
    .then(function (response) {
      console.log('new type created.')
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })

  // console.log('res is ==> ', res)
  return response.data
}

export { addNewTestType, getTestsForUser }
