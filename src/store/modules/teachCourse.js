import courses from '@/assets/json/course.json'

export default {
    namespaced: true,
    state: {
        courses: []
    },
    mutations: {
        setCourseData (state, courses) {
            state.courses = courses
        },
        removeCourseData (state, courseId) {
            const index = state.courses.indexOf(courses.find(course => course.id === courseId))
            state.courses.splice(index, 1)
        }
    },
    actions: {
        getCourseData ({ dispatch, commit, state }) {
            return new Promise((resolve, reject) => {
                commit('setCourseData', courses)
                resolve()
            })
        },
        deleteCourse ({ dispatch, commit, state }, courseId) {
            return new Promise((resolve, reject) => {
                commit('removeCourseData', courseId)
                dispatch('getCourseData')
                resolve(true)
                // dispatch('http/post', { api: 'deletecourse', course_id: courseId }, { root: true }).then((data) => {
                //     data = {
                //         status: true
                //     }
                //     if (data.status) {
                //         commit('removeCourseData', courseId)
                //         dispatch('getCourseData')
                //         resolve(true)
                //     } else {
                //         resolve(false)
                //     }
                // })
            })
        }
    }
}
