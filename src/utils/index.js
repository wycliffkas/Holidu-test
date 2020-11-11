//format fetched data 
export const formatData = (results) => {
  const data = results.map((result) => {
    result["gender"] = result.gender ? result.gender : "Not Stated";
    result["score"] = result.score ? result.score : 0;
    return result;
  });
  return data;
};

//return sorted data based of sort type
export const sortData = (users, sortVal) => {
  if (!sortVal) {
    return users;
  }
  let sortResults = [];
  switch (sortVal) {
    case "first_name_asc":
      sortResults = users.sort((a, b) =>
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
      );
      break;

    case "first_name_desc":
      sortResults = users.sort((a, b) =>
        a.first_name < b.first_name ? 1 : b.first_name < a.first_name ? -1 : 0
      );
      break;
    case "country_asc":
      sortResults = users.sort((a, b) =>
        a.country > b.country ? 1 : b.country > a.country ? -1 : 0
      );
      break;

    case "country_desc":
      sortResults = users.sort((a, b) =>
        a.country < b.country ? 1 : b.country < a.country ? -1 : 0
      );
      break;

    default:
      sortResults = users;
      break;
  }
  return sortResults;
};

//set number of rows to display intially
export const setDataLimit = (users, showMore) => {
  let rows = users;
  return showMore ? rows.slice(0, 5) : rows;
};

//fetch data from API
export const fetchData = (
  setUsers,
  setAverageByCountry,
  setAverageByGender,
  isSubscribed,
) => {
  fetch("http://localhost:3000/api/people.json")
    .then((response) => response.json())
    .then((results) => {
      if (isSubscribed) {
        const data = formatData(results);
        setUsers(data);

        const AverageCountryData = average(data, "country");
        setAverageByCountry(AverageCountryData);

        const AverageGenderData = average(data, "gender");
        setAverageByGender(AverageGenderData);
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

//return average values for given type
export const average = (values, type) => {
  const reduced = values.reduce(function (item, i) {
    if (!item[i[type]]) {
      item[i[type]] = { ...i, count: 1 };
      return item;
    }
    item[i[type]].score += i.score;
    item[i[type]].count += 1;
    return item;
  }, {});

  const result = Object.keys(reduced).map(function (i) {
    const item = reduced[i];

    if (type === "country") {
      return {
        country: item.country,
        score: Math.ceil(item.score / item.count),
      };
    } else {
      return {
        gender: item.gender,
        score: Math.ceil(item.score / item.count),
      };
    }
  });

  return result;
};


