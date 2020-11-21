import courses from '@/assets/json/course.json'

export default {
    namespaced: true,
    state: {
        courses: []
    },
    mutations: {
        setCourseData(state, courses) {
            state.courses = courses
        },
        removeCourseData(state, course_id) {
            let index = state.courses.indexOf(courses.find(course => course.id == course_id))
            state.courses.splice(index, 1)
        }
    },
    actions: {
        getCourseData({ dispatch, commit, state }) {
            return new Promise((resolve, reject) => {
                dispatch("http/post", { api: "teachcourse" }, { root: true }).then((data) => {
                    data = {
                        status: true,
                        result: courses
                    }
                    if (data.status) {
                        commit('setCourseData', data.result);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });

            });
        },
        deleteCourse({ dispatch, commit, state }, course_id) {
            return new Promise((resolve, reject) => {
                dispatch("http/post", { api: "deletecourse", course_id: course_id }, { root: true }).then((data) => {
                    data = {
                        status: true
                    }
                    if (data.status) {
                        commit("removeCourseData", course_id)
                        dispatch('getCourseData');
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });

            });
        }
    }
}