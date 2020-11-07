export const formatData = (results) => {
  const data = results.map((result) => {
    result["gender"] = result.gender ? result.gender : "Not Stated";
    result["score"] = result.score ? result.score : 0;
    return result;
  });
  return data;
};

export const setDataLimit = (users, showMore) => {
  let rows = users;
  return showMore ? rows.slice(0, 5) : rows;
};

export const fetchData = (
  setUsers,
  setAverageByCountry,
  setAverageByGender,
  isSubscribed
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

export const average = (data, type) => {
  const reduced = data.reduce(function (m, d) {
    if (!m[d[type]]) {
      m[d[type]] = { ...d, count: 1 };
      return m;
    }
    m[d[type]].score += d.score;
    m[d[type]].count += 1;
    return m;
  }, {});

  const result = Object.keys(reduced).map(function (k) {
    const item = reduced[k];
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
