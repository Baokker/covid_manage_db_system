import request from "@/plugins/axios";

export function getDonateData(params) {
  return request({
    url: "/donateData",
    method: "get",
    params,
  });
}

export function postDonateData(data) {
  return request({
    url: "/donateData",
    method: "post",
    data: data,
  });
}
