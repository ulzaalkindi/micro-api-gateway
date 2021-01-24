const apiAdapter = require('../../apiAdapter');
const {
URL_SERVICE_COURSE,
HOSTNAME
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const courses = await api.get('/api/courses', {
      params: {
        ...req.query,
        status:'published'
      }
    });
    const courseData = courses.data;
    const firstPage = courseData.data.first_page_url.split('?').pop();
    const lastPage = courseData.data.last_page_url.split('?').pop();

    courseData.data.first_page_url = `${HOSTNAME}/courses?${firstPage}`;
    courseData.data.last_page_url = `${HOSTNAME}/courses?${lastPage}`;

    if(courseData.data.next_page_url){
      const nextPage = coursesData.data.next_page_url.split('?').pop();
      courseData.data.next_page_url = `${HOSTNAME}/courses?${nextPage}`;
    }
    if(courseData.data.prev_page_url){
      const prevPage = courseData.data.prev_page_url.split('?').pop();
      courseData.data.prev_page_url = `${HOSTNAME}/courses/${prevPage}`;
    }

    courseData.data.path = `${HOSTNAME}/courses`;

    return res.json(courses.data);
  } catch (error) {

    if(error.code === 'ECONNREFUSED') {
      return res.status(500).json({status:'error', message:'service unavailable'});
    }

    const {status, data} = error.response;
    return res.status(status).json(data);
  }
}