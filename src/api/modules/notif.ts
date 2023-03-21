// 消息有关api
// @ts-check
import axios from 'axios';

export const getNotif = (states: any, types: any, page: any) => {
  return axios({
    method: 'GET',
    url: `/information`,
    params: { states, types, page },
  });
};

export const getNotifCount = () => {
  return axios({
    method: 'GET',
    url: `/information/count`,
  });
};

export const deleteMail = (id: any) => {
  return axios({
    method: 'DELETE',
    url: `/information/delete-information-at/${id}`,
  });
};

export const sendMessagesToAll = (title: any, content: any) => {
  return axios({
    method: 'PUT',
    url: `/information/send-to-all`,
    params: { title, content },
  });
};

export const sendMessagesToGroup = (title: any, content: any, groupId: any) => {
  return axios({
    method: 'PUT',
    url: `/information/send-to-group`,
    params: { title, content, groupId },
  });
};

export const sendMessagesToPerson = (
  title: any,
  content: any,
  recipient: any,
) => {
  return axios({
    method: 'PUT',
    url: `/information/send-to-person`,
    params: { title, content, recipient },
  });
};

export const markMail = (id: any) => {
  return axios({
    method: 'POST',
    url: `/information/read-information-at/${id}`,
  });
};

export const markAll = () => {
  return axios({
    method: 'POST',
    url: `/information/read-information-at`,
  });
};
