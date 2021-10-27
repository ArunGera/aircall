import axios from "axios";

const URLS = {
  activities: "https://aircall-job.herokuapp.com/activities",
  activityDetails: "https://aircall-job.herokuapp.com/activities/",
  archiveActivity: "https://aircall-job.herokuapp.com/activities/",
};

export default {
  getActivities: () => {
    return axios
      .get(URLS.activities)
      .then((resp) => resp.data || [])
      .catch((err) => {
        console.log("Error while fetching activities", err);
        return [];
      });
  },
  getActivityDetails: (id) => {
    return axios
      .get(`${URLS.activityDetails}${id}`)
      .then((resp) => {
        const data = resp.data;
        data.success = true;
        return data;
      })
      .catch((err) => {
        console.log("Error while fetching activity details", err);
        return { success: false };
      });
  },
  archiveActivity: (id) => {
    return axios
      .post(`${URLS.archiveActivity}${id}`, { is_archived: true })
      .then((resp) => {
        const data = resp.data;
        data.success = true;
        return data;
      })
      .catch((err) => {
        console.log("Error while archiving activity", err);
        return { success: false };
      });
  },
};
