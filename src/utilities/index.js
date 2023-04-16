export const BASE_URL = "https://reqres.in";

export const ENDPOINT_USERS = BASE_URL + "/api/users";
export const USERS = "USERS";

export const getEndpointUrl = (params) => {
  const { type = "", query = {} } = params;
  let queryLine = "";

  for (const [key, value] of Object.entries(query)) {
    if (queryLine !== "") {
      queryLine = queryLine + "&";
    }
    const temp = key + "=" + value;
    queryLine = queryLine + temp;
  }

  switch (type) {
    case USERS:
      return ENDPOINT_USERS + "?" + queryLine;
    default:
      return "";
  }
};
